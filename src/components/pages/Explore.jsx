import React from 'react';

// Converted from the Claude Design board "Explore.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class Explore extends React.Component {
  static defaultProps = {};

  renderVals() {
    return {};
  }

  render() {
    const v = this.renderVals ? this.renderVals() || {} : {};
    return (
<>
<main className="paper">

<nav className="ex-nav" aria-label="Back">
  <a className="back serif" href="/">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    Home
  </a>
</nav>

<header className="ex-head">
  <div className="bloom-stage">
    <span className="ripple" aria-hidden="true"></span>
    <span className="ripple p2" aria-hidden="true"></span>
    <span className="ripple p3" aria-hidden="true"></span>
    <div className="spin-ring" aria-hidden="true">
      <svg viewBox="0 0 480 480">
        <defs><path id="ring-path" d="M240 240m-212 0a212 212 0 1 1 424 0a212 212 0 1 1 -424 0"></path></defs>
        <text><textPath href="#ring-path" textLength="1328" lengthAdjust="spacing">PROJECTS • EXPERIENCE • SKILLS &amp; CERTIFICATES • PROJECTS • EXPERIENCE • SKILLS &amp; CERTIFICATES • </textPath></text>
      </svg>
    </div>
    <div className="blossom">
      <div className="blossom-inner">
        <svg viewBox="20 0 360 380" aria-hidden="true">
          <path d="M258.8 131.1A65.8 65.8 0 1 1 295.1 242.9A65.8 65.8 0 1 1 200.0 312.0A65.8 65.8 0 1 1 104.9 242.9A65.8 65.8 0 1 1 141.2 131.1A65.8 65.8 0 1 1 258.8 131.1Z" fill="#B3262B" transform="translate(0 6)"></path>
          <path className="stitch" d="M258.8 131.1A65.8 65.8 0 1 1 295.1 242.9A65.8 65.8 0 1 1 200.0 312.0A65.8 65.8 0 1 1 104.9 242.9A65.8 65.8 0 1 1 141.2 131.1A65.8 65.8 0 1 1 258.8 131.1Z" fill="none" stroke="#FBF3E6" strokeWidth="3" strokeDasharray="11 8" strokeLinecap="round" transform="translate(200 218) scale(.87) translate(-200 -212)"></path>
          <g className="leaves">
            <path d="M200 54 C188 46 172 44 160 48 C172 38 186 38 196 42 C190 30 180 22 170 20 C184 18 196 26 202 36 C206 24 216 14 230 12 C222 22 212 32 210 42 C222 36 236 36 246 42 C232 44 216 48 206 56 Z" fill="#5C7A34"></path>
            <path d="M202 40 C203 30 206 22 212 16" fill="none" stroke="#4E6A2B" strokeWidth="4" strokeLinecap="round"></path>
          </g>
        </svg>
      </div>
      <h1 className="serif" aria-label="Explore"><span className="ch" style={{ "--i": "0" }} aria-hidden="true">E</span><span className="ch" style={{ "--i": "1" }} aria-hidden="true">X</span><span className="ch" style={{ "--i": "2" }} aria-hidden="true">P</span><span className="ch" style={{ "--i": "3" }} aria-hidden="true">L</span><span className="ch" style={{ "--i": "4" }} aria-hidden="true">O</span><span className="ch" style={{ "--i": "5" }} aria-hidden="true">R</span><span className="ch" style={{ "--i": "6" }} aria-hidden="true">E</span></h1>
    </div>
    <svg className="spark" style={{ left: "8%", top: "12%", width: "22px", height: "22px", animationDelay: "1.2s" }} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
    <svg className="spark red" style={{ right: "9%", top: "18%", width: "14px", height: "14px", animationDelay: "2s" }} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
    <svg className="spark" style={{ right: "6%", bottom: "14%", width: "18px", height: "18px", animationDelay: "2.7s" }} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
    <svg className="spark red" style={{ left: "10%", bottom: "18%", width: "12px", height: "12px", animationDelay: "3.3s" }} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
  </div>
</header>

<ul className="folders">
  <li>
    <a className="fol" href="/projects" style={{ "--tint": "#A9C07E" }}>
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-projects.png" alt="" /></span>
      <span className="label serif" style={{ background: "#5E6E3B", color: "#FBF6EA" }}>PROJECTS</span>
    </a>
  </li>
  <li>
    <a className="fol" href="/experience" style={{ "--tint": "#F2D06B" }}>
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-experience.png" alt="" /></span>
      <span className="label serif" style={{ background: "#F7E58E", color: "#4A2416" }}>EXPERIENCE</span>
    </a>
  </li>
  <li>
    <a className="fol" href="/skills" style={{ "--tint": "#F4B6C2" }}>
      <span className="fol-art"><span className="sheet s1" aria-hidden="true"></span><span className="sheet s2" aria-hidden="true"></span><span className="sheet s3" aria-hidden="true"></span><span className="sheet s4" aria-hidden="true"></span><img src="/images/folder-skills.png" alt="" /></span>
      <span className="label serif" style={{ background: "#F4BCC6", color: "#4A2416" }}>SKILLS &amp; CERTIFICATES</span>
    </a>
  </li>
</ul>

</main>
</>
    );
  }
}
