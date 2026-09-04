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

const HOME_CASES = [
  ["⌁", "Diagnostic analysers", "Replenish critical reagents.", "Lab equipment reorders inside pre-authorised budget bounds."],
  ["▦", "Vending & edge inventory", "Restock from the edge.", "Machines buy from suppliers without becoming unrestricted payment accounts."],
  ["◉", "Industrial equipment", "Keep the system running.", "Telemetry triggers consumable replenishment within the equipment agent's authority."],
] as const;

const HERO_SCENES = [
  { name: "Connected home", detail: "A household device detects a need before anyone has to open a shopping app.", image: "images/connected-kitchen.jpg" },
  { name: "Industrial equipment", detail: "A machine can replenish what keeps an operation running within its defined authority.", image: "images/industrial-equipment.jpg" },
  { name: "Edge devices", detail: "Connected hardware can purchase exactly what it needs, without becoming an unrestricted account.", image: "images/edge-inventory.jpg" },
] as const;

function Home() {
  const [scene, setScene] = useState(0);

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
          </div>
        </section>

        <Reveal className="section home-use-cases">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <h2>Let connected devices handle replenishment and repeat purchases for you.</h2>
                <p className="lead">Paisa.ai enables the agent in a smart device to make repeat purchases on your behalf, within the limits you set, with an auditable record at the end.</p>
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
          <div className="container glass rail-explainer">
            <div className="eyebrow">How money moves</div>
            <h2>Two rails, one controlled purchase.</h2>
            <p className="lead">The loading rail moves the approved amount from UPI to the virtual card. The spending rail then pays the merchant from that card. Paisa.ai keeps both steps tied to the same authority and order.</p>
            <div className="rail-animation" aria-label="Animated payment flow from UPI to virtual card to merchant bank">
              <div className="rail-station"><span>1</span><b>UPI account</b><small>Approved funds</small></div>
              <div className="rail-path loading"><i /><em>Loading rail</em><small>UPI → virtual card</small></div>
              <div className="rail-station card-station"><span>2</span><b>Virtual card</b><small>Immediate Transfer</small></div>
              <div className="rail-path spending"><i /><em>Spending rail</em><small>Card → merchant bank</small></div>
              <div className="rail-station merchant-station"><span>3</span><b>Merchant bank</b><small>Payment received</small></div>
            </div>
            <Link className="link-arrow" to="/how-it-works">See the complete payment lifecycle →</Link>
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
      <SiteFooter />
    </>
  );
}
