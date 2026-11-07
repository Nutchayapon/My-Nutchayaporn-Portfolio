import React from 'react';

// Converted from the Claude Design board "Experience.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class Experience extends React.Component {
  static defaultProps = {};

  renderVals() {
    const a = (this.state || {}).active ?? 0;
    const pick = (i) => () => { if (a !== i) this.setState({ active: i }); };
    return { c0: a === 0 ? 'on' : '', c1: a === 1 ? 'on' : '', h0: pick(0), h1: pick(1) };
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
    <li aria-current="page">Experience</li>
  </ol>
</nav>

<header className="head">
  <img className="head-art" src="/images/folder-experience.png" alt="" />
  <div className="head-text">
    <h1 className="tab-title serif" style={{ background: "#F7E58E", color: "#4A2416" }}>EXPERIENCE</h1>
  </div>
</header>

<div className="tl-wrap">
<span className="track" aria-hidden="true"></span>
<ol className="timeline">

  <li className={v.c0} onMouseEnter={v.h0} onClick={v.h0}>
    <span className="seg" aria-hidden="true"></span>
    <span className="node" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span>
    <article className="card">
      <div className="card-in">
        <div className="pills">
          <span className="pill" style={{ background: "#F7E58E", color: "#4A2416" }}>Jul 2026 – Aug 2026</span>
          <span className="pill" style={{ background: "#FBF6EA", color: "#4A2416", boxShadow: "inset 0 0 0 1.5px #E0C35C" }}>Internship</span>
        </div>
        <h2 className="serif">AI Engineer &amp; System Analyst Intern</h2>
        <p className="org">YimSiam Dot Com</p>
        <ul>
          <li>Built the Moral Data Center (MDC) POC with data pipelines, AI agents, validation, analytics and dashboards.</li>
          <li>Analyzed requirements and developed Kwunjai AI LINE chatbot workflows using the LINE Messaging API.</li>
        </ul>
        <ul className="tags" aria-label="Focus">
          <li>Data Pipelines</li><li>AI Agents</li><li>Dashboards</li><li>LINE Messaging API</li><li>Requirements Analysis</li>
        </ul>
      </div>
    </article>
  </li>

  <li className={v.c1} onMouseEnter={v.h1} onClick={v.h1}>
    <span className="seg" aria-hidden="true"></span>
    <span className="node" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span>
    <article className="card">
      <div className="card-in">
        <div className="pills">
          <span className="pill" style={{ background: "#F7E58E", color: "#4A2416" }}>Apr 2025 – Nov 2025</span>
          <span className="pill" style={{ background: "#FBF6EA", color: "#4A2416", boxShadow: "inset 0 0 0 1.5px #E0C35C" }}>Internship</span>
        </div>
        <h2 className="serif">Data Analyst &amp; Data Scientist Intern</h2>
        <p className="org">The Red Carbon</p>
        <ul>
          <li>Contributed to Multi-Modal RAG, LLM-based sentiment analysis, interactive dashboards and customer segmentation.</li>
          <li>Prepared datasets, designed chunking and metadata, extracted insights and labeled customers to support data-driven business analysis.</li>
        </ul>
        <ul className="tags" aria-label="Focus">
          <li>Multi-Modal RAG</li><li>LLM Sentiment Analysis</li><li>Dashboards</li><li>Customer Segmentation</li>
        </ul>
      </div>
    </article>
  </li>
</ol>
</div>

<nav className="pager" aria-label="Folders">
  <a className="pg serif" href="/projects">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    Projects
  </a>
  <a className="pg serif" href="/skills">
    Skills &amp; Certificates
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </a>
</nav>

</main>
</>
    );
  }
}
