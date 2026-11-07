import React from 'react';

// Converted from the Claude Design board "ProjectsAcademic.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class GeneralProjects extends React.Component {
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
    <li aria-current="page">General Projects</li>
  </ol>
</nav>

<header className="head">
  <div className="head-text">
    <h1 className="tab-title serif" style={{ background: "#466E49", color: "#FBF6EA" }}>GENERAL PROJECTS</h1>
  </div>
</header>

<ul className="subfolders">
  <li>
    <a className="fol" href="/projects/general/cooperative">
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-coop.png" alt="" /></span>
      <span className="label serif" style={{ background: "#466E49", color: "#FBF6EA" }}>COOPERATIVE EDUCATION PROJECTS</span>
      <span className="count">1 project</span>
    </a>
  </li>
  <li>
    <a className="fol" href="/projects/general/super-ai">
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-super-ai.png" alt="" /></span>
      <span className="label serif" style={{ background: "#466E49", color: "#FBF6EA" }}>SUPER AI PROJECTS</span>
      <span className="count">2 projects</span>
    </a>
  </li>
  <li>
    <a className="fol" href="/projects/general/conference">
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-conference.png" alt="" /></span>
      <span className="label serif" style={{ background: "#466E49", color: "#FBF6EA" }}>CONFERENCE PROJECTS</span>
      <span className="count">2 projects</span>
    </a>
  </li>
</ul>

<nav className="pager" aria-label="Projects">
  <a className="pg serif" href="/projects">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    All projects
  </a>
  <a className="pg serif" href="/projects/personal">
    Personal Projects
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </a>
</nav>

</main>
</>
    );
  }
}
