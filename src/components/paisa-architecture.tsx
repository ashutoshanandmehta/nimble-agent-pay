export function PaisaArchitectureDiagram({ className = "" }: { className?: string }) {
  return (
    <div
      className={`architecture-diagram glass${className ? ` ${className}` : ""}`}
      aria-label="Smart device integrates with Paisa.ai, which provides an AI agent and payment infrastructure to transact with a merchant"
    >
      <div className="architecture-node device-node">
        <span>Smart device</span>
        <small>Device signal</small>
      </div>
      <div className="architecture-connector">
        <span>One integration</span>
        <i>↓</i>
      </div>
      <div className="paisa-core">
        <div className="paisa-brand">Paisa.ai</div>
        <div className="core-module">
          <b>AI agent</b>
          <span>Understand → Reason → Decide → Act</span>
        </div>
        <div className="core-arrow">↓</div>
        <div className="core-module payment-module">
          <b>Payment infrastructure</b>
          <span>Authorize → Pay → Verify</span>
        </div>
      </div>
      <div className="architecture-connector">
        <i>↓</i>
      </div>
      <div className="architecture-node merchant-node">
        <span>Merchant</span>
        <small>Transaction completed</small>
      </div>
    </div>
  );
}
