import React from 'react';

// Converted from the Claude Design board "Projects.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class Projects extends React.Component {
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
  <a className="back serif" href="/explore">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    Explore
  </a>
  <ol className="trail">
    <li><a href="/">Home</a></li>
    <li><a href="/explore">Explore</a></li>
    <li aria-current="page">Projects</li>
  </ol>
</nav>

<header className="head">
  <h1 className="tab-title serif" style={{ background: "#5E6E3B", color: "#FBF6EA" }}>PROJECTS</h1>
</header>

<ul className="subfolders">
  <li>
    <a className="fol" href="/projects/general">
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-general.png" alt="" /></span>
      <span className="label serif" style={{ background: "#466E49", color: "#FBF6EA" }}>GENERAL PROJECTS</span>
    </a>
  </li>
  <li>
    <a className="fol" href="/projects/personal">
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-personal.png" alt="" /></span>
      <span className="label serif" style={{ background: "#466E49", color: "#FBF6EA" }}>PERSONAL PROJECTS</span>
    </a>
  </li>
</ul>

<nav className="pager" aria-label="Folders">
  <a className="pg serif" href="/explore">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    All folders
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
