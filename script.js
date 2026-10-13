'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); };
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.querySelector('.publication-tools').hidden = false;
const publications = [...document.querySelectorAll('.publication')];
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filter => { const selected = filter === button; filter.classList.toggle('active', selected); filter.setAttribute('aria-pressed', String(selected)); });
  let visible = 0;
  publications.forEach(paper => { paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter; if (!paper.hidden) visible++; });
  document.querySelector('#publication-count').textContent = `${visible} publication${visible === 1 ? '' : 's'}`;
}));
const citations = {
  hint: `@inproceedings{cho2026interactive,
  author = {Minwoo Cho and Batuhan Altundas and Matthew Craig Gombolay},
  title = {Interactive Knowledge Distillation with Adaptive Teachers in Cooperative Multi-Agent Reinforcement Learning},
  booktitle = {Proceedings of Robotics: Science and Systems},
  year = {2026},
  doi = {10.15607/RSS.2026.XXII.040}
}`,
  targetnet: `@inproceedings{altundas2025heterogeneous,
  author = {Batuhan Altundas and Shengkang Chen and Shivika Singh and Shivangi Deo and Minwoo Cho and Matthew Gombolay},
  title = {Heterogeneous Graph Transformers for Simultaneous Mobile Multi-Robot Task Allocation and Scheduling under Temporal Constraints},
  booktitle = {Advances in Neural Information Processing Systems},
  volume = {38},
  year = {2025},
  url = {https://proceedings.neurips.cc/paper_files/paper/2025/hash/82a227f51354b7ebafea51023d547d29-Abstract-Conference.html}
}`,
  teaming: `@article{natarajan2023teaming,
  author = {Manisha Natarajan and Esmaeil Seraj and Batuhan Altundas and Rohan Paleja and Sean Ye and Letian Chen and Reed Jensen and Kimberlee Chestnut Chang and Matthew Gombolay},
  title = {Human-Robot Teaming: Grand Challenges},
  journal = {Current Robotics Reports},
  year = {2023},
  doi = {10.1007/s43154-023-00103-1}
}`,
  hybridnet: `@inproceedings{altundas2022coordination,
  author = {Batuhan Altundas and Zheyuan Wang and Joshua Bishop and Matthew Gombolay},
  title = {Learning Coordination Policies over Heterogeneous Graphs for Human-Robot Teams via Recurrent Neural Schedule Propagation},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  year = {2022},
  pages = {11679--11686},
  doi = {10.1109/IROS47612.2022.9981748}
}`
};
document.querySelectorAll('.citation-button').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const citation = citations[button.dataset.citation];
    if (!citation) return;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(citation);
      button.textContent = 'Copied!';
      document.querySelector('#citation-status').textContent = 'BibTeX citation copied to clipboard.';
    } catch {
      const url = URL.createObjectURL(new Blob([citation], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a'); link.href = url; link.download = `${button.dataset.citation}.bib`; document.body.append(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      button.textContent = 'Downloaded';
      document.querySelector('#citation-status').textContent = 'BibTeX citation downloaded as a file.';
    }
    window.setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2500);
  });
});
document.querySelector('#copyright-year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  sectionLinks.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
}
