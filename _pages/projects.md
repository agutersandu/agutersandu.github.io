---
title: Data & Tools
permalink: /projects/
layout: archive
author_profile: true
---

Interactive companions to my research on energy transitions, public finance, and energy security.

<div class="tools-grid">
  <article class="tool-card">
    <div class="tool-card__content">
      <h2>Do Wind and Solar Improve Energy Security?</h2>
      <p>This interactive evidence tool brings together 25 empirical studies of wind and solar deployment published between 2015 and 2025. It lets you compare findings by technology, scale, and outcome; examine cases across countries; and trace how deployment changed fuel imports, electricity prices, energy access, system reliability, and industrial control.</p>
      <p>It also shows why the results varied. The evidence points to the importance of grids, finance, maintenance, market design, public institutions, manufacturing capacity, and supply chains in turning renewable deployment into durable energy-security gains.</p>
      <p class="paper-basis"><strong>Based on:</strong> <em>From Renewable Deployment to Energy Security: The Institutional Foundations of the Renewable Security Dividend</em>.</p>
    </div>
    <div class="tool-actions">
      <a href="/projects/renewable-energy-security-explorer/" class="tool-button">Explore the data</a>
    </div>
  </article>

  <article class="tool-card">
    <div class="tool-card__content">
      <h2>Who Pays for the Energy Transition?</h2>
      <p>This interactive tool examines the United Kingdom’s choice to recover low-carbon policy costs through electricity bills. It shows how that burden varies across household income groups, compares the current system with an illustrative income-based alternative, and sets the UK approach alongside other ways of financing transition costs.</p>
      <p class="tool-caveat"><strong>Purpose and limits:</strong> This is not an argument against the energy transition or in favour of fossil fuels. The transition is essential, and energy infrastructure always has to be paid for. The question is where those costs are placed and who bears them. Because the underlying household data are incomplete and sometimes inconsistent, the figures are illustrative rather than precise.</p>
      <p class="paper-basis"><strong>Based on:</strong> <em>Off the Books, onto the Bills: Levy-Backed Derisking and the UK’s Green Transition</em>.</p>
    </div>
    <div class="tool-actions">
      <a href="/projects/levy-burden-explorer/" class="tool-button">Explore the data</a>
    </div>
  </article>
</div>

<style>
.tools-grid {
  --tools-ink: #252a27;
  --tools-text: #555d58;
  --tools-line: #dce2dc;
  --tools-sage: #506658;
  --tools-sage-dark: #43564a;
  --tools-peach: #c96f4a;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.15rem;
  align-items: stretch;
  margin-top: 1.5rem;
}

.tool-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.65rem;
  border: 1px solid var(--tools-line);
  border-radius: 16px;
  background:
    radial-gradient(circle at 92% 8%, rgba(201, 111, 74, 0.09), transparent 24%),
    linear-gradient(135deg, #ffffff 0%, #f6f8f6 100%);
  box-shadow: 0 10px 28px rgba(37, 52, 43, 0.07);
}

.tool-card::after {
  content: "";
  position: absolute;
  right: -58px;
  bottom: -78px;
  width: 165px;
  height: 165px;
  border: 1px solid rgba(80, 102, 88, 0.14);
  border-radius: 50%;
  pointer-events: none;
}

.tool-card__content {
  position: relative;
  z-index: 1;
  flex: 1;
}

.tool-card h2 {
  margin: 0 0 0.85rem;
  padding: 0;
  border: 0;
  color: var(--tools-ink);
  font-size: 1.3rem;
  line-height: 1.25;
}

.tool-card p {
  margin: 0 0 0.8rem;
  color: var(--tools-text);
  font-size: 0.9rem;
  line-height: 1.62;
}

.tool-card p:last-child {
  margin-bottom: 0;
}

.paper-basis {
  padding-top: 0.75rem;
  border-top: 1px solid rgba(80, 102, 88, 0.15);
}

.tool-caveat {
  padding: 0.8rem 0.9rem;
  border-left: 3px solid var(--tools-peach);
  border-radius: 0 10px 10px 0;
  background: rgba(247, 234, 227, 0.68);
}

.tool-actions {
  position: relative;
  z-index: 1;
  margin-top: 1.2rem;
}

.tool-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.62rem 1rem;
  border: 1px solid var(--tools-sage);
  border-radius: 999px;
  background: var(--tools-sage);
  color: #fff !important;
  font-size: 0.86rem;
  font-weight: 700;
  line-height: 1;
  text-decoration: none !important;
  box-shadow: 0 5px 14px rgba(37, 52, 43, 0.10);
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

.tool-button:hover {
  transform: translateY(-1px);
  background: var(--tools-sage-dark);
  box-shadow: 0 8px 18px rgba(37, 52, 43, 0.14);
}

.tool-button:focus-visible {
  outline: 3px solid rgba(80, 102, 88, 0.22);
  outline-offset: 3px;
}

@media (max-width: 900px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .tool-card {
    padding: 1.3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tool-button {
    transition: none;
  }
}
</style>
