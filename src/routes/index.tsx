import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { HouseholdDemo } from "@/components/household-demo";

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

const HOME_CASES = [
  ["⌁", "Diagnostic analysers", "Replenish critical reagents.", "Lab equipment reorders inside pre-authorised budget bounds."],
  ["▦", "Vending & edge inventory", "Restock from the edge.", "Machines buy from suppliers without becoming unrestricted payment accounts."],
  ["◉", "Industrial equipment", "Keep the system running.", "Telemetry triggers consumable replenishment within the equipment agent's authority."],
] as const;

const HERO_SCENES = [
  { name: "Connected home", detail: "A household device detects a need before anyone has to open a shopping app.", image: "images/connected-kitchen.jpg" },
  { name: "Industrial equipment", detail: "A machine can replenish what keeps an operation running—within its defined authority.", image: "images/industrial-equipment.jpg" },
  { name: "Edge devices", detail: "Connected hardware can purchase exactly what it needs, without becoming an unrestricted account.", image: "images/edge-inventory.jpg" },
] as const;

function Home() {
  const [active, setActive] = useState(0);
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % STEPS.length), 1700);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setScene((i) => (i + 1) % HERO_SCENES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div
            className="hero-image"
            aria-hidden="true"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${HERO_SCENES[scene].image})` }}
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="gradient" style={{ marginTop: 14 }}>
                Payment Infrastructure for Autonomous Agents.
              </h1>
              <p className="lead">
                Agents can already make decisions and take action. Paisa.ai lets them pay safely, without giving them
                open-ended financial access or asking a person to approve every purchase.
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
                      <div style={{ fontSize: 12, color: "var(--pmuted)" }}>{note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Reveal className="section home-use-cases">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">What Paisa.ai enables</div>
                <h2>Connected devices can make replenishment part of the workflow.</h2>
                <p className="lead">Paisa.ai lets a device detect a need, an agent create an authorised order, and payment proceed within limits the owner set — with an auditable record at the end.</p>
              </div>
            </div>
            <div className="grid-3">
              {HOME_CASES.map(([icon, name, title, body]) => (
                <article className="glass use-case" key={name}>
                  <div className="machine">{icon}</div>
                  <div className="eyebrow">{name}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="home-household">
              <div className="eyebrow">Household workflow</div>
              <h2>From detection to an authorised purchase.</h2>
              <HouseholdDemo />
            </div>
          </div>
        </Reveal>

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

        <section className="container siic-ribbon" aria-label="Paisa.ai incubation">
          <div className="eyebrow">Incubated at IIT Kanpur</div>
          <div>
            <strong>Startup Incubation and Innovation Centre</strong>
            <span>SIIC, IIT Kanpur</span>
          </div>
          <a href="https://www.iitk.ac.in/innovation-incubation" target="_blank" rel="noopener">Learn about SIIC →</a>
        </section>

      </main>
      <SiteFooter
        note="Payment infrastructure for autonomous agents."
        extra={<Link to="/team">Team →</Link>}
      />
    </>
  );
}
