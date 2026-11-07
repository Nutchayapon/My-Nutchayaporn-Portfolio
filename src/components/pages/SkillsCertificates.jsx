import React from 'react';

// Converted from the Claude Design board "Skills.dc.html".
// Markup = render(); behaviour = the methods below (same logic as in Claude Design).
export default class SkillsCertificates extends React.Component {
  static defaultProps = {"openTab": 1, "start": "closed"};

  componentWillUnmount() { clearTimeout(this._openT); }
  renderVals() {
    const st = this.state || {};
    const v = {};
    // ---- technical-skill dividers ----
    const def = Number(this.props.openTab ?? 1);
    const open = st.open ?? def;
    for (let i = 1; i <= 7; i++) {
      v['c' + i] = open === i ? 'open' : '';
      v['e' + i] = open === i ? 'true' : 'false';
      // click / tap / keyboard opens that divider; it stays open after the pointer leaves
      v['t' + i] = () => { if ((this.state || {}).open !== i) this.setState({ open: i }); };
      v['h' + i] = () => { if ((this.state || {}).open !== i) this.setState({ open: i }); };
    }
    // ---- certificate folder: closed -> opening (cover swings open, ~1s) -> internship / awards ----
    const view = st.view ?? (this.props.start ?? 'closed');
    const isOpen = view === 'internship' || view === 'awards';
    v.stageCls = isOpen ? 'is-open ' + (view === 'awards' ? 'show-awards' : 'show-intern') : (view === 'opening' ? 'is-closed is-opening' : 'is-closed');
    v.expanded = isOpen ? 'true' : 'false';
    v.internSel = view === 'internship' ? 'true' : 'false';
    v.awardsSel = view === 'awards' ? 'true' : 'false';
    v.internHidden = view === 'internship' ? 'false' : 'true';
    v.awardsHidden = view === 'awards' ? 'false' : 'true';
    v.openFolder = () => {
      if (((this.state || {}).view ?? 'closed') === 'opening') return;
      this.setState({ view: 'opening' });
      clearTimeout(this._openT);
      this._openT = setTimeout(() => this.setState({ view: 'internship' }), 1050);
    };
    v.closeFolder = () => { clearTimeout(this._openT); this.setState({ view: 'closed' }); };
    v.showIntern = () => this.setState({ view: 'internship' });
    v.showAwards = () => this.setState({ view: 'awards' });
    const n = 4;
    const a = st.a ?? 0;
    v.prev = () => this.setState({ a: (a + n - 1) % n });
    v.next = () => this.setState({ a: (a + 1) % n });
    for (let i = 0; i < n; i++) {
      v['s' + i] = a === i ? 'on' : '';
      v['ah' + i] = a === i ? 'false' : 'true';
      v['cur' + i] = a === i ? 'true' : 'false';
      v['go' + i] = () => this.setState({ a: i });
    }
    return v;
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
    <li aria-current="page">Skills &amp; Certificates</li>
  </ol>
</nav>

<header className="head">
  <img className="head-art" src="/images/folder-skills.png" alt="" />
  <h1 className="denim serif">TECHNICAL SKILLS</h1>
</header>

<div className="marquee serif" aria-hidden="true">
  <div className="marquee-track">
    <div className="marquee-group">
      <span>Python</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>SQL</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>R</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>PyTorch</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>TensorFlow</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Scikit-learn</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Power BI</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Looker Studio</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>RAG</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Docker</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
    </div>
    <div className="marquee-group">
      <span>Python</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>SQL</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>R</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>PyTorch</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>TensorFlow</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Scikit-learn</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Power BI</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Looker Studio</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>RAG</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
      <span>Docker</span><svg viewBox="0 0 24 24"><path d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"></path></svg>
    </div>
  </div>
</div>

<ol className="index" aria-label="Technical skills by area">
  <li className={`dv at-end dark ${v.c1 ?? ""}`} style={{ "--bg": "#3B2A22", "--fg": "#FBF6EA" }} onMouseEnter={v.h1}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e1} aria-controls="dv-body-1" onClick={v.t1} onFocus={v.t1}><span className="dv-n">01</span>Programming &amp; Query Languages</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-1"><ul className="chips" aria-label="Programming and Query Languages"><li style={{ "--k": "0" }}>Python</li><li style={{ "--k": "1" }}>SQL</li><li style={{ "--k": "2" }}>R</li></ul></div></div>
  </li>
  <li className={`dv at-mid ${v.c2 ?? ""}`} style={{ "--bg": "#E8D6E8", "--fg": "#4A2416" }} onMouseEnter={v.h2}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e2} aria-controls="dv-body-2" onClick={v.t2} onFocus={v.t2}><span className="dv-n">02</span>Data Analysis &amp; Statistics</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-2"><ul className="chips" aria-label="Data Analysis and Statistics"><li style={{ "--k": "0" }}>Statistical Modeling</li><li style={{ "--k": "1" }}>Hypothesis Testing</li><li style={{ "--k": "2" }}>Exploratory Data Analysis (EDA)</li><li style={{ "--k": "3" }}>SPSS</li><li style={{ "--k": "4" }}>Jamovi</li></ul></div></div>
  </li>
  <li className={`dv at-start ${v.c3 ?? ""}`} style={{ "--bg": "#FBF1C2", "--fg": "#4A2416" }} onMouseEnter={v.h3}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e3} aria-controls="dv-body-3" onClick={v.t3} onFocus={v.t3}><span className="dv-n">03</span>Data Visualization &amp; Business Intelligence</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-3"><ul className="chips" aria-label="Data Visualization and Business Intelligence"><li style={{ "--k": "0" }}>Power BI</li><li style={{ "--k": "1" }}>Looker Studio</li></ul></div></div>
  </li>
  <li className={`dv at-end ${v.c4 ?? ""}`} style={{ "--bg": "#C9E6F7", "--fg": "#4A2416" }} onMouseEnter={v.h4}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e4} aria-controls="dv-body-4" onClick={v.t4} onFocus={v.t4}><span className="dv-n">04</span>Machine Learning &amp; AI</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-4"><ul className="chips" aria-label="Machine Learning and AI"><li style={{ "--k": "0" }}>Machine Learning</li><li style={{ "--k": "1" }}>Deep Learning</li><li style={{ "--k": "2" }}>Natural Language Processing (NLP)</li><li style={{ "--k": "3" }}>Retrieval-Augmented Generation (RAG)</li></ul></div></div>
  </li>
  <li className={`dv at-mid ${v.c5 ?? ""}`} style={{ "--bg": "#F4C9D2", "--fg": "#4A2416" }} onMouseEnter={v.h5}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e5} aria-controls="dv-body-5" onClick={v.t5} onFocus={v.t5}><span className="dv-n">05</span>ML Frameworks &amp; Libraries</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-5"><ul className="chips" aria-label="ML Frameworks and Libraries"><li style={{ "--k": "0" }}>Scikit-learn</li><li style={{ "--k": "1" }}>PyTorch</li><li style={{ "--k": "2" }}>TensorFlow</li><li style={{ "--k": "3" }}>Keras</li></ul></div></div>
  </li>
  <li className={`dv at-start ${v.c6 ?? ""}`} style={{ "--bg": "#CFE0B4", "--fg": "#4A2416" }} onMouseEnter={v.h6}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e6} aria-controls="dv-body-6" onClick={v.t6} onFocus={v.t6}><span className="dv-n">06</span>Development Tools &amp; Platforms</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-6"><ul className="chips" aria-label="Development Tools and Platforms"><li style={{ "--k": "0" }}>Git</li><li style={{ "--k": "1" }}>GitHub</li><li style={{ "--k": "2" }}>GitLab</li><li style={{ "--k": "3" }}>Docker</li><li style={{ "--k": "4" }}>VS Code</li><li style={{ "--k": "5" }}>Jupyter Notebook</li><li style={{ "--k": "6" }}>Google Colab</li></ul></div></div>
  </li>
  <li className={`dv at-end ${v.c7 ?? ""}`} style={{ "--bg": "#FFFDF8", "--fg": "#4A2416" }} onMouseEnter={v.h7}>
    <h3 className="dv-h"><button className="dv-tab serif" type="button" aria-expanded={v.e7} aria-controls="dv-body-7" onClick={v.t7} onFocus={v.t7}><span className="dv-n">07</span>Other Technical Experience</button></h3>
    <div className="dv-band"><div className="dv-body" id="dv-body-7"><ul className="chips" aria-label="Other Technical Experience"><li style={{ "--k": "0" }}>LINE Messaging API</li><li style={{ "--k": "1" }}>Arduino UNO Q</li><li style={{ "--k": "2" }}>Arduino Modulino</li></ul></div></div>
  </li>
</ol>

<div className="cert-sec">
<section className={`stage ${v.stageCls ?? ""}`} aria-labelledby="cert-title">
  <div className="fwrap">
    <div className="ffloat">
      <img className="fpaper" src="/images/lined-paper.png" alt="" />
      <img className="fimg" src="/images/folder-certificate.png" alt="" />
      <img className="finner" src="/images/lined-paper.png" alt="" />
      <div className="fcover">
        <div className="fc-front">
          <img className="cov" src="/images/folder-certificate-cover.png" alt="" />
          <img className="patches" src="/images/patches.png" alt="" />
          <h2 id="cert-title" className="ftitle serif">CERTIFICATE</h2>
        </div>
        <div className="fc-back"></div>
      </div>
      <button className="fopen" type="button" aria-expanded={v.expanded} aria-controls="cert-panel" aria-label="Open the certificate folder" onClick={v.openFolder}></button>
      <button className="fhint serif" type="button" aria-expanded={v.expanded} aria-controls="cert-panel" onClick={v.openFolder}>Open the folder <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
      <button className="ftab t-intern serif" type="button" aria-pressed={v.internSel} aria-controls="cert-panel" onClick={v.showIntern}><span>INTERNSHIP</span></button>
      <button className="ftab t-awards serif" type="button" aria-pressed={v.awardsSel} aria-controls="cert-panel" onClick={v.showAwards}><span>AWARDS</span></button>
    </div>
  </div>

  <div className="panel" id="cert-panel">
    <button className="close" type="button" onClick={v.closeFolder}>Close folder <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>

    <div className="pane p-intern" aria-hidden={v.internHidden}>
      <h2 className="pill serif">INTERNSHIP</h2>
      <div className="frame">
        <figure>
          <span className="shot"><img className="clip" src="/images/clip-charm.png" alt="" /><img className="cert" src="/images/cert-red-carbon.jpg" alt="Certificate of Accomplishment from The Red Carbon: Nutchayaporn Kuntarosd completed the internship program as a Data Analyst Intern, April 8 to October 17, 2025" /></span>
          <figcaption><strong className="serif">Data Analyst Intern</strong><span>The Red Carbon · Apr – Oct 2025</span></figcaption>
        </figure>
      </div>
    </div>

    <div className="pane p-awards" aria-hidden={v.awardsHidden}>
      <h2 className="pill serif">AWARDS</h2>
      <div className="frame">
        <div className="slides" aria-live="polite">
        <figure className={`slide ${v.s0 ?? ""}`} aria-hidden={v.ah0}>
          <span className="shot"><img className="clip" src="/images/clip-charm.png" alt="" /><img className="cert" src="/images/cert-phayao.jpg" alt="Certificate from the 14th National Phayao Research Conference, University of Phayao, for the poster presentation on forecasting frozen durian export volumes" /></span>
          <figcaption><strong className="serif">Excellent Poster Presentation</strong><span>14th National Phayao Research Conference · University of Phayao · Jan 2025</span><span className="cnt">1 / 4</span></figcaption>
        </figure>
        <figure className={`slide ${v.s1 ?? ""}`} aria-hidden={v.ah1}>
          <span className="shot"><img className="clip" src="/images/clip-charm.png" alt="" /><img className="cert" src="/images/cert-uamc.jpg" alt="Certificate from the 13th Undergraduate Conference in Applied Mathematics (UAMC 2025), King Mongkut’s Institute of Technology Ladkrabang, for the oral presentation on electricity consumption forecasting in Lamphun" /></span>
          <figcaption><strong className="serif">Silver Award — Oral Presentation</strong><span>13th Undergraduate Conference in Applied Mathematics (UAMC 2025) · KMITL · Mar 2025</span><span className="cnt">2 / 4</span></figcaption>
        </figure>
        <figure className={`slide ${v.s2 ?? ""}`} aria-hidden={v.ah2}>
          <span className="shot"><img className="clip" src="/images/clip-charm.png" alt="" /><img className="cert" src="/images/cert-cmu.jpg" alt="Award certificate from the Faculty of Science, Chiang Mai University, for an oral research presentation in Statistics, academic year 2025" /></span>
          <figcaption><strong className="serif">Oral Presentation Award — Statistics</strong><span>Undergraduate Research Presentation · Faculty of Science, Chiang Mai University · 2025</span><span className="cnt">3 / 4</span></figcaption>
        </figure>
        <figure className={`slide ${v.s3 ?? ""}`} aria-hidden={v.ah3}>
          <span className="shot"><img className="clip" src="/images/clip-charm.png" alt="" /><img className="cert" src="/images/cert-super-ai-engineer.jpg" alt="Super AI Engineer Season 6 certificate from the Artificial Intelligence Association of Thailand, certifying Nutchayaporn Kuntarosd as a Super AI Engineer (Developer)" /></span>
          <figcaption><strong className="serif">Super AI Engineer (Developer)</strong><span>Super AI Engineer Season 6 · Artificial Intelligence Association of Thailand · Sep 2026</span><span className="cnt">4 / 4</span></figcaption>
        </figure>
        </div>
        <button className="nav-btn prev" type="button" aria-label="Previous award" onClick={v.prev}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
        <button className="nav-btn next" type="button" aria-label="Next award" onClick={v.next}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
      </div>
      <div className="dots">
          <button className={`dot ${v.s0 ?? ""}`} type="button" aria-label="Show award 1 of 4" aria-current={v.cur0} onClick={v.go0}></button>
          <button className={`dot ${v.s1 ?? ""}`} type="button" aria-label="Show award 2 of 4" aria-current={v.cur1} onClick={v.go1}></button>
          <button className={`dot ${v.s2 ?? ""}`} type="button" aria-label="Show award 3 of 4" aria-current={v.cur2} onClick={v.go2}></button>
          <button className={`dot ${v.s3 ?? ""}`} type="button" aria-label="Show award 4 of 4" aria-current={v.cur3} onClick={v.go3}></button>
      </div>
    </div>
  </div>
</section>
</div>

<nav className="pager" aria-label="Folders">
  <a className="pg serif" href="/experience">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    Experience
  </a>
  <a className="pg serif" href="/explore">
    Back to Explore
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3221F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </a>
</nav>

<footer className="site-foot">
  <h2 className="contact-tab serif"><span className="shiny-light">CONTACT</span></h2>
  <div className="contact-band">
    <ul className="contact-list">
      <li><a href="mailto:nutchayaporn19@gmail.com"><span className="c-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>nutchayaporn19@gmail.com</a></li>
      <li style={{ animationDelay: ".12s" }}><a href="tel:+66800056538"><span className="c-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>+66 80-005-6538</a></li>
    </ul>
    <div className="flower-wrap" style={{ animationDelay: ".2s" }} aria-hidden="true">
      <span className="orbit o1"></span>
      <span className="orbit o2"></span>
      <img className="flower" src="/images/contact-flower.png" alt="" />
    </div>
  </div>
</footer>


</main>
</>
    );
  }
}
