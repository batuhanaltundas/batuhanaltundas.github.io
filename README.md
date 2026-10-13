# Batuhan Altundas — Academic Website

A responsive academic profile for a Computer Science Ph.D. student at Georgia Tech's CORE Robotics Lab. Plain HTML, CSS, and JavaScript, with no build step or third-party runtime dependencies.

## Publish with GitHub Pages

In this repository, open **Settings → Pages**. Select **Deploy from a branch**, choose **main** and **/ (root)**, and save. Once the website changes are on `main`, GitHub Pages serves the website at https://batuhanaltundas.github.io/.

The `.nojekyll` file keeps the website as a plain static site. No package installation or custom GitHub Actions workflow is required.

## Preview locally

From the repository folder, run `python -m http.server 8000` and open http://localhost:8000. Most content also works by opening `index.html` directly; citation buttons download `.bib` files when clipboard access is unavailable.

## Update content

- Biography, projects, education, and publications: edit `index.html`.
- Colors, spacing, and layout: edit `styles.css`.
- BibTeX citations: edit the `citations` object in `script.js`. Each button's `data-citation` must match its citation key.
- CV: replace `assets/Batuhan-Altundas-CV.pdf`, keeping the filename.
- Portrait: replace `assets/portrait.jpg` with a square or portrait photograph.
- Publication filters: set each publication's `data-category` to `first` or `collaboration`.

The diagram is an original conceptual illustration, not an experimental result. Publication overviews paraphrase official abstracts. Filters and citation buttons are progressively enhanced; the complete publication list remains available without JavaScript.

## Content sources

Biography, education, experience, projects, and internship interest are based on the CV provided by Batuhan Altundas. The downloadable PDF is unchanged from that file.

- [Georgia Tech lab profile](https://core-robotics.gatech.edu/people/batuhan-altundas/) — affiliation and advisor.
- [CORE Robotics Lab people](https://core-robotics.gatech.edu/people/) — existing headshot.
- [NeurIPS 2025 proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/82a227f51354b7ebafea51023d547d29-Abstract-Conference.html) — paper metadata and benchmark scope.
- [RSS 2026 proceedings](https://roboticsproceedings.org/rss22/p040.html) — paper metadata and DOI.
- [Human-Robot Teaming: Grand Challenges](https://doi.org/10.1007/s43154-023-00103-1) — journal paper.
- [IROS 2022 paper](https://core-robotics.gatech.edu/files/2022/08/IROS2022_HybridNET.pdf) — HybridNet paper.

There are no analytics, tracking scripts, contact-form services, or external font requests.
