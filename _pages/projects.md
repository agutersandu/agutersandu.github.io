---
title: Data & Tools
permalink: /projects/
layout: archive
author_profile: true
---

<p class="tools-intro">I sometimes build interactive companions to my research—mostly because some findings make more sense when you can explore them for yourself.</p>

<div class="tools-grid">
  <article class="tool-card">
    <div class="tool-card__content">
      <h2>Do Wind and Solar Improve Energy Security?</h2>
      <p>Wind and solar are often said to make countries more energy secure, but the real-world picture is more complicated. This tool brings together 25 studies published between 2015 and 2025 to show what happened after renewable projects were built—from household solar in Australia and Bangladesh to national power systems in China, Germany, and South Africa.</p>
      <p>You can compare the evidence by technology, country, scale, and outcome. Across the studies, renewables often reduced reliance on imported fuels, lowered electricity costs or exposure to price shocks, expanded access to energy, and helped power systems meet demand. The gains were strongest where grids, finance, maintenance, and local supply chains could support them. In some cases, dependence shifted from imported fuels to imported equipment, technology, or finance.</p>
      <p class="paper-basis"><strong>Based on:</strong> <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7348962" target="_blank" rel="noopener noreferrer"><em>From Renewable Deployment to Energy Security: The Institutional Foundations of the Renewable Security Dividend</em></a>.</p>
    </div>
    <div class="tool-actions">
      <a href="/projects/renewable-energy-security-explorer/" class="tool-button">Explore the data</a>
    </div>
  </article>

  <article class="tool-card">
    <div class="tool-card__content">
      <h2>Who Pays for the Energy Transition?</h2>
      <p>Britain pays for much of its low-carbon infrastructure through charges added to electricity bills. The same charge can weigh much more heavily on a low-income household because energy takes up a larger share of its budget. This tool shows how those costs are spread across income groups and why the way a transition is financed matters for fairness.</p>
      <p>It compares the current bill-based approach with an income-based alternative and with examples of how other countries pay for similar policies. The comparison shows that moving more of the cost away from electricity bills could reduce the burden on poorer households while asking better-off households to contribute more.</p>
      <p class="tool-caveat"><strong>Why this matters:</strong> This is not an argument against the energy transition or in favour of fossil fuels. Building low-carbon infrastructure is essential, and it has to be paid for. The question is how we choose to pay for it and how different choices share the costs across society.</p>
      <p class="paper-basis"><strong>Based on:</strong> <a href="https://doi.org/10.1080/09692290.2026.2695254" target="_blank" rel="noopener noreferrer"><em>Off the Books, onto the Bills: Levy-Backed Derisking and the UK’s Green Transition</em></a>.</p>
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

.tools-intro {
  font-size: 0.95em;
  line-height: 1.6;
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
  font-size: 1.25em;
  line-height: 1.2;
}

.tool-card p {
  margin: 0 0 0.8rem;
  color: var(--tools-text);
  font-size: 0.95em;
  line-height: 1.6;
}

.tool-card p:last-child {
  margin-bottom: 0;
}

.paper-basis {
  padding-top: 0.75rem;
  border-top: 1px solid rgba(80, 102, 88, 0.15);
}

.paper-basis a {
  color: var(--tools-sage-dark);
  font-weight: 600;
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
