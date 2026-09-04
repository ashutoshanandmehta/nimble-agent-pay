import { Link } from "@tanstack/react-router";

export function HouseholdDemo() {
  return (
    <div className="home-demo">
      <div className="glass fridge">
        <div>
          <svg className="fridge-illustration" viewBox="0 0 220 300" role="img" aria-label="Smart refrigerator online">
            <defs>
              <linearGradient id="home-fridge-body" x1="20" y1="0" x2="200" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#dce7ee" />
              </linearGradient>
              <linearGradient id="home-fridge-door" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#fbfeff" />
                <stop offset="1" stopColor="#e9f0f5" />
              </linearGradient>
              <filter id="home-fridge-shadow" x="-30%" y="-20%" width="160%" height="160%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#4b6176" floodOpacity=".22" />
              </filter>
            </defs>
            <ellipse cx="110" cy="280" rx="72" ry="11" fill="#728aa0" opacity=".16" />
            <g filter="url(#home-fridge-shadow)">
              <rect x="42" y="18" width="136" height="252" rx="20" fill="url(#home-fridge-body)" stroke="#c9d6df" strokeWidth="2" />
              <rect x="50" y="27" width="120" height="81" rx="13" fill="url(#home-fridge-door)" />
              <rect x="50" y="114" width="120" height="147" rx="13" fill="url(#home-fridge-door)" />
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
          <div className="fridge-status">SMART REFRIGERATOR · ONLINE</div>
        </div>
      </div>
      <div className="glass fridge-copy">
        <div className="eyebrow">Example household workflow</div>
        <h2>“We're running low on milk.”</h2>
        <p className="lead">The fridge detects the shortage, the agent selects an authorised purchase, Paisa.ai checks the authority and pays.</p>
        <div className="glass purchase-card">
          <div className="purchase-label">AUTHORISED PURCHASE</div>
          <div className="purchase-rows">
            <div>Category <strong>Groceries ✓</strong></div>
            <div>Per purchase <strong>₹72 / ₹2,000 ✓</strong></div>
            <div>Mandate <strong>Valid ✓</strong></div>
          </div>
        </div>
        <div className="actions">
          <Link className="btn btn-primary" to="/how-it-works">Trace the payment →</Link>
        </div>
      </div>
    </div>
  );
}
