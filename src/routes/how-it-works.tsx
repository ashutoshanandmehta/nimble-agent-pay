import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { LifecycleFlow } from "@/components/lifecycle-flow";

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
            <Link className="link-arrow" to="/trust">Explore Trust &amp; Architecture →</Link>
          </div>
        </section>

        <section className="section lifecycle-intro">
          <div className="container">
            <h2>
              When the agent decides to buy, the payment lifecycle begins.
            </h2>
            <div className="article-copy"><p>Detect → Decide → Authorise → Pay → Prove turns a device signal into a payment with a record behind it. The lifecycle below shows the precise steps.</p></div>
          </div>
        </section>
        <section className="section how-lifecycle-section">
          <div className="container">
            <LifecycleFlow />
          </div>
        </section>

        <Reveal className="section how-technical-section page-end-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <h2>How the agent becomes a payment.</h2>
                <div className="article-copy"><p>A decision is not permission to spend. Paisa.ai checks the request against the mandate before money moves. The three parts below show how a request becomes a payment.</p></div>
              </div>
            </div>
            <div className="technical-notes technical-visuals glass" aria-label="Payment execution architecture">
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

      </main>
      <SiteFooter />
    </>
  );
}
