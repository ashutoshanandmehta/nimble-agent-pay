import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & architecture — Paisa.ai" },
      {
        name: "description",
        content:
          "Bounded authority, verifiable intent, cross-rail evidence and resilient execution for agent-initiated payments.",
      },
      { property: "og:title", content: "Trust & architecture — Paisa.ai" },
      {
        property: "og:description",
        content: "How Paisa.ai constrains, verifies and explains payments made by autonomous systems.",
      },
    ],
  }),
  component: Trust,
});

const PILLARS = [
  ["01", "Bounded Authority", "Programmatic ceilings define what an agent can spend before a transaction is attempted.", ["Transaction value ceilings", "Velocity / headroom controls", "Merchant or category scope", "Validity and expiry windows"]],
  ["02", "Verifiable Intent", "The payment must match the concrete order the agent produced, not just present a valid credential.", ["Order amount matches", "Merchant matches", "Order is not stale", "Intent is bound to execution"]],
  ["03", "Cross-Rail Evidence", "One record connects the user's authority, the agent's identity, the order and both payment legs.", ["Mandate reference", "Agent identity", "Signed order", "Funding + payment evidence"]],
] as const;

function Trust() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="dark-section" style={{ marginTop: 50, borderRadius: "42px 42px 0 0" }}>
          <div className="container">
            <div className="eyebrow" style={{ color: "#7d8ba3" }}>
              Trust & architecture
            </div>
            <h1 style={{ fontSize: "clamp(3rem,4.5vw,5.5rem)", maxWidth: 1000 }}>
              Financial authority that can be constrained, verified and explained.
            </h1>
            <p className="lead">
              The hard part is not moving money. It is ensuring the payment still means what the user authorised when a
              machine is the actor.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 45 }}>
          <div className="container">
            <div className="eyebrow">Three pillars of agentic trust</div>
            <div className="trust-grid" style={{ marginTop: 18 }}>
              {PILLARS.map(([num, title, body, checks]) => (
                <Reveal as="article" key={num} className="glass trust-card">
                  <div className="trust-num">{num}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <div className="check-list">
                    {checks.map((c) => (
                      <div className="check" key={c}>
                        {c}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal className="section">
          <div className="container glass card">
            <div className="eyebrow">Cross-rail receipt</div>
            <h2>Mandate → Agent → Order → Payment → Receipt.</h2>
            <p className="lead">
              A single signed record binds the mandate, the agent's order and both payment legs, so the transaction
              arrives with enough evidence to be checked on either rail.
            </p>
            <div className="evidence-chain">
              <div>
                Mandate<small>authority</small>
              </div>
              <div>
                Agent<small>identity</small>
              </div>
              <div>
                Order<small>intent</small>
              </div>
              <div>
                Payment<small>two rails</small>
              </div>
              <div>
                Receipt<small>evidence</small>
              </div>
            </div>
          </div>
        </Reveal>

        <section className="section">
          <div className="container grid-2">
            <article className="glass card">
              <div className="eyebrow">Rail architecture</div>
              <h2>UPI and card rails solve different parts of the system.</h2>
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
            <article className="glass card">
              <div className="eyebrow">Failure handling</div>
              <h2>Never turn “unknown” into “failed”.</h2>
              <p>
                A lost response between funding debit and merchant credit is a real intermediate state. Reconciliation
                checks what posted before settling, reversing or closing.
              </p>
              <Link className="link-arrow" to="/how-it-works">
                Explore reconciliation →
              </Link>
            </article>
          </div>
        </section>

        <Reveal className="section">
          <div className="container glass card">
            <div className="eyebrow">Engineering principle</div>
            <h2>Keep the exposure window explicit and short.</h2>
            <p className="lead">
              Exact-amount funding, immediate merchant payment and a deterministic sweep on failure shrink the interval
              in which money sits with neither the user nor the merchant.
            </p>
          </div>
        </Reveal>
      </main>
      <SiteFooter note="Bounded authority · verifiable intent · cross-rail evidence." />
    </>
  );
}
