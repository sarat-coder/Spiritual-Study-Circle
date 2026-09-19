# Vahini Study Circle

An independent English study companion to the Vahini series.

Bhagavatha Vahini now follows all 42 chapters of the user-supplied 175-page PDF: fuller two-paragraph summaries, 210 chapter-based questions and answers, and 210 quiz questions (exactly five per chapter). It preserves the chapter order and titles in that edition. Source links point to the appropriate page of the supplied PDF, served unchanged at `dist/assets/bhagavatha-vahini.pdf`. References use PDF page numbers, starting with the cover as page 1.

The other 14 works retain their existing 45 selected topics and 900 quiz questions. Their hypothetical application exercises remain labelled. Total collection: 15 works, 87 study entries, 255 Q&A, and 1,110 quiz questions. Only Bhagavatha has been revised to complete chapter coverage in this update.

## Features

- Choose a book, then a topic, then Summary, Questions & answers, Quiz or My summary.
- Quizzes validate unanswered items, show explanations, and can be retried.
- Personal summaries save automatically to local browser storage, keyed by book and topic. Nothing is uploaded; no accounts or shared submissions exist.
- Book, topic and activity are addressable in URL fragments.
- Responsive layout, keyboard-operable tabs, native form controls and source links.

## Files

- `dist/index.html`: page structure and metadata.
- `dist/styles.css`: responsive visual styles.
- `dist/content.js`: source-linked authored study material.
- `dist/app.js`: navigation, questions, quizzes, personal notes and optional browser tools.
- `.openai/hosting.json`: the registered Site identity and static deployment directory.

The site requires no build process or external JavaScript dependencies. Serve `dist` with any static HTTP server. It also opens locally, although browser storage behavior for local files varies.

## Content policy

Use only the Vahini texts and user-supplied books. Bhagavatha material must be grounded exclusively in the supplied Bhagavatha Vahini PDF; do not substitute familiar retellings or outside commentary. No outside commentary, general internet material or other collections from the downloads page should be added. The user separately authorized Sri Sathya Sai Media Centre as an image source. Present paraphrases and quiz explanations as study aids, never as verbatim words of Bhagawan Baba. Preserve source links and state the scope of coverage honestly.

## Image sources

- Geetha photograph, Baba beside a Sri Krishna idol: [Sri Sathya Sai Media Centre archive](https://archive.sssmediacentre.org/journals/vol_12/01AUG14/The-Mystical-Sport-of-Sai-Krishna.htm).
- Baba portrait: [Sri Sathya Sai Media Centre](https://www.sssmediacentre.org/), supplied asset `assets/swami-hr.png`.
- Rama painting: [Vahini.org Ramakatha](https://www.vahini.org/ramakatha/ramakatha.html), supplied asset `ramakataplaatjes/rama1.jpg`.

Images are displayed without modification and served from this site's assets directory. Original credit marks are retained.
