import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoCta, Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { HouseholdDemo } from "@/components/household-demo";
import { LifecycleFlow } from "@/components/lifecycle-flow";
import { PaisaArchitectureDiagram } from "@/components/paisa-architecture";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Paisa.ai works — Agentic Commerce for Smart Devices" },
      {
        name: "description",
        content:
          "One Paisa.ai integration gives a smart device an autonomous agent and payment infrastructure to reason, act, authorize, pay, and verify.",
      },
      { property: "og:title", content: "How Paisa.ai works — Agentic Commerce for Smart Devices" },
      {
        property: "og:description",
        content:
          "From device context to authorized payment and evidence, through one Paisa.ai integration.",
      },
    ],
  }),
  component: HowItWorks,
});

const LAYERS = [
  [
    "The agent",
    [
      "Understands device context",
      "Interprets signals",
      "Reasons about what is needed",
      "Decides what action to take",
      "Creates a purchase intent",
    ],
  ],
  [
    "The payment infrastructure",
    [
      "Validates the intent",
      "Checks financial authority",
      "Applies mandates and limits",
      "Authorizes the transaction",
      "Executes payment and records evidence",
    ],
  ],
] as const;

function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero how-hero">
          <div className="container">
            <h1 className="gradient">From device intelligence to autonomous payment.</h1>
            <p className="lead">
              One Paisa.ai integration gives your smart device an autonomous agent that can
              understand context, reason about what to do, and complete transactions through
              Paisa.ai&apos;s payment infrastructure.
            </p>
            <div className="actions">
              <DemoCta />
              <Link className="btn btn-soft" to="/trust">
                Explore Trust &amp; Architecture
              </Link>
            </div>
          </div>
        </section>

        <Reveal className="section how-architecture-section">
          <div className="container how-architecture-layout">
            <div>
              <div className="eyebrow">One integration</div>
              <h2>Agent and payment infrastructure, together inside Paisa.ai.</h2>
              <p className="lead">
                Your device supplies the context. Paisa.ai supplies the intelligence, transaction
                controls, and execution path to the merchant.
              </p>
            </div>
            <PaisaArchitectureDiagram className="how-architecture-diagram" />
          </div>
        </Reveal>

        <Reveal className="section how-layers-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Two connected layers</div>
                <h2>Intelligence decides. Financial controls execute.</h2>
              </div>
            </div>
            <div className="how-layers-grid">
              {LAYERS.map(([title, points]) => (
                <article className="glass how-layer-card" key={title}>
                  <div className="eyebrow">{title}</div>
                  <h3>
                    {title === "The agent"
                      ? "Reason about the next action."
                      : "Control whether and how it happens."}
                  </h3>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="how-layer-statement">
              The agent decides what should happen. Paisa.ai controls whether and how the
              transaction happens.
            </p>
          </div>
        </Reveal>

        <Reveal className="section how-think-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">From context to commerce</div>
                <h2>Think → Act → Pay.</h2>
              </div>
            </div>
            <div className="how-think-grid">
              <article className="glass how-think-card">
                <span>01</span>
                <h3>Think</h3>
                <p>The agent interprets the device&apos;s state and context.</p>
              </article>
              <article className="glass how-think-card">
                <span>02</span>
                <h3>Act</h3>
                <p>The agent reasons about the next action and generates a transaction intent.</p>
              </article>
              <article className="glass how-think-card">
                <span>03</span>
                <h3>Pay</h3>
                <p>
                  Paisa.ai validates the intent against financial authority and executes the
                  payment.
                </p>
              </article>
            </div>
          </div>
        </Reveal>

        <section className="section lifecycle-intro">
          <div className="container">
            <div className="eyebrow">The detailed payment lifecycle</div>
            <h2>
              Once the agent decides to transact, Paisa.ai handles the complete payment lifecycle.
            </h2>
            <p className="lead">
              Detect → Decide → Authorise → Pay → Prove turns a device need into an authorized,
              executed, and recorded transaction.
            </p>
          </div>
        </section>
        <section className="section how-lifecycle-section">
          <div className="container">
            <LifecycleFlow />
          </div>
        </section>

        <Reveal className="section decision-authority-section">
          <div className="container decision-authority-layout">
            <div>
              <div className="eyebrow">Decide ≠ Authorise</div>
              <h2>A purchase need is not permission to spend.</h2>
              <p className="lead">
                The Paisa.ai agent can determine that milk needs replenishment. Paisa.ai separately
                checks whether that purchase is allowed under the device&apos;s financial mandate.
              </p>
              <Link className="link-arrow" to="/trust">
                Explore Trust &amp; Architecture →
              </Link>
            </div>
            <div className="glass decision-authority-flow">
              <div>
                <span>Agent decision</span>
                <b>“Milk needs replenishment”</b>
              </div>
              <i>↓</i>
              <div>
                <span>Purchase intent</span>
                <b>₹72 · Groceries</b>
              </div>
              <i>↓</i>
              <div>
                <span>Paisa authorization</span>
                <b>Mandate valid · Limit valid · Category valid</b>
              </div>
              <i>↓</i>
              <strong>Authorized</strong>
            </div>
          </div>
        </Reveal>

        <Reveal className="section how-household-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">A complete device workflow</div>
                <h2>
                  The refrigerator doesn&apos;t need to build its own commerce stack. It integrates
                  Paisa.ai.
                </h2>
                <p className="lead">
                  Detect milk running low → Think about replenishment → Act by creating a purchase
                  intent → Authorize against the mandate → Pay ₹72 → Prove with a recorded
                  transaction.
                </p>
              </div>
            </div>
            <HouseholdDemo />
          </div>
        </Reveal>

        <Reveal className="section how-technical-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Technical depth</div>
                <h2>How the agent becomes a payment.</h2>
                <p className="lead">
                  The lifecycle binds the decision to authority, execution, and evidence without
                  handing the agent unrestricted access.
                </p>
              </div>
            </div>
            <div className="grid-3">
              <article className="glass card">
                <div className="card-kicker">BEFORE FUNDS MOVE</div>
                <h3>Intent signing</h3>
                <p>Cart, amount and merchant are fixed in a signed record before funding begins.</p>
              </article>
              <article className="glass card">
                <div className="card-kicker">FUNDING LEG</div>
                <h3>Exact amount on UPI</h3>
                <p>
                  Funds are drawn against the mandate for the exact total, onto a short-lived
                  credential.
                </p>
              </article>
              <article className="glass card">
                <div className="card-kicker">EXECUTION LEG</div>
                <h3>Card payment</h3>
                <p>The merchant sees a normal card transaction carrying the agentic context.</p>
              </article>
            </div>
          </div>
        </Reveal>

        <Reveal className="section device-gets-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">What your device gets</div>
                <h2>One integration. Four capabilities.</h2>
              </div>
            </div>
            <div className="device-gets-grid">
              <article className="glass">
                <b>Autonomous agent</b>
                <span>Understands, reasons, and acts.</span>
              </article>
              <article className="glass">
                <b>Payment infrastructure</b>
                <span>Executes real-world transactions.</span>
              </article>
              <article className="glass">
                <b>Financial control</b>
                <span>Enforces mandates, limits, and authority.</span>
              </article>
              <article className="glass">
                <b>Evidence</b>
                <span>Creates a verifiable transaction record.</span>
              </article>
            </div>
          </div>
        </Reveal>

        <Reveal className="section customer-flow-section">
          <div className="container glass customer-flow">
            <div>
              <div className="eyebrow">Customer integration experience</div>
              <h2>Integrate once. Let Paisa.ai handle the rest.</h2>
              <p className="lead">
                Your device supplies the context. Paisa.ai supplies the intelligence and financial
                execution.
              </p>
            </div>
            <div className="customer-flow-steps">
              <b>Smart device</b>
              <i>↓</i>
              <b>Paisa.ai integration</b>
              <i>↓</i>
              <b>AI agent</b>
              <i>↓</i>
              <b>Reason + act</b>
              <i>↓</i>
              <b>Payment infrastructure</b>
              <i>↓</i>
              <strong>Autonomous transaction</strong>
            </div>
          </div>
        </Reveal>

        <Reveal className="section how-closing-section">
          <div className="container glass closing-cta">
            <div>
              <div className="eyebrow">See the complete service</div>
              <h2>Give your devices the ability to transact.</h2>
              <p className="lead">
                One integration gives a smart device the agent and payment infrastructure to make
                authorized decisions in the real world.
              </p>
            </div>
            <DemoCta />
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
