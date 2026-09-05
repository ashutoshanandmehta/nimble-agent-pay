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
  ["Diagnostic analysers", "A reagent level drops below the safe threshold.", "The agent requests a replenishment order. Paisa.ai checks the lab’s limits and pays the supplier.", "LOW REAGENT → REQUEST → CHECK → PAY → LAB RUNS"],
  ["Vending & edge inventory", "The machine sees that a product is running out.", "Paisa.ai lets it restock without giving the machine an open payment account.", "STOCK LOW → REQUEST → CHECK → PAY → RESTOCKED"],
  ["Industrial equipment", "Telemetry points to a consumable or part that needs replacing.", "The agent creates the request. Paisa.ai controls the approved purchase.", "SIGNAL → REQUEST → CHECK → PAY → SUPPLIER PAID"],
] as const;

function UseCases() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="use-hero">
          <div className="container">
            <h1 className="gradient" style={{ maxWidth: 950 }}>
              When an autonomous system can pay, replenishment becomes part of the workflow.
            </h1>
            <p className="lead">
              Different devices face the same problem. They need to spot a need, make a request,
              stay within a mandate, and leave a record.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="use-case-stories" style={{ marginTop: 18 }}>
              {CASES.map(([title, signal, control, flow], index) => (
                <Reveal as="article" key={title} className="use-case-story">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p><b>Detect</b> {signal}</p>
                  <p><b>Control</b> {control}</p>
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
                <h2>Connected devices become active participants in household commerce.</h2>
              </div>
            </div>
            <div className="home-demo household-story">
              <div className="fridge">
                <div>
                  <svg className="fridge-illustration" viewBox="0 0 220 300" role="img" aria-label="Smart refrigerator online">
                    <defs>
                      <linearGradient id="fridge-body" x1="20" y1="0" x2="200" y2="300" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffffff" />
                        <stop offset="1" stopColor="#dce7ee" />
                      </linearGradient>
                      <linearGradient id="fridge-door" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#fbfeff" />
                        <stop offset="1" stopColor="#e9f0f5" />
                      </linearGradient>
                      <filter id="fridge-shadow" x="-30%" y="-20%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#4b6176" floodOpacity=".22" />
                      </filter>
                    </defs>
                    <ellipse cx="110" cy="280" rx="72" ry="11" fill="#728aa0" opacity=".16" />
                    <g filter="url(#fridge-shadow)">
                      <rect x="42" y="18" width="136" height="252" rx="20" fill="url(#fridge-body)" stroke="#c9d6df" strokeWidth="2" />
                      <rect x="50" y="27" width="120" height="81" rx="13" fill="url(#fridge-door)" />
                      <rect x="50" y="114" width="120" height="147" rx="13" fill="url(#fridge-door)" />
                      <path d="M50 109h120" stroke="#b9c9d4" strokeWidth="2" />
                      <rect x="130" y="46" width="25" height="25" rx="7" fill="#15253a" />
                      <circle cx="148" cy="52" r="3.5" fill="#54d7a3" />
                      <path d="M137 62h11" stroke="#9eb4c3" strokeWidth="2" strokeLinecap="round" />
                      <path d="M60 137h70M60 179h70M60 221h70" stroke="#c7d3dc" strokeWidth="2" strokeLinecap="round" />
                      <path d="M146 130v45M146 188v45" stroke="#91a6b5" strokeWidth="4" strokeLinecap="round" />
                      <path d="M76 151h24l4 12v35H72v-35l4-12Z" fill="#d6efff" stroke="#8db8d3" strokeWidth="2" />
                      <path d="M82 151v-9h12v9" fill="none" stroke="#8db8d3" strokeWidth="2" strokeLinecap="round" />
                      <path d="M76 174h28" stroke="#8db8d3" strokeWidth="2" opacity=".75" />
                      <path d="M112 151h10M112 161h10M112 171h10" stroke="#8cb29c" strokeWidth="5" strokeLinecap="round" />
                    </g>
                    <g transform="translate(157 211)">
                      <circle cx="0" cy="0" r="22" fill="#def7eb" stroke="#80cda7" strokeWidth="2" />
                      <path d="M-8 1 0 9 11-8" fill="none" stroke="#259867" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "var(--faint)" }}>
                    SMART REFRIGERATOR · ONLINE
                  </div>
                </div>
              </div>
              <div className="fridge-copy">
                <h2>“We're running low on milk.”</h2>
                <p className="lead">
                  The fridge spots the shortage. Paisa.ai decides whether it should replenish, checks
                  the authority, and pays.
                </p>
                <div className="purchase-summary" style={{ padding: 18, marginTop: 22 }}>
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

      </main>
      <SiteFooter />
    </>
  );
}
