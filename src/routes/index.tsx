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
            <div
              className="hero-system glass"
              aria-label="Smart device to Paisa.ai to autonomous commerce"
            >
              <div>
                <b>Smart device</b>
                <span>Context + signal</span>
              </div>
              <i>→</i>
              <div className="hero-system-paisa">
                <b>Paisa.ai</b>
                <span>Agent + payment</span>
              </div>
              <i>→</i>
              <div>
                <b>Autonomous commerce</b>
                <span>Action + transaction</span>
              </div>
            </div>
          </div>
        </section>

        <Reveal className="section home-integration">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">One Paisa.ai integration</div>
                <h2>One integration. Everything your device needs to transact.</h2>
                <p className="lead">
                  Paisa.ai combines the autonomous agent and financial infrastructure required for
                  smart devices to reason, act, and complete real-world transactions.
                </p>
              </div>
            </div>
            <div className="editorial-labels" aria-label="What Paisa.ai provides">
              <p><b>Agent</b> Understands the device and decides what to do.</p>
              <p><b>Payment</b> Checks the request and moves money when it is allowed.</p>
              <p><b>Control</b> Keeps every action inside the owner&apos;s rules.</p>
            </div>
            <p className="integration-unifier">
              <b>One integrated Paisa.ai service.</b> Your device does not have to assemble the
              agent and the transaction layer separately.
            </p>
          </div>
        </Reveal>

        <Reveal className="section architecture-section">
          <div className="container architecture-layout">
            <div>
              <div className="eyebrow">The complete layer</div>
              <h2>The device integrates once. Paisa.ai handles the agent and the transaction.</h2>
              <p className="lead">
                Intelligence and financial execution arrive together, with clear authority around
                every autonomous action.
              </p>
              <Link className="link-arrow" to="/trust">
                Explore the architecture →
              </Link>
            </div>
            <PaisaArchitectureDiagram />
          </div>
        </Reveal>

        <Reveal className="section think-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">From context to commerce</div>
                <h2>Think. Act. Pay.</h2>
                <p className="lead">
                  The AI agent provides intelligence. Paisa.ai provides financial agency and
                  execution.
                </p>
              </div>
            </div>
            <p className="think-line"><b>Think</b> The agent reads the situation. <b>Act</b> It makes a clear purchase request. <b>Pay</b> Paisa.ai checks the rules and completes the payment.</p>
          </div>
        </Reveal>

        <Reveal className="section demo-section">
          <div className="container demo-layout">
            <div>
              <div className="eyebrow">Product demonstration</div>
              <h2>See Paisa.ai in action.</h2>
              <p className="lead">
                A smart device detects a need. Paisa.ai&apos;s agent reasons about it, initiates the
                action, and completes the transaction through its payment infrastructure.
              </p>
              <p className="demo-product-statement">
                Your device provides the context. Paisa.ai provides the intelligence and financial
                execution.
              </p>
            </div>
            <ProductDemo />
          </div>
          <div className="demo-explainer">
            <h3>From device signal to autonomous transaction.</h3>
            <div>
              <article>
                <b>1. Understand</b>
                <span>Paisa.ai receives device context.</span>
              </article>
              <article>
                <b>2. Reason</b>
                <span>The agent determines what action is required.</span>
              </article>
              <article>
                <b>3. Authorize</b>
                <span>Paisa.ai checks whether the transaction is permitted.</span>
              </article>
              <article>
                <b>4. Execute</b>
                <span>The approved payment is completed and recorded.</span>
              </article>
            </div>
            <DemoCta />
          </div>
        </Reveal>

        <Reveal className="section household-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">A concrete device workflow</div>
                <h2>Your device sees a need. Paisa.ai takes care of the rest.</h2>
                <p className="lead">
                  The fridge spots low milk. Paisa.ai decides whether to replenish, checks the
                  mandate, pays ₹72, and keeps the record.
                </p>
              </div>
            </div>
            <HouseholdDemo />
          </div>
        </Reveal>

        <Reveal className="section mental-model-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">What your team gets</div>
                <h2>Your device. One integration. An autonomous commerce layer.</h2>
              </div>
            </div>
            <div className="before-after">
              <p><span>Without Paisa.ai</span> A device team has to assemble an agent, payment setup, authorization, transaction handling, and audit trail.</p>
              <p><span>With Paisa.ai</span> One integration gives the device an agent, a payment path, and clear financial controls.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="section use-cases-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">Built for connected systems</div>
                <h2>Devices that can detect, decide, and transact.</h2>
              </div>
            </div>
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
          <div className="container trust-preview editorial-flow-section">
            <div>
              <div className="eyebrow">Bounded autonomy</div>
              <h2>Autonomous does not mean unrestricted.</h2>
              <p className="lead">
                The agent can ask to buy. Paisa.ai decides whether it is allowed to pay.
              </p>
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

        <section className="container siic-ribbon" aria-label="Paisa.ai incubation">
          <div className="eyebrow">Incubated at IIT Kanpur</div>
          <div>
            <strong>Startup Incubation and Innovation Centre</strong>
            <span>SIIC, IIT Kanpur</span>
          </div>
          <a href="https://www.iitk.ac.in/innovation-incubation" target="_blank" rel="noopener">
            Learn about SIIC →
          </a>
        </section>
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
      </main>
      <SiteFooter />
    </>
  );
}
