import React from 'react';

// Converted from the Claude Design board "ProjectsCoop.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class CooperativeProjects extends React.Component {
  static defaultProps = {};

  renderVals() {
    return {};
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
<>
<main className="paper">

<nav className="crumbs" aria-label="Breadcrumb">
  <a className="back serif" href="/projects/general">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    General Projects
  </a>
  <ol className="trail">
    <li><a href="/">Home</a></li>
    <li><a href="/explore">Explore</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/projects/general">General Projects</a></li>
    <li aria-current="page">Cooperative Education</li>
  </ol>
</nav>

<header className="head">
  <img className="head-art" src="/images/folder-coop.png" alt="" />
  <div className="head-text">
    <h1 className="tab-title serif" style={{ background: "#466E49", color: "#FBF6EA" }}>COOPERATIVE EDUCATION PROJECTS</h1>
  </div>
</header>

<ol className="docs">
  <li>
    <article className="doc" style={{ "--r": "-0.6deg" }}>
      <span className="doc-tab serif" style={{ background: "#466E49", color: "#FBF6EA" }}>Nov 2025</span>
      <svg className="clip" viewBox="0 0 36 84" fill="none" stroke="#A3221F" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M8 30V70a10 10 0 0 0 20 0V12a8 8 0 0 0-16 0v50a6 6 0 0 0 12 0V26"></path></svg>
      <div className="doc-meta">
        <span className="num serif" aria-hidden="true">01</span>
        <div className="award">
          <svg className="rosette" viewBox="0 0 64 84" aria-hidden="true"><path d="M20 44 L13 80 L23 73 L29 83 L34 48Z" fill="#7E1715"></path><path d="M44 44 L51 80 L41 73 L35 83 L30 48Z" fill="#A3221F"></path><path d="M32.0 6.0A5.3 5.3 0 0 1 42.4 8.4A5.3 5.3 0 0 1 50.8 15.0A5.3 5.3 0 0 1 55.4 24.7A5.3 5.3 0 0 1 55.4 35.3A5.3 5.3 0 0 1 50.8 45.0A5.3 5.3 0 0 1 42.4 51.6A5.3 5.3 0 0 1 32.0 54.0A5.3 5.3 0 0 1 21.6 51.6A5.3 5.3 0 0 1 13.2 45.0A5.3 5.3 0 0 1 8.6 35.3A5.3 5.3 0 0 1 8.6 24.7A5.3 5.3 0 0 1 13.2 15.0A5.3 5.3 0 0 1 21.6 8.4A5.3 5.3 0 0 1 32.0 6.0Z" fill="#A3221F"></path><circle cx="32" cy="30" r="16" fill="#FBF3E6"></circle><path d="M32 22C32.4 26.4 35.6 29.6 40 30C35.6 30.4 32.4 33.6 32 38C31.6 33.6 28.4 30.4 24 30C28.4 29.6 31.6 26.4 32 22Z" fill="#D9A441"></path></svg>
          <p><strong>1st Place Winner</strong>Undergraduate Research and Cooperative Education Symposium</p>
        </div>
        <figure className="shot"><img src="/images/photo-coop.jpg" alt="Nutchayaporn presenting her collaborative filtering research at the symposium" loading="lazy" /></figure>
      </div>
      <div>
        <h2 className="serif">Collaborative Filtering Algorithms for Recommendation Systems Using Implicit Feedback</h2>
        <ul>
          <li>Developed and compared recommendation algorithms — ALS, NMF and Multi-VAE — using implicit feedback from supermarket transactions.</li>
          <li>Implemented matrix factorization and generative algorithms to decompose high-sparsity purchase history into latent features for product prediction.</li>
        </ul>
        <ul className="tags" aria-label="Methods">
          <li>ALS</li><li>NMF</li><li>Multi-VAE</li><li>Matrix Factorization</li><li>Implicit Feedback</li>
        </ul>
      </div>
    </article>
  </li>
</ol>

<nav className="pager" aria-label="Project folders">
  <a className="pg serif" href="/projects/general">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    General Projects
  </a>
  <a className="pg serif" href="/projects/general/super-ai">
    Super AI Projects
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </a>
</nav>

</main>
</>
    );
  }
}
