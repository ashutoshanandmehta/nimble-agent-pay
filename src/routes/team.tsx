import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Paisa.ai" },
      {
        name: "description",
        content:
          "The founders and technical advisors behind Paisa.ai, building the autonomous commerce layer for smart devices.",
      },
      { property: "og:title", content: "Team — Paisa.ai" },
      { property: "og:description", content: "Founders and advisors building autonomous commerce for smart devices." },
    ],
  }),
  component: Team,
});

const PEOPLE = [
  {
    img: "https://github.com/ashutoshanandmehta.png",
    kicker: "Co-Founder",
    name: "Ashutosh Anand",
    role: "Dual Degree student, IIT Kanpur",
    links: [
      ["GitHub ↗", "https://github.com/ashutoshanandmehta"],
      ["LinkedIn ↗", "https://www.linkedin.com/in/ashutoshanandmehta/"],
    ],
  },
  {
    img: "https://github.com/Devanshv17.png",
    kicker: "Co-Founder",
    name: "Devansh Verma",
    role: "Founding Engineer, Genrise.ai · IITK Class of 2026",
    links: [
      ["GitHub ↗", "https://github.com/Devanshv17"],
      ["LinkedIn ↗", "https://www.linkedin.com/in/devanshv17/"],
    ],
  },
  {
    img: "https://pbs.twimg.com/profile_images/1434519582560063501/mZg9ppx5.jpg",
    kicker: "Advisor",
    name: "Prof. Vimal Kumar",
    role: "Professor, Department of Economic Sciences, IIT Kanpur",
    links: [["Faculty profile ↗", "https://iitk.ac.in/vimal-kumar"]],
  },
  {
    img: "https://iitk.ac.in/data/media/faculty/adithya-vadapalli.jpg",
    kicker: "Advisor",
    name: "Prof. Adithya Vadapalli",
    role: "Assistant Professor, Computer Science and Engineering, IIT Kanpur",
    links: [["Faculty profile ↗", "https://iitk.ac.in/adithya-vadapalli"]],
  },
] as const;

function Team() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" style={{ minHeight: "auto" }}>
          <div className="container">
            <div>
              <h1 className="gradient" style={{ fontSize: "clamp(3.2rem,5.25vw,6rem)" }}>
                We are building Paisa.ai so smart devices can become even smarter.
              </h1>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Founders & advisors.</h2>
            <div className="people" style={{ marginTop: 24 }}>
              {PEOPLE.map((p) => (
                <Reveal as="article" key={p.name} className="glass person">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const ph = el.nextElementSibling as HTMLElement | null;
                      if (ph?.dataset['avatarFallback']) ph.style.display = "grid";
                    }}
                  />
                  <div
                    data-avatar-fallback="1"
                    aria-hidden="true"
                    className="avatar-fallback"
                    style={{ display: "none" }}
                  >
                    {p.name
                      .replace(/^Prof\.\s*/, "")
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="eyebrow">{p.kicker}</div>
                    <h3>{p.name}</h3>
                    <div className="role">{p.role}</div>
                    <div className="small-actions">
                      {p.links.map(([label, href]) => (
                        <a className="small-link" key={href} href={href} target="_blank" rel="noopener">
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
