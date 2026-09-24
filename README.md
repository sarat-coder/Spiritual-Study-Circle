# Vahini Study Circle

An independent English study companion to Bhagawan Sri Sathya Sai Baba's Vahini series. Devotees can study each book in its original chapter or section order, read fuller summaries, explore questions and answers, test their understanding, and write personal reflections.

**15 works · 402 study entries · 2,010 Q&A · 2,010 quiz questions**

- [Open Vahini Study Circle](https://vahini-study-circle.saratsaisanama.chatgpt.site/)
- [GitHub repository](https://github.com/sarat-coder/Spiritual-Study-Circle)

The hosted site currently uses owner-only access. Repository access and website access are managed separately.

## Quick start

This is a static HTML, CSS, and JavaScript website. No npm installation, framework, database, API key, or build step is required. Use a modern browser and any static web server.

With Git and Python 3 installed:

```sh
git clone https://github.com/sarat-coder/Spiritual-Study-Circle.git
cd Spiritual-Study-Circle
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

On Windows, `py -m http.server 4173 --bind 127.0.0.1 --directory dist` is an alternative if Python is available through the `py` launcher.

Open [the local website](http://127.0.0.1:4173). Stop the server with `Ctrl+C`. Use a local server rather than opening the HTML directly so browser storage has a consistent origin.

## Using the study circle

1. Select a Vahini from the collection.
2. Choose a chapter or section from its dropdown.
3. Read **Summary**, then open answers in **Questions & answers**.
4. Complete **Quiz** to check five answers and read their explanations.
5. Use **My summary** to write your own reflection.
6. Follow the source link to read the full teaching in the original PDF.

Every study entry has five Q&A and five multiple-choice questions. Questions test the supplied text rather than hypothetical practical scenarios. The Q&A and quiz views use the same five core questions in two study formats.

## Collection coverage

| Vahini | Chapters or sections | Q&A | Quiz questions | URL identifier |
| --- | ---: | ---: | ---: | --- |
| Gita Vahini | 27 chapters | 135 | 135 | `geetha-vahini` |
| Ramakatha Rasavahini | 32 chapters across two parts | 160 | 160 | `ramakatha-rasavahini` |
| Bhagavatha Vahini | 42 chapters | 210 | 210 | `bhagavata-vahini` |
| Prema Vahini | 73 sections | 365 | 365 | `prema-vahini` |
| Dharma Vahini | 13 chapters | 65 | 65 | `dharma-vahini` |
| Dhyana Vahini | 14 chapters | 70 | 70 | `dhyana-vahini` |
| Prasanthi Vahini | 29 sections | 145 | 145 | `prashanthi-vahini` |
| Jnana Vahini | 47 sections | 235 | 235 | `jnana-vahini` |
| Leela Kaivalya Vahini | 26 sections | 130 | 130 | `leela-kaivalya` |
| Prasnothara Vahini | 15 chapters | 75 | 75 | `prasnottara` |
| Sandeha Nivarini | 17 chapters | 85 | 85 | `sandeha-nivarini` |
| Sathya Sai Vahini | 24 chapters | 120 | 120 | `sathya-sai` |
| Sutra Vahini | 12 chapters | 60 | 60 | `sutra` |
| Upanishad Vahini | 12 chapters | 60 | 60 | `upanishad` |
| Vidya Vahini | 19 chapters | 95 | 95 | `vidya` |
| **Total** | **402 entries** | **2,010** | **2,010** | |

### Edition and source notes

Coverage follows the supplied editions. Some chapter and section headings were added by their editors; study numbering must not be mistaken for original authorial numbering. Prefaces and glossaries remain accessible in the PDFs but generally do not receive separate quizzes.

Bhagavatha Vahini now follows all 42 chapters of the user-supplied 175-page PDF: fuller two-paragraph summaries, 210 chapter-based questions and answers, and 210 quiz questions (exactly five per chapter). It preserves the chapter order and titles in that edition. Source links point to the appropriate page of the supplied PDF, served unchanged at `dist/assets/bhagavatha-vahini.pdf`. References use PDF page numbers, starting with the cover as page 1.

Ramakatha Rasavahini combines the two user-supplied PDFs into one book entry: Part 1 has 18 chapters and Part 2 has 14. All 32 chapters include two-paragraph summaries, five questions and answers, and five quiz questions (160 of each). Original chapter numbers remain visible within each part. Links open the correct page of the unchanged source PDFs at `dist/assets/ramakatha-rasavahini-part-1.pdf` and `dist/assets/ramakatha-rasavahini-part-2.pdf`.

Upanishad Vahini follows all 12 chapters of the supplied 73-page PDF, with two-paragraph summaries, 60 questions and answers, and 60 quiz questions (five per chapter). Chapter links use the PDF's page numbers and the unchanged source at `dist/assets/upanishad-vahini.pdf`. The introduction and Brahmanubhava chapter are included; the glossary is not treated as a chapter.

Sutra Vahini follows the 12 numbered aphorism chapters of the supplied 61-page PDF, with two-paragraph summaries, 60 questions and answers, and 60 quiz questions (five per chapter). Links open the relevant PDF pages in `dist/assets/sutra-vahini.pdf`. Prefaces, the unnumbered introductory essay, and the glossary remain available in the original PDF.

Sathya Sai Vahini follows all 24 chapters of the supplied 133-page PDF, with fuller two-paragraph summaries, 120 questions and answers, and 120 quiz questions (five per chapter). The unchanged PDF is served at `dist/assets/sathya-sai-vahini.pdf`, with chapter links to PDF pages 10–118. Prefaces and glossary remain available in the original PDF.

Sandeha Nivarini follows all 17 chapters of the supplied 77-page PDF, with two-paragraph summaries, 85 questions and answers, and 85 quiz questions (five per chapter). Source links use PDF pages 8–65 in the unchanged `dist/assets/sandeha-nivarini.pdf`. Prefaces and the glossary remain in the original PDF.

Prema Vahini follows all 73 numbered sections of the supplied 67-page PDF, in their exact original order and titles. Each section has a two-paragraph summary, five questions and answers, and five quiz questions with explanations (365 of each). Links open the relevant PDF pages 8–48 in the unchanged `dist/assets/prema-vahini.pdf`. Front matter and glossary remain in the original PDF. This book uses section labels to match its structure.

Prasnothara Vahini follows all 15 chapters of the supplied 57-page PDF, retaining their titles and order. Each has a two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (75 of each). Links open PDF pages 8–41 in the unchanged `dist/assets/prasnothara-vahini.pdf`. Front matter and glossary remain available in the original PDF. The established book URL identifier `prasnottara` is preserved.

Prasanthi Vahini follows all 29 editorial section headings of the supplied 53-page PDF, retaining their titles and order. Its preface explains that the original work had no chapters or sections; the study numbers are navigation aids. Every section has a two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (145 of each). Links open PDF pages 8–43 in the unchanged `dist/assets/prasanthi-vahini.pdf`. Front matter and glossary remain available in the source. The established book URL identifier `prashanthi-vahini` is preserved.

Leela Kaivalya Vahini follows all 26 titled teaching sections of the supplied 31-page PDF in their original order. The opening two paragraphs accompany the first section; “Sai Speaks to a Spiritual Aspirant” is the umbrella heading for the dialogue that follows. Each study section has a two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (130 of each). Source links use PDF pages 8–21 in the unchanged `dist/assets/leela-kaivalya.pdf`. Prefaces and glossary remain available in the PDF. Study numbers are navigation aids, not original chapter numbers.

Jnana Vahini follows all 47 numbered editorial sections of the supplied 53-page PDF, with the exact headings and order of this edition. The foreword states that the original had no chapter or section titles. Each section has a two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (235 of each); the final brief section is summarised proportionately. Source links use PDF pages 9–40 in the unchanged `dist/assets/jnana-vahini.pdf`. Front matter and glossary remain available in the PDF.

Gita Vahini follows all 27 Roman-numbered chapters of the supplied 137-page PDF. The edition states that its chapters have no titles; the study preserves their Roman labels and sequence rather than substituting the Bhagavad Gita’s 18-chapter structure. Each chapter has a fuller two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (135 of each). Source links use PDF pages 8–120 in the unchanged `dist/assets/gita-vahini.pdf`. Front matter and glossary remain in the PDF. The established URL identifier `geetha-vahini` and the existing Baba-with-Krishna image are preserved.

Dhyana Vahini follows all 14 titled chapters of the supplied 63-page PDF. This edition’s publisher explains that the chapter and section headings are editorial additions; their titles and order are retained. Every chapter has a fuller two-paragraph summary, five Q&A, and five source-based quizzes with explanations (70 of each). Source links use actual PDF pages 8–51 rather than the differing contents-page numbers. The unchanged source is served at `dist/assets/dhyana-vahini.pdf`; front matter and glossary remain available.

Dharma Vahini follows all 13 titled chapters of the supplied 73-page PDF, preserving their titles and order. Every chapter has a fuller two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (65 of each). Source links use PDF pages 9–55 in the unchanged `dist/assets/dharma-vahini.pdf`. Front matter and glossary remain available. Discussions of traditional social and household roles are attributed to the text.

Vidya Vahini follows all 19 numbered chapters of the supplied 69-page `VidyaVahiniInteractive.pdf`, preserving this edition’s editorial titles and order. Every chapter has a fuller two-paragraph summary, five Q&A, and five source-based quiz questions with explanations (95 of each). Source links use PDF pages 8–55 in the unchanged PDF served as `dist/assets/vidya-vahini.pdf`. Front matter and glossary remain available. The established URL identifier `vidya` is preserved.

All 15 works now have complete chapter or section coverage from the user-supplied PDFs. Total collection: 15 works, 402 study entries, 2,010 Q&A, and 2,010 quiz questions. No selected-topic placeholders or hypothetical application quizzes remain.

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
- `dist/app.js`: navigation, questions, quizzes, personal notes and browser interaction.
- `dist/assets/`: 16 source PDFs (Ramakatha has two parts) and three devotional images.
- `.openai/hosting.json`: the registered Site identity and static deployment directory.

The site requires no build process or external JavaScript dependencies. Serve `dist` with any static HTTP server. It also opens locally, although browser storage behavior for local files varies.

## Architecture and content format

`index.html` loads `content.js` before `app.js`. The content file assigns the collection to `window.VAHINI_BOOKS`; the application reads it and renders the selected book, study entry, and activity. All application logic runs in the browser.

Each book includes its stable `id`, display title, description, source links, and a `topics` array. Chapter-based books use `organization: 'chapters'`; section-based books additionally use `unitLabel: 'section'`. The property name `topics` is retained for both chapters and sections.

Each study entry contains:

- `id`, `title`, `chapter`, and `chapterNumber` for navigation and display.
- `summary`, with paragraphs separated by blank lines.
- `qa`, containing question (`q`) and answer (`a`) objects.
- `quiz`, containing `q`, four `options`, a zero-based `correct` index, `explanation`, and `type: 'recall'`.
- `sourceUrl`, `sourceLabel`, `pdfStartPage`, and `pdfEndPage` for source references.
- `part` where needed for Ramakatha's two-part organisation.

PDF references use the actual PDF page number, with the cover as page 1. Printed page labels or contents-page numbers can differ. A source URL such as `assets/vidya-vahini.pdf#page=8` points to the file and asks the PDF viewer to open that page; behaviour depends on the viewer.

### Navigation

Routes use URL fragments, so no server-side route rewriting is needed:

```text
#<book-id>/<entry-id>/<activity>
#vidya/chapter-01/summary
#vidya/chapter-01/questions
#vidya/chapter-01/quiz
#vidya/chapter-01/notes
```

Preserve existing IDs when revising content. They are used in bookmarks and personal-note storage. Changing a display title does not require changing its ID.

### Personal notes and privacy

Notes are stored in browser `localStorage` under `vahini-note:<book-id>/<entry-id>`. They are specific to the browser profile and website origin, so local development, another browser, and another host have separate notes. Clearing browser data can remove them; users should copy important notes elsewhere.

Quiz attempts are kept in memory for the current session. The application has no backend for accounts, shared submissions, or note synchronisation. Hosting access controls are separate from these browser-only features. PDF and image files are served with the website, and external source links open their respective sites.

## Updating the content

1. Read the supplied edition and identify its actual chapter or section boundaries.
2. Write original English paraphrases grounded only in that PDF. Preserve the edition's titles, order, distinctions, and context.
3. Provide exactly five Q&A and five recall questions per entry, with four distinct quiz options and an explanation of the correct answer.
4. Copy the unchanged PDF into `dist/assets/` and set its page references. Add any new PDF filename to the `sourceLink` allowlist in `dist/app.js`.
5. Update the relevant book in `dist/content.js`, preserving unrelated books and stable IDs.
6. Update coverage totals and source notes in this README and the footer in `dist/index.html`.
7. Increment the asset version query in `dist/index.html` when shipped CSS or JavaScript changes, so browsers load the update.

### Validation

Node.js is optional for development, but can check JavaScript syntax:

```sh
node --check dist/content.js
node --check dist/app.js
git diff --check
```

Before publishing a content change, confirm chapter counts, five questions in each set, valid answer indexes, unique options, correct PDF page links, and preservation of the other books. Compare the copied PDF with the supplied original. Review the local site to check navigation, quiz scoring and explanations, retry behaviour, source links, and saving a personal summary. Check both narrow and wide layouts when changing the interface.

There is currently no automated test suite or package-manager configuration in this repository.

## Hosting and source control

The current website is hosted with Sites. `.openai/hosting.json` identifies that existing project and declares `dist` as the static directory. Keep the project identity when updating this hosted site; do not create a second Site for ordinary edits. Publish through the Sites workflow and preserve the existing audience unless the owner requests a change.

GitHub stores the source on `main`. A GitHub push does not, by itself, publish the current Sites website. No GitHub Actions deployment workflow or GitHub Pages configuration is included.

On the original development checkout, `origin` points to the Sites source repository and `github` points to this GitHub repository. A fresh GitHub clone instead names GitHub `origin`. Check your remotes before pushing:

```sh
git remote -v
```

The public files for any separately authorised static hosting arrangement are the contents of `dist`. The README and source-control metadata are not needed to serve the application.

## Content policy

Use only the Vahini texts and user-supplied books. Bhagavatha, Ramakatha, Upanishad, Sutra, Sathya Sai, Sandeha Nivarini, Prema Vahini, Prasnothara Vahini, Prasanthi Vahini, Leela Kaivalya Vahini, Jnana Vahini, Gita Vahini, Dhyana Vahini, Dharma Vahini, and Vidya Vahini material must be grounded exclusively in their supplied PDFs; do not substitute familiar retellings or outside commentary. No outside commentary, general internet material or other collections from the downloads page should be added. The user separately authorized Sri Sathya Sai Media Centre as an image source. Present paraphrases and quiz explanations as study aids, never as verbatim words of Bhagawan Baba. Preserve source links and state the scope of coverage honestly.

## Image sources

- Geetha photograph, Baba beside a Sri Krishna idol: [Sri Sathya Sai Media Centre archive](https://archive.sssmediacentre.org/journals/vol_12/01AUG14/The-Mystical-Sport-of-Sai-Krishna.htm).
- Baba portrait: [Sri Sathya Sai Media Centre](https://www.sssmediacentre.org/), stored as `dist/assets/bhagawan-baba.png` (original supplied asset: `assets/swami-hr.png`).
- Rama painting: [Vahini.org Ramakatha](https://www.vahini.org/ramakatha/ramakatha.html), stored as `dist/assets/sri-rama.jpg` (original supplied asset: `ramakataplaatjes/rama1.jpg`).

Images are displayed without modification and served from this site's assets directory. Original credit marks are retained.

## Contributions and corrections

For a content correction, identify the Vahini, chapter or section, exact PDF page, and the passage supporting the change. Keep corrections limited to the supplied source; do not add material from other spiritual collections or outside commentary. For interface changes, preserve keyboard navigation, readable layouts, source access, and existing personal-note keys.

## Attribution and rights

This is an independent study companion, not an official translation or publication. Summaries, answers, and quiz explanations are study paraphrases and must not be presented as direct quotations from Bhagawan Baba.

The source PDFs and devotional images retain their respective copyright notices and ownership. Their inclusion does not grant reuse rights. This repository currently has no project-wide licence file; no open-source licence is implied for the code or third-party materials.
