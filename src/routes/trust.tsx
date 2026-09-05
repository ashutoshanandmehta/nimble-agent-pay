import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoCta, Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & architecture — Paisa.ai" },
      {
        name: "description",
        content:
          "How Paisa.ai bounds financial authority, verifies intent, executes controlled payments, and records evidence for autonomous systems.",
      },
      { property: "og:title", content: "Trust & architecture — Paisa.ai" },
      {
        property: "og:description",
        content:
          "Autonomous operation with bounded authority, controlled execution, and verifiable evidence.",
      },
    ],
  }),
  component: Trust,
});

const PILLARS = [
  [
    "01",
    "Bounded Authority",
    "The agent gets agency. The device owner retains authority.",
    [
      "Transaction value ceilings",
      "Velocity / headroom controls",
      "Merchant or category scope",
      "Validity and expiry windows",
    ],
  ],
  [
    "02",
    "Verifiable Intent",
    "The payment must match the concrete purchase intent the agent produced, not just present a valid credential.",
    [
      "Order amount matches",
      "Merchant matches",
      "Order is not stale",
      "Intent is bound to execution",
    ],
  ],
  [
    "03",
    "Cross-Rail Evidence",
    "Every autonomous transaction should leave an explainable trail across the decision, authority, and payment rails.",
    ["Mandate reference", "Agent identity", "Signed order", "Funding + payment evidence"],
  ],
] as const;

const RISKS = [
  ["Agent requests excessive amount", "Transaction limits"],
  ["Agent requests disallowed category", "Category mandate"],
  ["Authorization differs from intent", "Intent verification"],
  ["Payment succeeds or fails unexpectedly", "Reconciliation"],
  ["Need to understand what happened", "Evidence / audit trail"],
] as const;

function Trust() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero trust-hero">
          <div className="container">
            <h1 className="gradient">Autonomous, without unrestricted access.</h1>
            <p className="lead">
              An agent can decide what it wants to buy. That does not give it unrestricted access
              to money.
            </p>
            <div className="actions">
              <DemoCta />
              <Link className="btn btn-soft" to="/how-it-works">
                How It Works →
              </Link>
            </div>
          </div>
        </section>

        <Reveal className="section trust-boundary-section">
          <div className="container trust-boundary-layout">
            <div>
              <div className="eyebrow">The core boundary</div>
              <h2>What the agent wants is not the same as what it can spend.</h2>
              <p className="lead">
                The agent makes a request. Paisa.ai checks the limits, category, and validity
                before it lets the payment through.
              </p>
            </div>
            <div className="glass trust-boundary-flow">
              <div>
                <span>Paisa.ai Agent</span>
                <b>Understand / Reason / Decide</b>
              </div>
              <i>↓</i>
              <div>
                <span>Purchase intent</span>
                <b>What the agent requests</b>
              </div>
              <i>↓</i>
              <div className="trust-authorize">
                <span>Paisa authorization</span>
                <b>Limit · Category · Validity</b>
              </div>
              <i>↓</i>
              <strong>Authorized</strong>
              <i>↓</i>
              <div>
                <span>Payment</span>
                <b>Controlled execution</b>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="section trust-control-flow-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Controlled financial agency</div>
                <h2>Decision → Authorization → Execution.</h2>
                <p className="lead">
                  The device can act autonomously, but only within the financial authority granted
                  to it.
                </p>
              </div>
            </div>
            <div className="trust-control-flow editorial-steps">
              <article>
                <span>01</span>
                <h3>Decision</h3>
                <b>Paisa.ai Agent</b>
                <p>
                  Reads the device context and creates a clear purchase request.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Authorization</h3>
                <b>Paisa.ai Control Layer</b>
                <p>Checks whether the requested action falls within the financial mandate.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Execution</h3>
                <b>Paisa.ai Payment Infrastructure</b>
                <p>Executes the approved transaction and records evidence.</p>
              </article>
            </div>
          </div>
        </Reveal>

        <section className="section trust-pillars-section">
          <div className="container">
            <div className="eyebrow">Three pillars of agentic trust</div>
            <div className="trust-grid editorial-pillars" style={{ marginTop: 18 }}>
              {PILLARS.map(([num, title, body, checks]) => (
                <Reveal as="article" key={num} className="trust-card">
                  <div className="trust-num">{num}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <div className="check-list">
                    {checks.map((check) => (
                      <div className="check" key={check}>
                        {check}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal className="section trust-evidence-section">
          <div className="container trust-evidence editorial-flow-section">
            <div>
              <div className="eyebrow">Intent and evidence</div>
              <h2>What the agent decided stays connected to what gets paid.</h2>
              <p className="lead">
                Agent decision → explicit purchase intent → authorization → payment. The intent
                records what the agent actually requested so it can be checked before execution and
                explained afterward.
              </p>
            </div>
            <div className="trust-evidence-flow">
              <b>Agent decision</b>
              <i>↓</i>
              <b>Purchase intent</b>
              <i>↓</i>
              <b>Authorization</b>
              <i>↓</i>
              <b>Payment</b>
              <i>↓</i>
              <b>Transaction result</b>
              <i>↓</i>
              <strong>Evidence</strong>
            </div>
          </div>
        </Reveal>

        <section className="section">
          <div className="container rail-editorial">
            <article>
              <div className="eyebrow">Rail architecture</div>
              <h2>UPI and card rails solve different parts of the system.</h2>
              <p>
                The agent makes a request. Paisa.ai authorizes it. Funding and payment then run on
                separate rails.
              </p>
              <p>
                <strong>UPI</strong>
                <br />
                Funding path built on real-time domestic payments.
              </p>
              <p>
                <strong>Cards</strong>
                <br />
                Merchant-facing execution with established network controls and dispute machinery.
              </p>
              <Link className="link-arrow" to="/how-it-works">
                See the two-rail lifecycle →
              </Link>
            </article>
            <article>
              <div className="eyebrow">Failure handling</div>
              <h2>Autonomy requires recovery, not just execution.</h2>
              <p>
                A lost response between funding and merchant credit is a real intermediate state.
                Reconciliation checks what posted before it settles, reverses, or closes.
              </p>
              <div className="failure-mini-flow">
                <b>Payment attempt</b>
                <i>↓</i>
                <b>Success → Complete + record</b>
                <span>or</span>
                <b>Failure → Reconcile → Resolve state → Record result</b>
              </div>
              <Link className="link-arrow" to="/how-it-works">
                Explore reconciliation →
              </Link>
            </article>
          </div>
        </section>

        <Reveal className="section risk-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">A practical risk model</div>
                <h2>What Paisa.ai controls.</h2>
                <p className="lead">
                  Financial authority stays with Paisa.ai, rather than being handed over as
                  unrestricted payment access.
                </p>
              </div>
            </div>
            <div
              className="risk-table glass"
              role="table"
              aria-label="Practical risks and Paisa.ai controls"
            >
              <div className="risk-row risk-head" role="row">
                <b role="columnheader">Risk</b>
                <b role="columnheader">Paisa.ai control</b>
              </div>
              {RISKS.map(([risk, control]) => (
                <div className="risk-row" role="row" key={risk}>
                  <span role="cell">{risk}</span>
                  <strong role="cell">{control}</strong>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section">
          <div className="container trust-exposure editorial-statement">
            <div className="eyebrow">Engineering principle</div>
            <h2>Keep the exposure window explicit and short.</h2>
            <p className="lead">
              Fund the exact amount. Pay the merchant promptly. Return unspent money if a payment
              fails. This keeps the period of uncertainty short.
            </p>
          </div>
        </Reveal>

        <Reveal className="section trust-closing-section">
          <div className="container trust-closing editorial-flow-section">
            <div>
              <div className="eyebrow">Trust by design</div>
              <h2>
                Paisa.ai doesn&apos;t just give devices an agent. It gives them controlled financial
                agency.
              </h2>
              <p className="lead">
                The agent provides the decision. Paisa.ai provides the authority, payment, and
                evidence.
              </p>
              <p>
                Trust is part of the product: autonomy can scale without requiring unrestricted
                financial access.
              </p>
            </div>
            <div className="trust-closing-labels">
              <b>Bounded authority</b>
              <b>Explicit intent</b>
              <b>Controlled execution</b>
              <b>Verifiable evidence</b>
            </div>
            <DemoCta />
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
