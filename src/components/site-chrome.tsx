import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/use-cases", label: "Use cases" },
  { to: "/trust", label: "Trust & architecture" },
  { to: "/team", label: "Team" },
] as const;

function PaisaMark({ decorative = false }: { decorative?: boolean }) {
  return (
    <svg className="logo" viewBox="0 0 40 40" aria-hidden={decorative || undefined} role={decorative ? undefined : "img"}>
      {!decorative && <title>Paisa.ai</title>}
      <defs>
        <linearGradient id="paisa-mark" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3159c8" />
          <stop offset="1" stopColor="#1a9a90" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="34" height="34" rx="11" fill="url(#paisa-mark)" />
      <path d="M12 13.5h10a5.5 5.5 0 0 1 0 11h-6.5v3H12v-14Zm3.5 3v5h6.2a2.5 2.5 0 0 0 0-5h-6.2Z" fill="white" />
      <circle cx="28.5" cy="28.5" r="3" fill="#a9f2db" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (localStorage.getItem("paisa-theme") === "dark") root.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    localStorage.setItem("paisa-theme", root.classList.contains("dark") ? "dark" : "light");
  };

  return (
    <header className="topbar">
      <div className="container glass nav">
        <Link className="brand" to="/">
          <PaisaMark />
          <span>Paisa.ai</span>
        </Link>
        <nav className="navlinks">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "active" }} activeOptions={{ exact: item.to === "/" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Toggle theme" onClick={toggleTheme}>
            ◐
          </button>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            ☰
          </button>
        </div>
      </div>
      <div className={`container glass mobile-menu${open ? " show" : ""}`}>
        {NAV.map((item) => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export function SiteFooter({ note, extra }: { note: string; extra?: ReactNode }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">
            <PaisaMark decorative /> <span>Paisa.ai</span>
          </div>
          <div className="footer-note" style={{ marginTop: 8 }}>
            {note}
          </div>
        </div>
        {extra ? <div className="footer-note">{extra}</div> : null}
      </div>
    </footer>
  );
}

export function Reveal({
  children,
  className = "",
  as: Tag = "section",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "article" | "div";
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal${visible ? " visible" : ""}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
