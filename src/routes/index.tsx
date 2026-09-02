import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paisa.ai — Payment Infrastructure for Autonomous Agents" },
      {
        name: "description",
        content:
          "Paisa.ai grants, enforces and audits bounded financial authority so AI agents and connected devices can pay within limits a human set.",
      },
      { property: "og:title", content: "Paisa.ai — Payment Infrastructure for Autonomous Agents" },
      {
        property: "og:description",
        content: "Bounded authority, verified intent and cross-rail evidence for machine-initiated payments.",
      },
    ],
  }),
  component: Home,
});

const STEPS = [
  ["Detect", "Milk running low"],
  ["Decide", "Build authorised order"],
  ["Authorise", "Category + limits ✓"],
  ["Pay", "₹72 executed"],
  ["Prove", "Mandate → order → payment ✓"],
] as const;

function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % STEPS.length), 1700);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="dot" /> Bounded authority for machine-initiated payments
              </div>
              <h1 className="gradient" style={{ marginTop: 26 }}>
                Payment Infrastructure for Autonomous Agents.
              </h1>
              <p className="lead">
                Agents can decide and act. Moving money is the unresolved part — without handing over unrestricted
                financial access or asking a human to approve every transaction.
              </p>
              <div className="actions">
                <Link className="btn btn-primary" to="/how-it-works">
                  See the payment lifecycle →
                </Link>
                <Link className="btn btn-soft" to="/trust">
                  Explore the trust layer
                </Link>
              </div>
            </div>

            <div className="glass demo-card">
              <div className="demo-header">
                <div>
                  <div className="eyebrow">A bounded mandate</div>
                  <div className="demo-title" style={{ fontSize: 25, marginTop: 8 }}>
                    Authority, not access.
                  </div>
                </div>
                <span className="status">ENFORCED · AUDITABLE</span>
              </div>
              <div className="authority">
                <div className="mini">
                  <span>Budget</span>
                  <b>₹5,000 / mo</b>
                </div>
                <div className="mini">
                  <span>Per purchase</span>
                  <b>₹2,000</b>
                </div>
                <div className="mini">
                  <span>Category</span>
                  <b>Groceries</b>
                </div>
                <div className="mini">
                  <span>Validity</span>
                  <b>30 days</b>
                </div>
              </div>
              <div className="demo-flow">
                {STEPS.map(([name, note], i) => (
                  <div key={name} className={`demo-step${i === active ? " active" : ""}`}>
                    <span className="step-mark">{i + 1}</span>
                    <div>
                      <b>{name}</b>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{note}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="demo-foot">Human defines authority. Infrastructure enforces it. The agent executes within it.</div>
            </div>
          </div>
        </section>

        <Reveal className="section">
          <div className="container glass card" style={{ padding: 40 }}>
            <div className="eyebrow">01 · Paisa.ai</div>
            <h2 className="gradient">A control plane for machine-initiated payments.</h2>
            <p className="lead">
              Not a wallet for agents — infrastructure that makes autonomous spending predictable, constrained and
              traceable.
            </p>
            <div className="signature">
              <div>
                DETECT<small>environment</small>
              </div>
              <div>
                DECIDE<small>agent</small>
              </div>
              <div>
                AUTHORISE<small>mandate + policy</small>
              </div>
              <div>
                PAY<small>payment rails</small>
              </div>
              <div>
                PROVE<small>evidence</small>
              </div>
            </div>
            <div className="actions">
              <Link className="btn btn-primary" to="/trust">
                Understand the controls →
              </Link>
              <Link className="btn btn-soft" to="/use-cases">
                See the applications
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="section">
          <div className="container grid-2">
            <article className="glass card">
              <div className="eyebrow">02 · Architecture</div>
              <h2>One purchase. Two rails. One evidence layer.</h2>
              <p>
                The funding leg and the merchant payment leg stay separate, and each carries enough context to prove the
                payment matches the user's authority and the agent's signed order.
              </p>
              <Link className="link-arrow" to="/how-it-works">
                Open the interactive lifecycle →
              </Link>
            </article>
            <article className="glass card">
              <div className="eyebrow">03 · India rails</div>
              <h2>UPI for funding. Card rails for execution.</h2>
              <p>Cheap to fund, compatible with existing merchant acceptance, bounded end to end.</p>
              <Link className="link-arrow" to="/trust">
                See the rail architecture →
              </Link>
            </article>
          </div>
        </Reveal>

        <Reveal className="dark-section">
          <div className="container">
            <div className="eyebrow" style={{ color: "#7e8ba0" }}>
              The positioning
            </div>
            <h2 style={{ maxWidth: 900 }}>Paisa.ai does not make agents spend.</h2>
            <h2 style={{ maxWidth: 900 }}>
              It makes autonomous spending <span className="gradient">controllable.</span>
            </h2>
            <div className="pill-row">
              <span className="dark-pill">Bounded authority</span>
              <span className="dark-pill">Verifiable intent</span>
              <span className="dark-pill">Cross-rail evidence</span>
              <span className="dark-pill">Autonomous commerce</span>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter
        note="Payment infrastructure for autonomous agents."
        extra={
          <>
            Incubated at SIIC, IIT Kanpur · <Link to="/team">Team →</Link>
          </>
        }
      />
    </>
  );
}
