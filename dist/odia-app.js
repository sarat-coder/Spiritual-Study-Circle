(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const num = n => String(n).replace(/\d/g, d => '୦୧୨୩୪୫୬୭୮୯'[d]);
  const editions = [
    {id:'upanishad',title:'ଉପନିଷଦ ବାହିନୀ',translations:window.UPANISHAD_ODIA},
    {id:'sutra',title:'ସୂତ୍ର ବାହିନୀ',translations:window.SUTRA_ODIA}
  ].filter(b => b.translations?.length);
  const books = editions.map(b => {
    const original = window.VAHINI_BOOKS?.find(x => x.id === b.id);
    return {...b, sourceUrl:original.sourceUrl, chapters:b.translations.map((t,i) => ({...original.topics[i],...t,
      quiz:t.quiz.map(([q,options,explanation],j)=>({q,options,explanation,correct:original.topics[i].quiz[j].correct}))
    }))};
  });
  let bookIndex = 0, chapters = books[0]?.chapters || [];
  const book = () => books[bookIndex];
  const tabs = {summary:'ସାରାଂଶ', questions:'ପ୍ରଶ୍ନୋତ୍ତର', quiz:'ପ୍ରଶ୍ନମାଳା', notes:'ମୋ ସାରାଂଶ'};
  const attempts = new Map(), notes = new Map();
  let index = 0, tab = 'summary';
  const current = () => chapters[index];
  const noteKey = () => `vahini-note:or:${book().id}/${current().id}`;
  const attemptKey = () => `${book().id}/${current().id}`;
  const attempt = () => { if (!attempts.has(attemptKey())) attempts.set(attemptKey(), {answers:[], checked:false}); return attempts.get(attemptKey()); };
  const pdfLink = t => `${book().sourceUrl}#page=${t.pdfStartPage}`;
  const source = t => `<a href="${pdfLink(t)}" target="_blank" rel="noopener noreferrer">ମୂଳ ପାଠ: PDF ପୃଷ୍ଠା ${num(t.pdfStartPage)}–${num(t.pdfEndPage)} ↗</a>`;
  const focusActivity = () => { $('activity').focus({preventScroll:true}); $('activity').scrollIntoView({block:'start'}); };
  function go(i, nextTab = 'summary') {
    if (!chapters[i] || !Object.hasOwn(tabs, nextTab)) return;
    index = i; tab = nextTab;
    const hash = `#${book().id}/${current().id}/${tab}`;
    history.replaceState(null, '', hash);
    $('english-link').href = `./${hash}`;
    document.querySelector('.collection-source').href = `./${hash}`;
    render();
    $('announcement').textContent = `${current().title}। ${tabs[tab]}।`;
  }
  function readHash() {
    if (location.hash === '#study') { $('study').focus(); return; }
    const [bookId, chapter, activity] = location.hash.slice(1).split('/');
    const bi = books.findIndex(b => b.id === bookId);
    bookIndex = bi < 0 ? 0 : bi; chapters = book().chapters;
    const i = chapters.findIndex(t => t.id === chapter);
    go(i < 0 ? 0 : i, Object.hasOwn(tabs, activity) ? activity : 'summary');
  }
  function render() {
    const t = current();
    document.title = `${t.title} — ${book().title}`;
    $('odia-book').innerHTML=books.map((b,i)=>`<option value="${i}" ${i===bookIndex?'selected':''}>${esc(b.title)}</option>`).join('');
    document.querySelector('.book-header h2').textContent=book().title;
    document.querySelector('.book-header .description').textContent=`ମୂଳ ପୁସ୍ତକର କ୍ରମରେ ${num(chapters.length)}ଟି ଅଧ୍ୟାୟ। ପ୍ରତି ଅଧ୍ୟାୟରେ ସାରାଂଶ, ପାଞ୍ଚଟି ପ୍ରଶ୍ନୋତ୍ତର ଓ ପାଞ୍ଚଟି ବହୁବିକଳ୍ପ ପ୍ରଶ୍ନ ରହିଛି।`;
    document.querySelector('.book-meta a').href=book().sourceUrl;
    $('chapter-list').innerHTML = chapters.map((c,i) => `<button class="book-item ${i===index?'active':''}" data-chapter="${i}" ${i===index?'aria-current="true"':''}><span class="book-number">${num(i+1)}</span><span class="book-name">${esc(c.title)}</span></button>`).join('');
    $('chapter-select').innerHTML = chapters.map((c,i) => `<option value="${i}" ${i===index?'selected':''}>${num(i+1)} · ${esc(c.title)}</option>`).join('');
    $('topic-position').textContent = `ଅଧ୍ୟାୟ ${num(index+1)} / ${num(chapters.length)}`;
    $('study-tabs').innerHTML = Object.entries(tabs).map(([id,label]) => `<button id="tab-${id}" class="tab" role="tab" aria-controls="activity" aria-selected="${tab===id}" tabindex="${tab===id?0:-1}" data-tab="${id}">${label}</button>`).join('');
    $('activity').setAttribute('aria-labelledby',`tab-${tab}`);
    $('previous-topic').disabled = index === 0;
    $('next-topic').disabled = index === chapters.length-1;
    renderActivity();
  }
  function renderActivity() {
    const t = current(), heading = `<h3 class="activity-title">${esc(t.title)}</h3>`;
    if (tab === 'summary') {
      $('activity').innerHTML = `${heading}<div class="summary-grid"><div>${t.summary.split('\n\n').map(p=>`<p class="summary-text">${esc(p)}</p>`).join('')}<div class="action-row"><button class="primary-button" data-tab="questions">ପ୍ରଶ୍ନୋତ୍ତର ପଢ଼ନ୍ତୁ</button><button class="secondary-button" data-tab="quiz">ପ୍ରଶ୍ନମାଳା ଚେଷ୍ଟା କରନ୍ତୁ</button></div><p class="study-note">ପ୍ରଦତ୍ତ ପୁସ୍ତକ ଉପରେ ଆଧାରିତ ଅଧ୍ୟୟନ ସାରାଂଶର ଓଡ଼ିଆ ରୂପାନ୍ତର।</p></div><aside class="source-card"><p class="eyebrow">ମୂଳ ପୁସ୍ତକ ପଢ଼ନ୍ତୁ</p><h4>ଅଧ୍ୟାୟ ${num(index+1)} · ${esc(t.title)}</h4><p>ସମ୍ପୂର୍ଣ୍ଣ ଶିକ୍ଷା ଓ ପ୍ରସଙ୍ଗ ପାଇଁ ପ୍ରଦତ୍ତ ଇଂରାଜୀ ପୁସ୍ତକ ପଢ଼ନ୍ତୁ।</p>${source(t)}</aside></div>`;
    } else if (tab === 'questions') {
      $('activity').innerHTML = `${heading}<p class="qa-intro">ପ୍ରତି ପ୍ରଶ୍ନ ଉପରେ ଚିନ୍ତନ କରନ୍ତୁ, ତାପରେ ଉତ୍ତର ଖୋଲନ୍ତୁ।</p>${t.quiz.map(q=>`<details><summary>${esc(q.q)}</summary><p>${esc(q.options[q.correct])}। ${esc(q.explanation)}</p></details>`).join('')}<p class="study-note">${source(t)}</p><div class="action-row"><button class="primary-button" data-tab="quiz">ନିଜ ବୁଝାମଣା ପରଖନ୍ତୁ</button><button class="secondary-button" data-tab="notes">ମୋ ସାରାଂଶ ଲେଖିବି</button></div>`;
    } else if (tab === 'quiz') {
      const a = attempt(), answered = a.answers.filter(Number.isInteger).length, score = t.quiz.filter((q,i)=>q.correct===a.answers[i]).length;
      $('activity').innerHTML = `${heading}<p class="quiz-intro">ଏହି ଅଧ୍ୟାୟର ପାଠ ଉପରେ ଆଧାରିତ ପାଞ୍ଚଟି ପ୍ରଶ୍ନ। ପ୍ରତି ପ୍ରଶ୍ନ ପାଇଁ ଗୋଟିଏ ଉତ୍ତର ବାଛନ୍ତୁ।</p>${a.checked?`<div class="quiz-result" role="status"><strong>୫ଟିରୁ ${num(score)}ଟି ସଠିକ୍</strong>${score===5?'ଭଲ କରିଛନ୍ତି। ଶିଖିଥିବା ବିଷୟ ଉପରେ ଚିନ୍ତନ କରନ୍ତୁ।':'ବ୍ୟାଖ୍ୟା ଓ ମୂଳ ପାଠ ପଢ଼ି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।'}</div>`:''}<p id="answer-progress" class="chapter-guide">୫ଟିରୁ ${num(answered)}ଟିର ଉତ୍ତର ଦିଆଯାଇଛି</p><progress id="quiz-progress" max="5" value="${answered}" aria-label="ଉତ୍ତର ଦିଆଯାଇଥିବା ପ୍ରଶ୍ନ"></progress><form id="quiz-form">${t.quiz.map((q,i)=>`<fieldset class="quiz-question"><legend><span class="qnumber">${num(i+1)}</span>${esc(q.q)}</legend><div class="options">${q.options.map((o,j)=>`<label class="option ${a.checked&&j===q.correct?'correct':''} ${a.checked&&a.answers[i]===j&&j!==q.correct?'wrong':''}"><input type="radio" name="question-${i}" value="${j}" data-question="${i}" ${a.answers[i]===j?'checked':''} ${a.checked?'disabled':''}><span>${esc(o)}${a.checked&&j===q.correct?' ✓':''}</span></label>`).join('')}</div>${a.checked?`<p class="feedback ${a.answers[i]===q.correct?'':'incorrect'}"><strong>${a.answers[i]===q.correct?'ସଠିକ୍।':'ସଠିକ୍ ଉତ୍ତର: '+esc(q.options[q.correct])+'।'}</strong> ${esc(q.explanation)} ${source(t)}</p>`:''}</fieldset>`).join('')}<div class="action-row">${a.checked?'<button type="button" id="retry-quiz" class="secondary-button">ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ</button><button type="button" data-tab="notes" class="primary-button">ମୋ ସାରାଂଶ ଲେଖିବି</button>':'<button type="submit" class="primary-button">ପାଞ୍ଚଟି ଉତ୍ତର ଯାଞ୍ଚ କରନ୍ତୁ</button>'}</div><p id="quiz-error" class="form-error" role="alert"></p></form><p class="study-note">ଆପଣଙ୍କ ଉତ୍ତର ଓ ଫଳାଫଳ କେବଳ ଏହି ଥରର ଅଧ୍ୟୟନ ସମୟରେ ରହିବ। ${source(t)}</p>`;
    } else {
      $('activity').innerHTML = `${heading}<p class="notes-intro">ଆପଣ କଣ ବୁଝିଲେ? ମୁଖ୍ୟ ଭାବଟି ନିଜ ଭାଷାରେ ଲେଖନ୍ତୁ ଏବଂ ତାହାକୁ ପାଳନ କରିବାର ଗୋଟିଏ ଉପାୟ ଲେଖନ୍ତୁ।</p><label class="note-label" for="personal-note">ଏହି ଅଧ୍ୟାୟ ଉପରେ ମୋ ଚିନ୍ତନ</label><textarea id="personal-note" maxlength="12000" placeholder="ଏହି ଅଧ୍ୟାୟରୁ ମୁଁ ବୁଝିଥିବା ମୁଖ୍ୟ ଭାବଟି ହେଉଛି…"></textarea><p id="note-status" class="note-status" role="status">ଆପଣଙ୍କ ଲେଖା କେବଳ ଏହି ବ୍ରାଉଜରରେ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ସଞ୍ଚିତ ହେବ।</p><p class="study-note">ଏଗୁଡ଼ିକ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ଟିପ୍ପଣୀ। ଏହା ଇଂରାଜୀ ଟିପ୍ପଣୀ ଓ ଅଧ୍ୟୟନ ସାମଗ୍ରୀଠାରୁ ଅଲଗା ରହିବ।</p>`;
      let value = notes.get(noteKey()) || '';
      if (!notes.has(noteKey())) { try { value = localStorage.getItem(noteKey()) || ''; } catch {} }
      $('personal-note').value = value;
    }
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || b.disabled) return;
    if (b.dataset.chapter !== undefined) {go(Number(b.dataset.chapter));focusActivity();}
    else if (b.dataset.tab) {go(index,b.dataset.tab);$('tab-'+tab).focus({preventScroll:true});}
    else if (b.id === 'previous-topic') {go(index-1);focusActivity();}
    else if (b.id === 'next-topic') {go(index+1);focusActivity();}
    else if (b.id === 'retry-quiz') {attempts.delete(attemptKey());renderActivity();focusActivity();}
  });
  $('chapter-select').addEventListener('change', e => {go(Number(e.target.value));$('chapter-select').focus({preventScroll:true});});
  $('odia-book').addEventListener('change', e => {bookIndex=Number(e.target.value);chapters=book().chapters;go(0);});
  document.addEventListener('change', e => {
    if (!e.target.matches('input[data-question]')) return;
    attempt().answers[Number(e.target.dataset.question)] = Number(e.target.value);
    const count = attempt().answers.filter(Number.isInteger).length;
    $('answer-progress').textContent = `୫ଟିରୁ ${num(count)}ଟିର ଉତ୍ତର ଦିଆଯାଇଛି`;
    $('quiz-progress').value = count; $('quiz-error').textContent = '';
  });
  document.addEventListener('submit', e => {
    if (e.target.id !== 'quiz-form') return; e.preventDefault();
    const a = attempt(), missing = current().quiz.findIndex((_,i)=>!Number.isInteger(a.answers[i]));
    if (missing >= 0) {
      $('quiz-error').textContent = `ପ୍ରଥମେ ପାଞ୍ଚଟିଯାକ ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ। ପ୍ରଶ୍ନ ${num(missing+1)}ର ଉତ୍ତର ବାକି ଅଛି।`;
      document.querySelector(`input[name="question-${missing}"]`).focus(); return;
    }
    a.checked = true; renderActivity(); focusActivity();
  });
  document.addEventListener('input', e => {
    if (e.target.id !== 'personal-note') return;
    notes.set(noteKey(),e.target.value);
    try {localStorage.setItem(noteKey(),e.target.value);$('note-status').textContent='କେବଳ ଏହି ବ୍ରାଉଜରରେ ସଞ୍ଚିତ ହୋଇଛି। ଅନ୍ୟ କାହା ସହ ଭାଗ କରାଯାଇନାହିଁ।';}
    catch {$('note-status').textContent='କେବଳ ଏହି ଅଧ୍ୟୟନ ସମୟ ପାଇଁ ରହିଛି। ବ୍ରାଉଜରରେ ସଞ୍ଚୟ ସମ୍ଭବ ନୁହେଁ; ବନ୍ଦ କରିବା ପୂର୍ବରୁ ଲେଖାଟି ନକଲ କରି ରଖନ୍ତୁ।';}
  });
  $('study-tabs').addEventListener('keydown', e => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    e.preventDefault(); const keys=Object.keys(tabs), i=keys.indexOf(tab);
    go(index,keys[e.key==='Home'?0:e.key==='End'?keys.length-1:(i+(e.key==='ArrowRight'?1:-1)+keys.length)%keys.length]);
    $('tab-'+tab).focus();
  });
  window.addEventListener('hashchange',readHash);
  if (!chapters.length) { $('activity').textContent='ଅଧ୍ୟୟନ ସାମଗ୍ରୀ ଖୋଲିପାରିଲା ନାହିଁ। ପୃଷ୍ଠାଟି ପୁଣି ଖୋଲନ୍ତୁ।'; return; }
  readHash();
})();
