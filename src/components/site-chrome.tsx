import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { GOOGLE_FORM_URL } from "@/lib/site-config";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/trust", label: "Trust & architecture" },
  { to: "/team", label: "Team" },
] as const;

export function DemoCta({ className = "btn btn-primary" }: { className?: string }) {
  return (
    <a className={className} href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
      Request Demo
    </a>
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
          <img className="logo" src={`${import.meta.env.BASE_URL}paisa-logo.png`} alt="Paisa.ai" />
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
          <DemoCta className="nav-demo" />
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
        <DemoCta className="mobile-demo" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">
            <img className="logo" src={`${import.meta.env.BASE_URL}paisa-logo.png`} alt="" /> <span>Paisa.ai</span>
          </div>
          <div className="footer-note" style={{ marginTop: 8 }}>
            The agentic commerce layer for smart devices.
          </div>
        </div>
        <div className="footer-note">© 2026 Paisa.ai</div>
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
