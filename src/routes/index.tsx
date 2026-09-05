import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DemoCta, Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { HouseholdDemo } from "@/components/household-demo";
import { PaisaArchitectureDiagram } from "@/components/paisa-architecture";
import { ProductDemo } from "@/components/product-demo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paisa.ai — Agentic Commerce for Smart Devices" },
      {
        name: "description",
        content:
          "Paisa.ai gives smart devices an autonomous agent and payment infrastructure to safely act and transact within defined authority.",
      },
      { property: "og:title", content: "Paisa.ai — Agentic Commerce for Smart Devices" },
      {
        property: "og:description",
        content:
          "One integration gives smart devices an agent that can reason, act, and safely pay.",
      },
    ],
  }),
  component: Home,
});

const HERO_SCENES = [
  "images/connected-kitchen.jpg",
  "images/industrial-equipment.jpg",
  "images/edge-inventory.jpg",
] as const;
const USE_CASES = [
  [
    "Diagnostic analysers",
    "A machine notices it is running low on a critical reagent.",
    "Paisa.ai can create a bounded replenishment order and pay the approved supplier.",
  ],
  [
    "Vending & edge inventory",
    "An edge device sees stock fall below its threshold.",
    "It can replenish within the limits its operator has set.",
  ],
  [
    "Industrial equipment",
    "Equipment identifies the component or consumable it needs next.",
    "Paisa.ai turns that decision into a controlled purchase.",
  ],
  [
    "Household devices",
    "A connected device spots a routine need before someone opens a shopping app.",
    "Paisa.ai handles the decision, permission, payment, and record.",
  ],
] as const;

function Home() {
  const [scene, setScene] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setScene((current) => (current + 1) % HERO_SCENES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero home-hero">
          <div
            className="hero-image"
            aria-hidden="true"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${HERO_SCENES[scene]})` }}
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="gradient" style={{ marginTop: 14 }}>
                Give your devices the ability to think. act. and pay.
              </h1>
              <p className="lead">
                Devices can spot a need and make a decision. Paisa.ai gives them a controlled way
                to act on it and pay.
              </p>
              <div className="actions">
                <DemoCta />
                <Link className="btn btn-soft" to="/how-it-works">
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Reveal className="section home-integration">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <h2>You just need one integration for your devices</h2>
                <p className="lead">
                  Paisa.ai combines the autonomous agent and financial infrastructure required for
                  smart devices to reason, act, and complete real-world transactions.
                </p>
              </div>
            </div>
            <div className="article-copy">
              <p>The agent understands what the device is seeing and decides what to do next. The payment layer checks the request and moves money when it is allowed. The control layer keeps every action inside the owner&apos;s rules.</p>
              <p>Without Paisa.ai, a device team has to join up an agent, payment setup, authorization, transaction handling, and an audit trail. With Paisa.ai, one integration provides those parts together.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="section architecture-section">
          <div className="container architecture-layout">
            <div>
              <h2>The device integrates once. Paisa.ai handles the agent and the transaction.</h2>
              <div className="article-copy">
                <p>Intelligence and financial execution arrive together. The agent can understand the device and create a request. Paisa.ai carries out the transaction only when it is within the authority that was set.</p>
              </div>
              <Link className="link-arrow" to="/trust">
                Explore the architecture →
              </Link>
              <div className="architecture-copy">
                <h3>Think. Act. Pay.</h3>
                <p>The agent reads the situation, then makes a clear purchase request. Paisa.ai checks the rules and completes the payment.</p>
              </div>
            </div>
            <PaisaArchitectureDiagram />
          </div>
        </Reveal>

        <Reveal className="section demo-section">
          <div className="container">
            <div>
              <h2>See Paisa.ai in action.</h2>
            </div>
            <div className="product-story">
              <div className="product-story-copy">
                <p>The fridge spots low milk. Paisa.ai decides whether to replenish, checks the mandate, pays ₹72, and keeps the record. The device never needs broad access to money. It only gets to make a purchase that is within the rules.</p>
                <HouseholdDemo />
              </div>
              <ProductDemo />
            </div>
          </div>
        </Reveal>

        <Reveal className="section use-cases-section">
          <div className="container">
            <p className="article-transition">The same pattern applies beyond a household refrigerator. It can help any connected system that sees a repeatable need and has a clear set of spending rules.</p>
            <div className="editorial-rows">
              {USE_CASES.map(([title, problem, result], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{problem}</p>
                  <p>{result}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section trust-preview-section">
          <div className="container trust-preview editorial-flow-section compact-continuation">
            <div>
              <p className="article-transition"><b>Autonomous does not mean unrestricted.</b> The agent can ask to buy. Paisa.ai decides whether it is allowed to pay.</p>
              <Link className="link-arrow" to="/trust">
                Explore Trust &amp; Architecture →
              </Link>
            </div>
            <div className="trust-mini-flow">
              <b>Agent decides</b>
              <i>↓</i>
              <b>Paisa.ai authorizes</b>
              <i>↓</i>
              <b>Payment executes</b>
              <i>↓</i>
              <b>Evidence recorded</b>
            </div>
          </div>
        </Reveal>

        <Reveal className="section closing-cta-section">
          <div className="container glass closing-cta">
            <div>
              <div className="eyebrow">Autonomous commerce for smart devices</div>
              <h2>Give your devices the ability to transact.</h2>
              <p className="lead">
                One integration. An autonomous agent and the payment infrastructure to act on its
                decisions.
              </p>
            </div>
            <DemoCta />
          </div>
        </Reveal>
        <section className="container siic-ribbon" aria-label="Paisa.ai incubation">
          <p>
            Paisa.ai is incubated at IIT Kanpur&apos;s <strong>Startup Incubation and Innovation Centre</strong>, SIIC, IIT Kanpur. {" "}
            <a href="https://www.iitk.ac.in/innovation-incubation" target="_blank" rel="noopener noreferrer">
              Learn about SIIC →
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
