import { useEffect, useState } from "react";

type Actor = "u" | "a" | "c" | "m" | "r";

type FlowEvent = {
  n: string;
  title: string;
  sub: string;
  actor: Actor;
  path: string;
  money: string;
  explain?: string;
};

const EVENTS: FlowEvent[] = [
  {
    n: "1",
    title: "User grants mandate",
    sub: "UPI PIN · human authentication",
    actor: "u",
    path: "User → Agent",
    money: "₹0 at risk",
    explain:
      "The UPI PIN is the human authentication step. The mandate sets the authority, limits and validity the later payment must stay within.",
  },
  { n: "2", title: "Card issued, bound to mandate", sub: "limits + expiry live in credential", actor: "a", path: "Agent → Virtual card", money: "₹0 at risk" },
  { n: "3", title: "Agent builds the cart", sub: "local model · no money involved yet", actor: "a", path: "Agent → Agent", money: "₹0 at risk" },
  { n: "4", title: "Agent signs purchase intent", sub: "₹1,240 · 9 items · merchant named", actor: "a", path: "Agent → Agent", money: "₹0 at risk" },
  {
    n: "5",
    title: "Draws ₹1,240 against mandate",
    sub: "funding instruction · exact basket total",
    actor: "u",
    path: "Agent → User / UPI",
    money: "₹0 at risk",
    explain: "The funding instruction consumes the mandate for the exact basket total; money has not yet reached the merchant.",
  },
  { n: "6", title: "Funds load onto the card", sub: "UPI rail · mandate consumed here", actor: "c", path: "User → Virtual card", money: "₹1,240 at risk" },
  { n: "7", title: "Card pays the merchant", sub: "card rail · agentic token + intent", actor: "c", path: "Virtual card → Merchant", money: "₹1,240 at risk" },
  { n: "8", title: "Order confirmed", sub: "merchant acknowledges payment", actor: "m", path: "Merchant → Agent", money: "₹0 at risk" },
  { n: "9", title: "Anything unspent sweeps back", sub: "return / close exposure window", actor: "r", path: "Virtual card → User", money: "₹0 at risk" },
];

const COLOR: Record<Actor, string> = {
  u: "var(--blue)",
  a: "var(--purple)",
  c: "var(--red)",
  m: "var(--teal)",
  r: "var(--green)",
};

const STAGES = [
  ["01", "ORDER SIGNED", "basket + signature"],
  ["02", "CHECKING", "order vs authority"],
  ["03", "FUNDING", "UPI funding"],
  ["04", "FUNDED", "money on card"],
  ["05", "PAYING", "card rail"],
  ["06", "PAID", "merchant paid"],
  ["07", "SETTLED", "receipt issued"],
] as const;

const BRANCHES = [
  ["REFUSED", "check fails · nothing moved"],
  ["REFUNDING", "card leg declined"],
  ["RECONCILING", "outcome unknown"],
  ["REVOKED", "kill token + sweep"],
] as const;

function geometry(idx: number) {
  const from = idx === 0 ? 0 : idx >= 5 ? 2 : 1;
  const to = idx === 0 ? 1 : idx === 1 ? 2 : idx === 7 ? 1 : idx >= 5 ? 3 : 1;
  const left = Math.min(from, to) * 25 + 6;
  const width = Math.abs(to - from) * 25 - 2;
  return { from, to, left, width };
}

export function LifecycleFlow() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [tab, setTab] = useState<"sequence" | "life">("sequence");
  const [stage, setStage] = useState(3);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      if (tab === "life") setStage((s) => (s + 1) % STAGES.length);
      else setStep((s) => (s + 1) % EVENTS.length);
    }, 1200);
    return () => clearInterval(t);
  }, [playing, tab]);

  const e = EVENTS[step]!;
  const go = (i: number) => setStep((i + EVENTS.length) % EVENTS.length);

  return (
    <div className="glass flow-card">
      <div className="flow-top">
        <div>
          <div className="eyebrow">Interactive payment lifecycle</div>
          <h2>See exactly where authority and money move.</h2>
          <p>Authority is established once, the order is checked before funds move, and both rails are recorded.</p>
        </div>
        <div className="flow-stats">
          <span>9 events</span>
          <span>4 actors</span>
          <span>2 rails</span>
          <span>1 exposure window</span>
        </div>
      </div>

      <div className="toolbar">
        <div className="tabs">
          <button className={`tab${tab === "sequence" ? " active" : ""}`} onClick={() => setTab("sequence")}>
            Sequence
          </button>
          <button className={`tab${tab === "life" ? " active" : ""}`} onClick={() => setTab("life")}>
            Lifecycle
          </button>
        </div>
        <div className="controls">
          <button className="control" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
            {playing ? "❚❚ Pause" : "▶ Play"}
          </button>
          <button className="control" onClick={() => go(step - 1)}>←</button>
          <button className="control" onClick={() => go(step + 1)}>→</button>
          <button className="control" onClick={() => go(0)}>Reset</button>
          <button className="control" onClick={() => setTab("life")}>⚠ Failure paths</button>
        </div>
      </div>

      <div className="progress-line">
        <span style={{ width: `${((step + 1) / EVENTS.length) * 100}%` }} />
      </div>

      {tab === "sequence" ? (
        <div className="sequence">
          <div className="lane-grid">
            <div className="lane user">User</div>
            <div className="lane agent">Agent</div>
            <div className="lane card">Virtual card</div>
            <div className="lane merchant">Merchant</div>
          </div>
          <div className="flow-canvas">
            <div className="guides">
              <span /><span /><span /><span />
            </div>
            <div className="exposure">
              <div className="exposure-label">Money with agent</div>
            </div>
            <div>
              {EVENTS.map((ev, idx) => {
                const g = geometry(idx);
                return (
                  <div
                    key={ev.n}
                    className={`event ${idx === step ? "active" : "dim"}`}
                    style={{ top: idx * 48 + 6, ["--c" as string]: COLOR[ev.actor] }}
                    onClick={() => go(idx)}
                  >
                    <span className="num">{ev.n}</span>
                    <span className="line" style={{ left: `${g.left}%`, width: `${g.width}%` }} />
                    <span
                      className={`arrow ${g.to >= g.from ? "right" : "left"}`}
                      style={g.to >= g.from ? { left: `${g.left + g.width}%` } : { left: `${g.left - 1}%` }}
                    />
                    <span className="label">{ev.title}</span>
                    <span className="sub">{ev.sub}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="life">
          <div className="life-track">
            <div className="life-line" />
            {STAGES.map(([num, name, note], i) => (
              <button key={name} className={`life-node${stage === i ? " active" : ""}`} onClick={() => setStage(i)}>
                <b>{num}</b>
                <span>{name}</span>
                <small>{note}</small>
              </button>
            ))}
          </div>
          <div className="branch-row">
            {BRANCHES.map(([name, note]) => (
              <button key={name} className="branch">
                <b>{name}</b>
                <span>{note}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {tab === "sequence" && (
        <>
          <div className="flow-info">
            <div className="info-box">
              <div className="k">STEP {step + 1} / 9</div>
              <h3>{e.title}</h3>
              <p>{e.explain ?? "This stage is executed by the payment infrastructure within the authority already established."}</p>
            </div>
            <div className="info-box">
              <div className="k">MONEY LOCATION</div>
              <div className="money">{e.money}</div>
              <div className="path">{e.path} · {e.sub}</div>
            </div>
          </div>
          <div className="legend">
            <span><i className="u-line" />UPI funding leg</span>
            <span><i className="c-line" />Card payment leg</span>
            <span><i className="r-line" />Return / sweep</span>
          </div>
        </>
      )}
    </div>
  );
}
