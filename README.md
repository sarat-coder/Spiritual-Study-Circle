# Vahini Study Circle

An independent English study companion to the Vahini series.

Bhagavatha Vahini now follows all 42 chapters of the user-supplied 175-page PDF: fuller two-paragraph summaries, 210 chapter-based questions and answers, and 210 quiz questions (exactly five per chapter). It preserves the chapter order and titles in that edition. Source links point to the appropriate page of the supplied PDF, served unchanged at `dist/assets/bhagavatha-vahini.pdf`. References use PDF page numbers, starting with the cover as page 1.

Ramakatha Rasavahini combines the two user-supplied PDFs into one book entry: Part 1 has 18 chapters and Part 2 has 14. All 32 chapters include two-paragraph summaries, five questions and answers, and five quiz questions (160 of each). Original chapter numbers remain visible within each part. Links open the correct page of the unchanged source PDFs at `dist/assets/ramakatha-rasavahini-part-1.pdf` and `dist/assets/ramakatha-rasavahini-part-2.pdf`.

Upanishad Vahini follows all 12 chapters of the supplied 73-page PDF, with two-paragraph summaries, 60 questions and answers, and 60 quiz questions (five per chapter). Chapter links use the PDF's page numbers and the unchanged source at `dist/assets/upanishad-vahini.pdf`. The introduction and Brahmanubhava chapter are included; the glossary is not treated as a chapter.

Sutra Vahini follows the 12 numbered aphorism chapters of the supplied 61-page PDF, with two-paragraph summaries, 60 questions and answers, and 60 quiz questions (five per chapter). Links open the relevant PDF pages in `dist/assets/sutra-vahini.pdf`. Prefaces, the unnumbered introductory essay, and the glossary remain available in the original PDF.

The other 11 works retain their existing 33 selected topics and 660 quiz questions. Their hypothetical application exercises remain labelled. Total collection: 15 works, 131 study entries, 523 Q&A, and 1,150 quiz questions. Bhagavatha, Ramakatha, Upanishad, and Sutra have complete numbered-chapter coverage.

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

Use only the Vahini texts and user-supplied books. Bhagavatha, Ramakatha, and Upanishad material must be grounded exclusively in their supplied PDFs; do not substitute familiar retellings or outside commentary. No outside commentary, general internet material or other collections from the downloads page should be added. The user separately authorized Sri Sathya Sai Media Centre as an image source. Present paraphrases and quiz explanations as study aids, never as verbatim words of Bhagawan Baba. Preserve source links and state the scope of coverage honestly.

## Image sources

- Geetha photograph, Baba beside a Sri Krishna idol: [Sri Sathya Sai Media Centre archive](https://archive.sssmediacentre.org/journals/vol_12/01AUG14/The-Mystical-Sport-of-Sai-Krishna.htm).
- Baba portrait: [Sri Sathya Sai Media Centre](https://www.sssmediacentre.org/), supplied asset `assets/swami-hr.png`.
- Rama painting: [Vahini.org Ramakatha](https://www.vahini.org/ramakatha/ramakatha.html), supplied asset `ramakataplaatjes/rama1.jpg`.

Images are displayed without modification and served from this site's assets directory. Original credit marks are retained.
