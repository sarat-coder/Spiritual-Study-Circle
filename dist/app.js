(() => {
  'use strict';
  const books = window.VAHINI_BOOKS || [];
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sourceLink = value => {
    if (/^assets\/(?:bhagavatha-vahini|ramakatha-rasavahini-part-[12]|upanishad-vahini|sutra-vahini|sathya-sai-vahini|sandeha-nivarini|prema-vahini|prasnothara-vahini|prasanthi-vahini|leela-kaivalya|jnana-vahini|gita-vahini|dhyana-vahini)\.pdf(?:#page=[1-9]\d{0,2})?$/.test(value)) return escape(value);
    try { const u = new URL(value); return u.protocol === 'https:' && ['vahini.org','www.vahini.org'].includes(u.hostname) ? escape(u.href) : 'https://www.vahini.org/downloads.html'; }
    catch { return 'https://www.vahini.org/downloads.html'; }
  };
  const activityNames = {summary:'Summary',questions:'Questions & answers',quiz:'Quiz',notes:'My summary'};
  function artwork(bookId) {
    if(bookId==='geetha-vahini') return '<figure class="book-art"><img src="assets/baba-with-krishna.jpg" width="880" height="590" alt="Bhagawan Sri Sathya Sai Baba seated beside a Sri Krishna idol"><figcaption><a href="https://archive.sssmediacentre.org/journals/vol_12/01AUG14/The-Mystical-Sport-of-Sai-Krishna.htm" target="_blank" rel="noopener noreferrer">Image: Sri Sathya Sai Media Centre ↗</a></figcaption></figure>';
    if(bookId==='ramakatha-rasavahini') return '<div class="book-art"><div class="portrait-pair"><figure><img src="assets/sri-rama.jpg" width="249" height="294" alt="Devotional painting of Lord Sri Rama holding his bow"><figcaption>Sri Rama</figcaption></figure><figure><img class="baba-portrait" src="assets/bhagawan-baba.png" width="632" height="1123" alt="Bhagawan Sri Sathya Sai Baba wearing flower garlands"><figcaption>Bhagawan Baba</figcaption></figure></div><p class="image-credit">Images: <a href="https://www.vahini.org/ramakatha/ramakatha.html" target="_blank" rel="noopener noreferrer">Vahini.org</a> · <a href="https://www.sssmediacentre.org/" target="_blank" rel="noopener noreferrer">Sai Media Centre</a></p></div>';
    return '';
  }
  let bookIndex = 0, topicIndex = 0, activeTab = 'summary';
  const attempts = new Map(), notes = new Map();
  const currentBook = () => books[bookIndex];
  const currentTopic = () => currentBook().topics[topicIndex];
  const key = () => `${currentBook().id}/${currentTopic().id}`;
  const announce = message => { $('announcement').textContent = message; };
  function focusActivity() {
    $('activity').scrollIntoView({block:'start'});
    $('activity').focus({preventScroll:true});
  }
  function getAttempt() {
    if (!attempts.has(key())) attempts.set(key(), {answers:[],checked:false,page:0});
    return attempts.get(key());
  }
  function loadNote() {
    if (notes.has(key())) return notes.get(key());
    let value = '';
    try { value = localStorage.getItem(`vahini-note:${key()}`) || ''; } catch {}
    notes.set(key(), value);
    return value;
  }
  function saveNote(value) {
    notes.set(key(), value);
    let saved = true;
    try { localStorage.setItem(`vahini-note:${key()}`, value); } catch { saved = false; }
    if ($('note-status')) $('note-status').textContent = saved ? 'Saved on this browser only. Your summary is private to this browser and is not shared.' : 'Kept for this session. Browser storage is unavailable; copy your summary before leaving.';
    return saved;
  }
  function updateHash() {
    const hash = `#${currentBook().id}/${currentTopic().id}/${activeTab}`;
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }
  function setStudy(bi,ti=0,tab='summary',moveFocus=false) {
    if (!Number.isInteger(bi) || !books[bi] || !Number.isInteger(ti) || !books[bi].topics[ti] || !activityNames[tab]) throw new Error('Choose an existing book, topic and activity.');
    bookIndex=bi; topicIndex=ti; activeTab=tab;
    render(); updateHash();
    if(moveFocus) { $('study').scrollIntoView({block:'start'}); $('study').focus({preventScroll:true}); }
    announce(`${currentBook().title}: ${currentTopic().title}. ${activityNames[activeTab]}.`);
  }
  function readHash() {
    if (location.hash === '#study') { $('study').focus(); return; }
    const [b,t,a] = location.hash.slice(1).split('/');
    const bi = books.findIndex(x=>x.id===b);
    const ti = bi < 0 ? -1 : books[bi].topics.findIndex(x=>x.id===t);
    setStudy(bi < 0 ? 0 : bi,ti < 0 ? 0 : ti,activityNames[a] ? a : 'summary');
  }
  function render() {
    const b=currentBook(),t=currentTopic();
    const chapterMode=b.organization==='chapters', unit=b.unitLabel==='section'?'section':chapterMode?'chapter':'topic';
    $('book-count').textContent=books.length;
    $('library-count').textContent=`${books.length} works`;
    $('book-list').innerHTML=books.map((x,i)=>`<button class="book-item ${i===bookIndex?'active':''}" data-book="${i}" ${i===bookIndex?'aria-current="true"':''}><span class="book-number">${String(i+1).padStart(2,'0')}</span><span class="book-name">${escape(x.title)}<span class="book-subtitle">${escape(x.subtitle)}</span></span></button>`).join('');
    $('mobile-book').innerHTML=books.map((x,i)=>`<option value="${i}" ${i===bookIndex?'selected':''}>${escape(x.title)}</option>`).join('');
    const art=artwork(b.id);
    $('book-header').classList.toggle('with-art',!!art);
    const originalLinks=chapterMode&&b.pdfUrls?b.pdfUrls.map(p=>`<a href="${sourceLink(p.url)}" target="_blank" rel="noopener noreferrer">${escape(p.label)} PDF ↗</a>`).join(''):`<a href="${sourceLink(b.sourceUrl)}" target="_blank" rel="noopener noreferrer">Read original book ↗</a>${chapterMode?'':(b.pdfUrls || (b.pdfUrl?[{label:'Book',url:b.pdfUrl}]:[])).map(p=>`<a href="${sourceLink(p.url)}" target="_blank" rel="noopener noreferrer">${escape(p.label)} PDF ↗</a>`).join('')}`;
    $('book-header').innerHTML=`<div class="book-copy"><p class="eyebrow">THE VAHINI SERIES · ENGLISH STUDY</p><h2>${escape(b.title)}</h2><p class="description">${escape(b.description)}</p><div class="book-meta"><span>${b.topics.length} ${chapterMode?unit+'s':'study topics'}</span><span class="meta-divider" aria-hidden="true"></span>${originalLinks}</div></div>${art}`;
    $('topics-heading').textContent=`Study ${unit}s`;
    $('topic-position').textContent=t.part?`Part ${t.part} · Chapter ${t.chapterNumber} · ${topicIndex+1} of ${b.topics.length}`:`${unit[0].toUpperCase()+unit.slice(1)} ${topicIndex+1} of ${b.topics.length}`;
    $('previous-topic').textContent=`← Previous ${unit}`;
    $('next-topic').textContent=`Next ${unit} →`;
    const chapterOption=(x,i)=>`<option value="${i}" ${i===topicIndex?'selected':''}>${x.part?`Part ${x.part} · Chapter ${x.chapterNumber}`:String(i+1).padStart(2,'0')} · ${escape(x.title)}</option>`;
    const chapterOptions=t.part?[...new Set(b.topics.map(x=>x.part))].map(part=>`<optgroup label="Part ${part}">${b.topics.map((x,i)=>x.part===part?chapterOption(x,i):'').join('')}</optgroup>`).join(''):b.topics.map(chapterOption).join('');
    $('topics').innerHTML=chapterMode?`<label class="sr-only" for="chapter-select">Choose a ${unit}</label><select id="chapter-select" class="chapter-select">${chapterOptions}</select><p class="chapter-guide">${t.part?'Both parts in their original chapter order':'In the book’s original order'} · 5 questions per ${unit}</p>`:b.topics.map((x,i)=>`<button data-topic="${i}" class="topic-button ${i===topicIndex?'active':''}" aria-pressed="${i===topicIndex}"><span>${String(i+1).padStart(2,'0')}</span>${escape(x.title)}</button>`).join('');
    $('study-tabs').innerHTML=Object.entries(activityNames).map(([id,label])=>`<button id="tab-${id}" class="tab" role="tab" aria-controls="activity" aria-selected="${activeTab===id}" tabindex="${activeTab===id?'0':'-1'}" data-tab="${id}">${label}${id==='quiz'?`<span class="tab-count">${t.quiz.length}</span>`:''}</button>`).join('');
    $('activity').setAttribute('aria-labelledby',`tab-${activeTab}`);
    $('previous-topic').disabled=topicIndex===0;
    $('next-topic').disabled=topicIndex===b.topics.length-1;
    document.title=`${b.title} — Vahini Study Circle`;
    renderActivity();
  }
  function referenceCard(t) {
    return `<aside class="source-card"><p class="eyebrow">READ AT THE SOURCE</p><h4>${escape(t.chapter)}</h4><p>${t.pdfStartPage?`Supplied ${t.part?`Part ${t.part}`:'book'} · PDF pages ${t.pdfStartPage}–${t.pdfEndPage}. `:''}Return to the original text for the full teaching and context.</p><a href="${sourceLink(t.sourceUrl)}" target="_blank" rel="noopener noreferrer">${t.pdfStartPage?`Open ${currentBook().unitLabel==='section'?'section':'chapter'} in PDF`:'Open source text'} ↗</a></aside>`;
  }
  function renderActivity() {
    const t=currentTopic(), title=`<h3 class="activity-title">${escape(t.title)}</h3>`;
    if(activeTab==='summary') {
      $('activity').innerHTML=`${title}<div class="summary-grid"><div>${t.summary.split(/\n\s*\n/).map(p=>`<p class="summary-text">${escape(p)}</p>`).join('')}<div class="action-row"><button class="primary-button" data-tab="questions">Explore the questions</button><button class="secondary-button" data-tab="quiz">Try the quiz</button></div><p class="study-note">${t.pdfStartPage?`A ${currentBook().unitLabel==='section'?'section':'chapter'} summary based only on the supplied ${escape(currentBook().title)} ${t.part?`Part ${t.part} `:''}PDF, written in our own words.`:'A brief study summary based on the linked Vahini text.'}</p></div>${referenceCard(t)}</div>`;
    } else if(activeTab==='questions') {
      $('activity').innerHTML=`${title}<p class="qa-intro">Reflect on each question, then open the answer.</p>${t.qa.map((q,i)=>`<details><summary>${escape(q.q)}</summary><p>${escape(q.a)}</p></details>`).join('')}<p class="study-note">Study questions written from <a href="${sourceLink(t.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escape(t.chapter)}</a>.</p><div class="action-row"><button class="primary-button" data-tab="quiz">Test your understanding</button><button class="secondary-button" data-tab="notes">Write my summary</button></div>`;
    } else if(activeTab==='quiz') {
      const attempt=getAttempt();
      const score=t.quiz.filter((q,i)=>attempt.answers[i]===q.correct).length;
      const page=attempt.page||0, pages=Math.ceil(t.quiz.length/5), start=page*5, end=Math.min(start+5,t.quiz.length);
      const answered=t.quiz.filter((q,i)=>Number.isInteger(attempt.answers[i])).length;
      const pageButtons=Array.from({length:pages},(_,i)=>`<button type="button" class="quiz-page ${page===i?'active':''}" data-quiz-page="${i}" aria-label="Questions ${i*5+1} to ${Math.min(i*5+5,t.quiz.length)}" ${page===i?'aria-current="page"':''}>${i+1}</button>`).join('');
      $('activity').innerHTML=`${title}<p class="quiz-intro">${t.quiz.length} questions · Choose one answer for each. ${pages>1?'Your selections stay in place as you move between pages.':`All five questions are based on this ${currentBook().unitLabel==='section'?'section':'chapter'} in the supplied book.`}</p>${t.quiz.some(q=>q.type==='application')?'<p class="exercise-note">Practice scenarios are imagined situations based on this topic’s teaching; they are not events or quotations from the book.</p>':''}${attempt.checked?`<div class="quiz-result" role="status"><strong>${score} of ${t.quiz.length} correct</strong>${score===t.quiz.length?'Well done. Take a moment to reflect on what you learned.':'Review the explanations on each page, revisit the text, and try again.'}</div>`:''}<div class="quiz-toolbar"><div><strong>Questions ${start+1}–${end} of ${t.quiz.length}</strong><span id="answer-progress">${answered} of ${t.quiz.length} answered</span></div>${pages>1?`<nav class="quiz-pages" aria-label="Quiz pages">${pageButtons}</nav>`:''}</div><progress id="quiz-progress" max="${t.quiz.length}" value="${answered}" aria-label="Questions answered"></progress><form id="quiz-form">${t.quiz.slice(start,end).map((q,offset)=>{
        const i=start+offset;
        return `<fieldset class="quiz-question"><legend><span class="qnumber">${String(i+1).padStart(2,'0')}</span>${escape(q.q)}</legend><p class="question-type">${q.type==='application'?'Practice scenario':q.type==='understanding'?'Understanding the teaching':'Study check'}</p><div class="options">${q.options.map((o,j)=>`<label class="option ${attempt.checked && j===q.correct?'correct':''} ${attempt.checked && attempt.answers[i]===j && j!==q.correct?'wrong':''}"><input type="radio" name="question-${i}" value="${j}" data-question="${i}" ${attempt.answers[i]===j?'checked':''} ${attempt.checked?'disabled':''}><span>${escape(o)}${attempt.checked && j===q.correct?' ✓':''}</span></label>`).join('')}</div>${attempt.checked?`<p class="feedback ${attempt.answers[i]!==q.correct?'incorrect':''}"><strong>${attempt.answers[i]===q.correct?'Correct.':'Correct answer: '+escape(q.options[q.correct])+'.'}</strong> ${escape(q.explanation)} <a href="${sourceLink(q.sourceUrl||t.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source: ${escape(q.sourceLabel||t.chapter)} ↗</a></p>`:''}</fieldset>`;
      }).join('')}<div class="quiz-pagination" ${pages===1?'hidden':''}><button type="button" class="secondary-button" data-quiz-page="${page-1}" ${page===0?'disabled':''}>← Previous questions</button><button type="button" class="secondary-button" data-quiz-page="${page+1}" ${page===pages-1?'disabled':''}>Next questions →</button></div><div class="action-row">${attempt.checked?'<button class="secondary-button" type="button" id="retry-quiz">Try again</button><button class="primary-button" type="button" data-tab="notes">Write my summary</button>':`<button class="primary-button" type="submit">Check all ${t.quiz.length} answers</button>`}</div><p id="quiz-error" class="form-error" role="alert"></p></form><p class="study-note">Based on <a href="${sourceLink(t.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escape(t.chapter)}</a>. Your quiz selections and score are kept only during this visit.</p>`;
    } else {
      $('activity').innerHTML=`${title}<p class="notes-intro">What did you understand? Write the main idea in your own words and one way to practise it.</p><label class="note-label" for="personal-note">My reflection on this topic</label><textarea id="personal-note" maxlength="12000" placeholder="The main idea I take from this topic is…"></textarea><p id="note-status" class="note-status" aria-live="polite">Saved automatically on this browser only. No account or sharing.</p><p class="study-note">These are your personal notes. They are kept separately from the study material.</p>`;
      $('personal-note').value=loadNote();
    }
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');
    if(!button || button.disabled) return;
    if(button.dataset.book!==undefined) setStudy(Number(button.dataset.book),0,'summary',true);
    else if(button.dataset.topic!==undefined) setStudy(bookIndex,Number(button.dataset.topic),'summary');
    else if(button.dataset.tab) {setStudy(bookIndex,topicIndex,button.dataset.tab);$('tab-'+activeTab).focus({preventScroll:true});}
    else if(button.id==='previous-topic') {setStudy(bookIndex,topicIndex-1);focusActivity();}
    else if(button.id==='next-topic') {setStudy(bookIndex,topicIndex+1);focusActivity();}
    else if(button.dataset.quizPage!==undefined) {
      const page=Number(button.dataset.quizPage);
      if(Number.isInteger(page)&&page>=0&&page<Math.ceil(currentTopic().quiz.length/5)) {
        getAttempt().page=page;renderActivity();focusActivity();announce(`Questions ${page*5+1} to ${Math.min(page*5+5,currentTopic().quiz.length)}.`);
      }
    }
    else if(button.id==='retry-quiz') {attempts.delete(key());renderActivity();focusActivity();announce('Quiz reset. Choose your answers.');}
  });
  $('mobile-book').addEventListener('change',e=>setStudy(Number(e.target.value),0,'summary',true));
  document.addEventListener('change',e=>{
    if(e.target.id==='chapter-select') {setStudy(bookIndex,Number(e.target.value),'summary');$('chapter-select').focus({preventScroll:true});}
    if(e.target.matches('input[data-question]')) {
      getAttempt().answers[Number(e.target.dataset.question)]=Number(e.target.value);
      const answered=currentTopic().quiz.filter((q,i)=>Number.isInteger(getAttempt().answers[i])).length;
      $('answer-progress').textContent=`${answered} of ${currentTopic().quiz.length} answered`;
      $('quiz-progress').value=answered;
      $('quiz-error').textContent='';
    }
  });
  document.addEventListener('input',e=>{if(e.target.id==='personal-note') saveNote(e.target.value);});
  document.addEventListener('submit',e=>{
    if(e.target.id!=='quiz-form') return;
    e.preventDefault();
    const attempt=getAttempt();
    if(!currentTopic().quiz.every((q,i)=>Number.isInteger(attempt.answers[i]))) {
      const i=currentTopic().quiz.findIndex((q,i)=>!Number.isInteger(attempt.answers[i]));
      attempt.page=Math.floor(i/5);renderActivity();
      $('quiz-error').textContent=`Please answer all ${currentTopic().quiz.length} questions before checking. Question ${i+1} is still unanswered.`;
      document.querySelector(`input[name="question-${i}"]`).focus();
      return;
    }
    attempt.checked=true;attempt.page=0;renderActivity();focusActivity();
  });
  $('study-tabs').addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    e.preventDefault();
    const ids=Object.keys(activityNames);let i=ids.indexOf(activeTab);
    i=e.key==='Home'?0:e.key==='End'?ids.length-1:(i+(e.key==='ArrowRight'?1:-1)+ids.length)%ids.length;
    setStudy(bookIndex,topicIndex,ids[i]);$('tab-'+activeTab).focus();
  });
  window.addEventListener('hashchange',readHash);
  if(!books.length) { $('activity').innerHTML='<h2>The study collection could not load.</h2><p>Please refresh this page.</p>';return; }
  readHash();
  const context=document.modelContext;
  if(context?.registerTool) {
    const lifecycle=new AbortController();
    const register=tool=>{try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
    register({name:'list_vahini_topics',description:'Read the available Vahini books and study topics.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>books.map(b=>({id:b.id,title:b.title,topics:b.topics.map(t=>({id:t.id,title:t.title}))}))});
    register({name:'open_vahini_topic',description:'Open a Vahini study topic and its summary, questions, quiz, or personal notes.',inputSchema:{type:'object',properties:{bookId:{type:'string'},topicId:{type:'string'},activity:{enum:Object.keys(activityNames)}},required:['bookId','topicId'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>{
      const bi=books.findIndex(b=>b.id===input?.bookId);const ti=books[bi]?.topics.findIndex(t=>t.id===input?.topicId)??-1;
      setStudy(bi,ti,input.activity||'summary');return {book:currentBook().title,topic:currentTopic().title,activity:activeTab};
    }});
    register({name:'save_personal_vahini_summary',description:'Save the user’s own summary for the currently selected topic on this browser only. Replaces that topic’s existing personal summary.',inputSchema:{type:'object',properties:{summary:{type:'string',maxLength:12000}},required:['summary'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{
      if(typeof input?.summary!=='string'||input.summary.length>12000)throw new Error('Provide a summary of at most 12000 characters.');
      const persisted=saveNote(input.summary);setStudy(bookIndex,topicIndex,'notes');return {topic:currentTopic().title,savedOnBrowser:persisted,keptForSession:true};
    }});
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
})();
