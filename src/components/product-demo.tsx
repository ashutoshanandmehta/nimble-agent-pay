import { useEffect, useState } from "react";

const STEPS = [
  {
    label: "Device signal",
    title: "Replenishment required",
    detail: "Milk inventory: 12% remaining",
  },
  {
    label: "Paisa.ai Agent",
    title: "Evaluating household inventory",
    detail: "Milk requires replenishment",
  },
  { label: "Agent action", title: "Purchase 1 unit", detail: "Creating a bounded purchase intent" },
  {
    label: "Authorization",
    title: "Checking financial authority",
    detail: "Mandate, category, and limit validation",
  },
  {
    label: "Payment",
    title: "₹72 payment executing",
    detail: "Approved transaction sent to merchant",
  },
  { label: "Merchant", title: "Purchase completed", detail: "Local Grocery confirmed the order" },
  { label: "Evidence", title: "Transaction recorded", detail: "Verifiable payment record created" },
] as const;

export function ProductDemo() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setStep((current) => (current + 1) % STEPS.length),
      1750,
    );
    return () => window.clearInterval(timer);
  }, [playing]);

  const current = STEPS[step]!;
  const reached = (index: number) => index <= step;

  return (
    <div className="product-demo glass" aria-label="Animated Paisa.ai product simulation">
      <div className="product-demo-top">
        <span className="demo-status">
          <i /> Product simulation
        </span>
        <div className="product-demo-controls">
          <span aria-live="polite">{current.label}</span>
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-pressed={playing}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={() => {
              setStep(0);
              setPlaying(true);
            }}
          >
            Restart
          </button>
        </div>
      </div>

      <div className="product-demo-flow" aria-hidden="true">
        {STEPS.map((item, index) => (
          <span
            key={item.label}
            className={index === step ? "active" : reached(index) ? "complete" : ""}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <div className="product-demo-stage">
        <div className={`demo-device-panel${step === 0 ? " active" : ""}`}>
          <div className="demo-panel-label">Smart refrigerator</div>
          <div className="demo-fridge">
            <i />
            <b>12%</b>
            <span>Milk remaining</span>
          </div>
          <div className="demo-alert">Replenishment required</div>
        </div>

        <div className={`demo-agent-panel${step >= 1 && step <= 2 ? " active" : ""}`}>
          <div className="demo-panel-label">Paisa.ai Agent</div>
          <b>{step === 1 ? "Evaluating household inventory" : "Best action: purchase 1 unit"}</b>
          <span>{step === 1 ? "Milk requires replenishment" : "Preparing a purchase intent"}</span>
        </div>

        <div className={`demo-intent-panel${step >= 2 ? " active" : ""}`}>
          <div className="demo-panel-label">Purchase intent</div>
          <dl>
            <div>
              <dt>Item</dt>
              <dd>Milk</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>Groceries</dd>
            </div>
            <div>
              <dt>Quantity</dt>
              <dd>1</dd>
            </div>
            <div>
              <dt>Amount</dt>
              <dd>₹72</dd>
            </div>
            <div>
              <dt>Merchant</dt>
              <dd>Local Grocery</dd>
            </div>
          </dl>
        </div>

        <div className={`demo-authority-panel${step >= 3 ? " active" : ""}`}>
          <div className="demo-panel-label">Paisa.ai Authorization</div>
          <dl>
            <div>
              <dt>Mandate</dt>
              <dd>Groceries</dd>
            </div>
            <div>
              <dt>Transaction limit</dt>
              <dd>₹500</dd>
            </div>
            <div>
              <dt>Requested</dt>
              <dd>₹72</dd>
            </div>
          </dl>
          <strong>{step === 3 ? "Checking authority…" : "Authorized ✓"}</strong>
        </div>

        <div className={`demo-payment-panel${step >= 4 ? " active" : ""}`}>
          <div className="demo-panel-label">Payment</div>
          <b>₹72</b>
          <span>{step === 4 ? "Payment executing" : "Payment complete"}</span>
        </div>

        <div className={`demo-evidence-panel${step >= 5 ? " active" : ""}`}>
          <div className="demo-panel-label">Transaction complete</div>
          <b>Milk · ₹72</b>
          <span>Authorized by Paisa.ai mandate</span>
          <strong>{step === 5 ? "Merchant confirmed" : "Evidence recorded ✓"}</strong>
        </div>
      </div>

      <div className="product-demo-caption">
        <b>{current.title}</b>
        <span>{current.detail}</span>
      </div>
    </div>
  );
}
