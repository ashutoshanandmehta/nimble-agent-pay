import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Paisa.ai — Agentic Commerce for Smart Devices" },
      {
        name: "description",
        content:
          "One integration gives smart devices an autonomous agent and payment infrastructure to reason, act, and safely transact within defined authority.",
      },
      { name: "author", content: "Paisa.ai" },
      { property: "og:title", content: "Paisa.ai — Agentic Commerce for Smart Devices" },
      {
        property: "og:description",
        content: "Agent + payment infrastructure for smart devices, through one Paisa.ai integration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Paisa.ai" },
      {
        property: "og:image",
        content: "https://ashutoshanandmehta.github.io/nimble-agent-pay/images/connected-kitchen.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://ashutoshanandmehta.github.io/nimble-agent-pay/images/connected-kitchen.jpg",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", type: "image/png", href: `${import.meta.env.BASE_URL}favicon.png` },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AnimatedDotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    type Particle = { x: number; y: number; vx: number; vy: number; radius: number; color: number };
    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    const cursor = { x: -1000, y: -1000 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reset = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const screensTall = Math.max(1, height / window.innerHeight);
      const count = Math.round((width < 700 ? 80 : 160) * screensTall);
      particles = Array.from({ length: count }, (_, color) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(Math.random() * Math.PI * 2) * (0.55 + Math.random() * 0.65),
        vy: Math.sin(Math.random() * Math.PI * 2) * (0.55 + Math.random() * 0.65),
        radius: 1.6 + Math.random() * 2.6,
        color: color % 3,
      }));
    };

    const repel = (dot: Particle) => {
      const dx = dot.x - cursor.x;
      const dy = dot.y - cursor.y;
      const distance = Math.hypot(dx, dy) || 1;
      const range = 150;
      if (distance < range) {
        const force = (1 - distance / range) * 0.24;
        dot.vx += (dx / distance) * force;
        dot.vy += (dy / distance) * force;
      }
    };

    const collide = (a: Particle, b: Particle) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.hypot(dx, dy) || 0.01;
      const minimum = a.radius + b.radius;
      if (distance >= minimum) return;
      const nx = dx / distance;
      const ny = dy / distance;
      const overlap = (minimum - distance) / 2;
      a.x -= nx * overlap;
      a.y -= ny * overlap;
      b.x += nx * overlap;
      b.y += ny * overlap;
      const closingSpeed = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
      if (closingSpeed > 0) {
        a.vx -= closingSpeed * nx;
        a.vy -= closingSpeed * ny;
        b.vx += closingSpeed * nx;
        b.vy += closingSpeed * ny;
      }
    };

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const colors = isDark
        ? ["rgba(141,169,255,.34)", "rgba(112,222,209,.31)", "rgba(192,167,255,.32)"]
        : ["rgba(62,91,190,.32)", "rgba(48,174,151,.28)", "rgba(137,86,193,.27)"];
      context.clearRect(0, 0, width, height);
      for (const dot of particles) {
        repel(dot);
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x <= dot.radius || dot.x >= width - dot.radius) dot.vx *= -1;
        if (dot.y <= dot.radius || dot.y >= height - dot.radius) dot.vy *= -1;
        dot.x = Math.max(dot.radius, Math.min(width - dot.radius, dot.x));
        dot.y = Math.max(dot.radius, Math.min(height - dot.radius, dot.y));
        const speed = Math.hypot(dot.vx, dot.vy);
        if (speed > 1.75) {
          dot.vx = (dot.vx / speed) * 1.75;
          dot.vy = (dot.vy / speed) * 1.75;
        }
      }
      const buckets = new Map<string, Particle[]>();
      const cellSize = 28;
      for (const dot of particles) {
        const cellX = Math.floor(dot.x / cellSize);
        const cellY = Math.floor(dot.y / cellSize);
        for (let x = cellX - 1; x <= cellX + 1; x += 1) {
          for (let y = cellY - 1; y <= cellY + 1; y += 1) {
            for (const neighbour of buckets.get(`${x}:${y}`) ?? []) collide(dot, neighbour);
          }
        }
        const key = `${cellX}:${cellY}`;
        const bucket = buckets.get(key) ?? [];
        bucket.push(dot);
        buckets.set(key, bucket);
      }
      for (const dot of particles) {
        context.beginPath();
        context.fillStyle = colors[dot.color]!;
        context.shadowColor = colors[dot.color]!;
        context.shadowBlur = 14;
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    reset();
    draw();
    window.addEventListener("resize", reset);
    window.addEventListener("load", reset);
    const moveCursor = (event: PointerEvent) => {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
    };
    const clearCursor = () => {
      cursor.x = -1000;
      cursor.y = -1000;
    };
    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("blur", clearCursor);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", reset);
      window.removeEventListener("load", reset);
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("blur", clearCursor);
    };
  }, []);

  return (
    <canvas className="ambient-dots" ref={canvasRef} aria-hidden="true" />
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="site-shell">
        <AnimatedDotField />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
