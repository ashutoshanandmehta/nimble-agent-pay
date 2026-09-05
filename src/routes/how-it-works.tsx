import { createFileRoute, Link } from "@tanstack/react-router";
import { DemoCta, Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
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

function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero how-hero">
          <div className="container">
            <h1 className="gradient">From device intelligence to autonomous payment.</h1>
            <p className="lead">
              Your device provides context. Paisa.ai turns it into a bounded payment when the
              rules allow it.
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
              <h2>One integration. A device that can act in the real world.</h2>
              <p className="lead">
                Paisa.ai gives the device an agent to understand the signal and a payment system
                to carry out the approved action.
              </p>
            </div>
            <PaisaArchitectureDiagram className="how-architecture-diagram" />
          </div>
        </Reveal>

        <section className="section lifecycle-intro">
          <div className="container">
            <div className="eyebrow">The detailed payment lifecycle</div>
            <h2>
              When the agent decides to buy, the payment lifecycle begins.
            </h2>
            <p className="lead">
              Detect → Decide → Authorise → Pay → Prove turns a device signal into a payment with
              a record behind it.
            </p>
          </div>
        </section>
        <section className="section how-lifecycle-section">
          <div className="container">
            <LifecycleFlow />
          </div>
        </section>

        <Reveal className="section how-technical-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Technical depth</div>
                <h2>How the agent becomes a payment.</h2>
                <p className="lead">
                  A decision is not permission to spend. Paisa.ai checks the request against the
                  mandate before money moves.
                </p>
              </div>
            </div>
            <div className="technical-notes">
              <article>
                <div className="card-kicker">BEFORE FUNDS MOVE</div>
                <h3>Intent signing</h3>
                <p>Cart, amount and merchant are fixed in a signed record before funding begins.</p>
              </article>
              <article>
                <div className="card-kicker">FUNDING LEG</div>
                <h3>Exact amount on UPI</h3>
                <p>
                  Funds are drawn against the mandate for the exact total, onto a short-lived
                  credential.
                </p>
              </article>
              <article>
                <div className="card-kicker">EXECUTION LEG</div>
                <h3>Card payment</h3>
                <p>The merchant sees a normal card transaction carrying the agentic context.</p>
              </article>
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
