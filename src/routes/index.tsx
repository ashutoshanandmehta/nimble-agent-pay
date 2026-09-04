import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DemoCta, Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { HouseholdDemo } from "@/components/household-demo";
import { PaisaArchitectureDiagram } from "@/components/paisa-architecture";

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
const PILLARS = [
  ["01", "Agent", "Understands context, reasons about needs, and decides what action to take."],
  [
    "02",
    "Payment",
    "Authorizes and executes the transaction through the appropriate payment infrastructure.",
  ],
  [
    "03",
    "Control",
    "Enforces the authority, limits, and policies governing autonomous transactions.",
  ],
] as const;
const USE_CASES = [
  [
    "⌁",
    "Diagnostic analysers",
    "Detect consumable requirements → initiate replenishment → complete an approved purchase.",
  ],
  [
    "▦",
    "Vending & edge inventory",
    "Detect low inventory → decide replenishment → pay the supplier.",
  ],
  [
    "◉",
    "Industrial equipment",
    "Identify a required component → evaluate the action → execute authorized procurement.",
  ],
  ["⌂", "Household devices", "Detect recurring needs → reason about replenishment → purchase."],
] as const;

function DemoPlaceholder() {
  return (
    <div
      className="demo-placeholder glass"
      role="group"
      aria-label="Paisa.ai product demonstration placeholder"
    >
      <div className="demo-placeholder-top">
        <span className="demo-status">
          <i /> Product demo
        </span>
        <span>Final video coming soon</span>
      </div>
      <div className="demo-screen">
        <button
          className="demo-play"
          type="button"
          aria-label="Product demo video will be available soon"
          disabled
        >
          ▶
        </button>
        <div className="demo-sequence" aria-hidden="true">
          <span>Device signal</span>
          <i>→</i>
          <span>Agent reasoning</span>
          <i>→</i>
          <span>Decision</span>
          <i>→</i>
          <span>Payment authorization</span>
          <i>→</i>
          <span>Evidence</span>
        </div>
      </div>
    </div>
  );
}

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
      <main>
        <section className="hero home-hero">
          <div
            className="hero-image"
            aria-hidden="true"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${HERO_SCENES[scene]})` }}
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="gradient" style={{ marginTop: 14 }}>
                Give your devices the ability to think, act, and pay.
              </h1>
              <p className="lead">
                Paisa.ai gives smart devices a complete autonomous commerce layer: an AI agent that
                reasons and acts, combined with payment infrastructure that safely executes
                transactions within defined authority.
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
            <div className="integration-pillars">
              {PILLARS.map(([number, title, copy]) => (
                <article className="glass integration-pillar" key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
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
            <div className="think-grid">
              <article className="glass think-card">
                <span>01</span>
                <h3>Think</h3>
                <p>The Paisa.ai agent interprets device state, context, and goals.</p>
              </article>
              <article className="glass think-card">
                <span>02</span>
                <h3>Act</h3>
                <p>The agent determines the appropriate action and creates a purchase intent.</p>
              </article>
              <article className="glass think-card">
                <span>03</span>
                <h3>Pay</h3>
                <p>
                  Paisa.ai validates that intent against financial authority and executes the
                  transaction.
                </p>
              </article>
            </div>
          </div>
        </Reveal>

        <Reveal className="section household-section">
          <div className="container">
            <div className="section-head">
              <div className="copy">
                <div className="eyebrow">A concrete device workflow</div>
                <h2>Your device sees a need. Paisa.ai takes care of the rest.</h2>
                <p className="lead">
                  Milk running low → the Paisa.ai agent reasons about replenishment → validates the
                  mandate → authorizes a ₹72 purchase → records the transaction.
                </p>
              </div>
            </div>
            <HouseholdDemo />
          </div>
        </Reveal>

        <Reveal className="section demo-section">
          <div className="container demo-layout">
            <div>
              <div className="eyebrow">Product demonstration</div>
              <h2>See Paisa.ai in action.</h2>
              <p className="lead">
                From a device signal to an autonomous purchase, see the complete agent-to-payment
                flow.
              </p>
            </div>
            <DemoPlaceholder />
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
            <div className="mental-model-grid">
              <article className="glass assemble-card">
                <div className="eyebrow">Without Paisa.ai</div>
                <h3>Assemble the stack yourself.</h3>
                <div className="assemble-list">
                  {[
                    "Model",
                    "Agent framework",
                    "Tooling",
                    "Payment integration",
                    "Authorization",
                    "Transaction handling",
                    "Audit infrastructure",
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
              <article className="glass paisa-stack">
                <div className="eyebrow">With Paisa.ai</div>
                <h3>One integration.</h3>
                <div className="stack-flow">
                  <b>One integration</b>
                  <i>↓</i>
                  <b>Paisa.ai Agent</b>
                  <i>↓</i>
                  <b>Paisa.ai Payment Infrastructure</b>
                  <i>↓</i>
                  <strong>Autonomous Commerce</strong>
                </div>
              </article>
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
            <div className="use-case-grid">
              {USE_CASES.map(([icon, title, copy]) => (
                <article className="glass use-case" key={title}>
                  <div className="machine">{icon}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section trust-preview-section">
          <div className="container glass trust-preview">
            <div>
              <div className="eyebrow">Bounded autonomy</div>
              <h2>Autonomous does not mean unrestricted.</h2>
              <p className="lead">
                Paisa.ai separates agent decision-making from financial authority, so devices can
                act autonomously within clearly defined mandates.
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
