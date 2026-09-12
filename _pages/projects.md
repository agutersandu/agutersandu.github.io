---
title: Data & Tools
permalink: /projects/
layout: archive
author_profile: true
---

Interactive companions to my research on energy transitions, public finance, and energy security.

<div class="tools-page">
  <article class="tool-card tool-card--featured">
    <div class="tool-card__copy">
      <div class="tool-kicker">Evidence explorer</div>
      <h2>Renewable Energy Security Explorer</h2>
      <p>Explore what changed after wind or solar was actually deployed. Drawing on 25 empirical studies, the tool lets you filter findings by technology, scale, and outcome; examine cases across countries; and trace the path from deployment to changes in imports, affordability, reliability, and control.</p>
      <p>The evidence shows that renewables can improve energy security, but the gains depend on grids, finance, maintenance, market design, industrial capacity, and supply chains. The explorer accompanies <em>From Renewable Deployment to Energy Security: The Institutional Foundations of the Renewable Security Dividend</em>.</p>
    </div>
    <div class="tool-actions">
      <a href="/projects/renewable-energy-security-explorer/" class="tool-button tool-button--primary">Explore the evidence</a>
      <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7348962" class="tool-link" target="_blank" rel="noopener noreferrer">Read the paper &amp; methods →</a>
    </div>
  </article>

  <article class="tool-card tool-card--compact">
    <div class="tool-card__copy">
      <div class="tool-kicker">Distributional tool</div>
      <h2>Low-Carbon Levy Burden Explorer</h2>
      <p>This interactive tool shows how placing low-carbon policy costs on UK electricity bills affects households at different income levels, and compares that choice with alternative financing arrangements used elsewhere. The figures are illustrative; the tool is designed to make the distributional consequences of transition finance visible.</p>
    </div>
    <div class="tool-actions">
      <a href="/projects/levy-burden-explorer/" class="tool-button">Open the tool</a>
      <a href="/publications/" class="tool-link">Related research →</a>
    </div>
  </article>
</div>

<style>
.tools-page {
  --tools-ink: #252a27;
  --tools-text: #555d58;
  --tools-line: #dce2dc;
  --tools-sage: #506658;
  --tools-sage-dark: #43564a;
  --tools-sage-soft: #eef3ef;
  margin-top: 1.5rem;
}

.tool-card {
  border: 1px solid var(--tools-line);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(37, 52, 43, 0.07);
}

.tool-card--featured {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background:
    radial-gradient(circle at 92% 12%, rgba(201, 111, 74, 0.10), transparent 25%),
    linear-gradient(135deg, #ffffff 0%, #f5f8f5 100%);
}

.tool-card--featured::after {
  content: "";
  position: absolute;
  right: -52px;
  bottom: -72px;
  width: 170px;
  height: 170px;
  border: 1px solid rgba(80, 102, 88, 0.16);
  border-radius: 50%;
  pointer-events: none;
}

.tool-card--compact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1.15rem;
  padding: 1.4rem 1.5rem;
  background: #fbfbf9;
}

.tool-card h2 {
  margin: 0.2rem 0 0.75rem;
  padding: 0;
  border: 0;
  color: var(--tools-ink);
  font-size: 1.35rem;
  line-height: 1.25;
}

.tool-card p {
  max-width: 48rem;
  margin: 0 0 0.75rem;
  color: var(--tools-text);
  font-size: 0.92rem;
  line-height: 1.65;
}

.tool-card p:last-child {
  margin-bottom: 0;
}

.tool-kicker {
  color: var(--tools-sage-dark);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.tool-actions {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.85rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.3rem;
}

.tool-card--compact .tool-actions {
  justify-content: flex-end;
  margin-top: 0;
}

.tool-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.62rem 1rem;
  border: 1px solid #cfd7d1;
  border-radius: 999px;
  background: #fff;
  color: var(--tools-sage-dark) !important;
  font-size: 0.86rem;
  font-weight: 700;
  line-height: 1;
  text-decoration: none !important;
  box-shadow: 0 4px 12px rgba(37, 52, 43, 0.06);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

.tool-button--primary {
  border-color: var(--tools-sage);
  background: var(--tools-sage);
  color: #fff !important;
}

.tool-button:hover {
  transform: translateY(-1px);
  background: var(--tools-sage-soft);
  box-shadow: 0 7px 16px rgba(37, 52, 43, 0.10);
}

.tool-button--primary:hover {
  background: var(--tools-sage-dark);
}

.tool-link {
  color: var(--tools-sage-dark) !important;
  font-size: 0.84rem;
  font-weight: 650;
  text-decoration: none !important;
}

.tool-link:hover {
  text-decoration: underline !important;
}

.tool-button:focus-visible,
.tool-link:focus-visible {
  outline: 3px solid rgba(80, 102, 88, 0.22);
  outline-offset: 3px;
}

@media (max-width: 760px) {
  .tool-card--featured {
    padding: 1.4rem;
  }

  .tool-card--compact {
    display: block;
  }

  .tool-card--compact .tool-actions {
    justify-content: flex-start;
    margin-top: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tool-button {
    transition: none;
  }
}
</style>
