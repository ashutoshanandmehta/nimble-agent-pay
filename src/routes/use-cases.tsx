import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Autonomous commerce use cases — Paisa.ai" },
      {
        name: "description",
        content:
          "Bounded autonomous payments across lab equipment, vending and edge inventory, industrial telemetry and the connected home.",
      },
      { property: "og:title", content: "Autonomous commerce use cases — Paisa.ai" },
      {
        property: "og:description",
        content: "Where machine-initiated replenishment becomes part of the workflow.",
      },
    ],
  }),
  component: UseCases,
});

const CASES = [
  ["⌁", "Diagnostic analysers", "Replenish critical reagents.", "Lab equipment reorders within pre-authorised budget bounds when stock crosses a threshold.", "LOW REAGENT → ORDER → AUTHORITY → PAY → LAB RUNS"],
  ["▦", "Vending & edge inventory", "Restock from the edge.", "Machines buy from suppliers without becoming unrestricted payment accounts.", "STOCK LOW → ORDER → VERIFY LIMIT → PAY → RESTOCKED"],
  ["◉", "Industrial equipment", "Buy what keeps the system running.", "Telemetry triggers consumable replenishment inside the equipment agent's authority.", "TELEMETRY → REPLENISH → AUTHORITY → SUPPLIER PAID"],
] as const;

function UseCases() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="use-hero">
          <div className="container">
            <div className="eyebrow">Autonomous commerce</div>
            <h1 className="gradient" style={{ maxWidth: 950 }}>
              When an autonomous system can pay, replenishment becomes part of the workflow.
            </h1>
            <p className="lead">
              Different devices, one systems problem: detect a need, create an order, stay inside a bounded mandate and
              leave auditable evidence.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">01 · Industrial & commercial automation</div>
            <div className="grid-3" style={{ marginTop: 18 }}>
              {CASES.map(([icon, kicker, title, body, flow]) => (
                <Reveal as="article" key={kicker} className="glass use-case">
                  <div className="machine">{icon}</div>
                  <div className="eyebrow">{kicker}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <div className="flow">{flow}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">02 · Consumer ecosystems</div>
                <h2>Connected devices become active participants in household commerce.</h2>
              </div>
            </div>
            <div className="home-demo">
              <div className="glass fridge">
                <div>
                  <div className="fridge-box">
                    <span className="fridge-dot" />
                  </div>
                  <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "var(--faint)" }}>
                    SMART REFRIGERATOR · ONLINE
                  </div>
                </div>
              </div>
              <div className="glass fridge-copy">
                <div className="eyebrow">Example household workflow</div>
                <h2>“We're running low on milk.”</h2>
                <p className="lead">
                  The fridge detects the shortage, the agent selects an authorised purchase, Paisa.ai checks the
                  authority and pays.
                </p>
                <div className="glass" style={{ padding: 18, marginTop: 22 }}>
                  <div style={{ font: "800 11px/1 'DM Mono',monospace", color: "var(--faint)" }}>AUTHORISED PURCHASE</div>
                  <div style={{ display: "grid", gap: 8, marginTop: 13 }}>
                    <div>
                      Category <strong style={{ float: "right" }}>Groceries ✓</strong>
                    </div>
                    <div>
                      Per purchase <strong style={{ float: "right" }}>₹72 / ₹2,000 ✓</strong>
                    </div>
                    <div>
                      Mandate <strong style={{ float: "right" }}>Valid ✓</strong>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <Link className="btn btn-primary" to="/how-it-works">
                    Trace the payment →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reveal className="section">
          <div className="container glass card">
            <div className="eyebrow">Smart home assistants</div>
            <h2>From recommendation to execution.</h2>
            <p className="lead">
              Household agents can go from "you're low on supplies" to an authorised replenishment — without
              general-purpose wallet access.
            </p>
            <Link className="link-arrow" to="/trust">
              See how that boundary is enforced →
            </Link>
          </div>
        </Reveal>
      </main>
      <SiteFooter note="From connected machines to autonomous homes." />
    </>
  );
}
