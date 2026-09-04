import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { LifecycleFlow } from "@/components/lifecycle-flow";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How a Paisa.ai payment works" },
      {
        name: "description",
        content:
          "The Paisa.ai payment lifecycle: mandate, signed intent, UPI funding, card execution, reconciliation and evidence.",
      },
      { property: "og:title", content: "How a Paisa.ai payment works" },
      {
        property: "og:description",
        content: "An interactive walkthrough of the nine events in a bounded, agent-initiated payment.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" style={{ minHeight: "auto", paddingBottom: 30 }}>
          <div className="container">
            <div className="eyebrow">How a Paisa.ai payment works</div>
            <h1 className="gradient" style={{ maxWidth: 950 }}>
              Detect → Decide → Authorise → Pay → Prove.
            </h1>
            <p className="lead">
              One commercial action, four separated concerns: the agent's intent, the funding leg, the merchant payment
              and the evidence.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="container">
            <LifecycleFlow />
          </div>
        </section>

        <Reveal className="section">
          <div className="container grid-3">
            <article className="glass card">
              <div className="card-kicker">BEFORE FUNDS MOVE</div>
              <h3>Intent signing</h3>
              <p>Cart, amount and merchant are fixed in a signed record before funding begins.</p>
            </article>
            <article className="glass card">
              <div className="card-kicker">FUNDING LEG</div>
              <h3>Exact amount on UPI</h3>
              <p>Funds are drawn against the mandate for the exact total, onto a short-lived credential.</p>
            </article>
            <article className="glass card">
              <div className="card-kicker">EXECUTION LEG</div>
              <h3>Card payment</h3>
              <p>The merchant sees a normal card transaction carrying the agentic context.</p>
            </article>
          </div>
        </Reveal>

      </main>
      <SiteFooter note="Bounded authority · verified intent · cross-rail evidence." />
    </>
  );
}
