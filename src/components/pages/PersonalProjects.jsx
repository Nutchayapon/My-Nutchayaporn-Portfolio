import React from 'react';

// Converted from the Claude Design board "ProjectsPersonal.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class PersonalProjects extends React.Component {
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
  <a className="back serif" href="/projects">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    All projects
  </a>
  <ol className="trail">
    <li><a href="/">Home</a></li>
    <li><a href="/explore">Explore</a></li>
    <li><a href="/projects">Projects</a></li>
    <li aria-current="page">Personal Projects</li>
  </ol>
</nav>

<header className="head">
  <img className="head-art" src="/images/folder-personal.png" alt="" />
  <div className="head-text">
    <h1 className="tab-title serif" style={{ background: "#466E49", color: "#FBF6EA" }}>PERSONAL PROJECTS</h1>
  </div>
</header>

<ol className="docs">
  <li>
    <article className="doc" style={{ "--r": "0.4deg" }}>
      <span className="doc-tab serif" style={{ background: "#466E49", color: "#FBF6EA" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        GitHub
      </span>
      <svg className="clip" viewBox="0 0 36 84" fill="none" stroke="#A3221F" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M8 30V70a10 10 0 0 0 20 0V12a8 8 0 0 0-16 0v50a6 6 0 0 0 12 0V26"></path></svg>
      <div className="doc-meta">
        <span className="num serif" aria-hidden="true">01</span>
        <div className="status">
          <span className="status-pill"><span className="dot" aria-hidden="true"></span>In progress</span>
          <p>Project scaffold and documentation are set up; SQL analysis and the Power BI report are next.</p>
        </div>
      </div>
      <div>
        <p className="event">PostgreSQL &amp; Power BI portfolio project · Olist Brazilian E-Commerce dataset</p>
        <h2 className="serif">Customer Segmentation &amp; Repeat Purchase Analytics</h2>
        <ul>
          <li>Explores customer purchasing behavior in the Olist Brazilian E-Commerce public dataset.</li>
          <li>Planned analyses: RFM segmentation, cohort analysis, repeat-purchase rates within 30, 60 and 90 days, and time between purchases.</li>
          <li>Documented the project plan, data dictionary, methodology and validation checklist before running the analysis.</li>
        </ul>
        <ul className="tags" aria-label="Tools and methods">
          <li>PostgreSQL</li><li>SQL</li><li>pgAdmin</li><li>Power BI</li><li>DAX</li><li>RFM</li><li>Cohort Analysis</li><li>Git / GitHub</li>
        </ul>
        <a className="gh serif" href="https://github.com/Nutchayapon/Customer-Segmentation-Repeat-Purchase-Analytics">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          View on GitHub
        </a>
      </div>
    </article>
  </li>
</ol>

<nav className="pager" aria-label="Projects">
  <a className="pg serif" href="/projects/general">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    General Projects
  </a>
  <a className="pg serif" href="/experience">
    Experience
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </a>
</nav>

</main>
</>
    );
  }
}
