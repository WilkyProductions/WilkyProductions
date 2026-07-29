import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ZoomableShot from "./ZoomableShot";
import "../portfolio.css";

export const metadata: Metadata = {
  title: "Johnny Wilkinson | Portfolio",
  description:
    "Portfolio of Johnny Wilkinson — Marketing Manager specializing in digital growth, ecommerce, and business systems.",
};

export default function PortfolioPage() {
  return (
    <div className="portfolio">
      <header className="top">
        <div className="bar">
          <Link className="brandLink" href="/">
            <Image
              src="/brand/wilky-logo.png"
              alt="Wilky Productions"
              width={280}
              height={56}
              style={{ height: 56, width: "auto" }}
            />
            <span>wilkyproductions.com</span>
          </Link>
          <span className="tagPill">Portfolio</span>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Portfolio</div>
          <h1>Johnny Wilkinson</h1>
          <div className="role">
            Marketing Manager — Digital Growth, Ecommerce &amp; Business
            Systems
          </div>
          <p className="lede">
            9+ years helping grow a manufacturing company into a stronger
            ecommerce brand — through digital marketing, creative leadership,
            website design, and process improvement. Below: recent website
            work, business tools I&apos;ve built, and how AI shows up in my
            everyday workflow.
          </p>
          <div className="btnRow">
            <a className="btn btnPrimary" href="mailto:jwilky108@gmail.com">
              Get in touch
            </a>
            <a className="btn btnOutline" href="#work">
              View work
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="impact">
        <div className="wrap">
          <div className="sectionHead">
            <div className="eyebrow">Impact</div>
            <h2>Growth at CageWRX</h2>
            <p>
              Nine years across graphic design, marketing, ecommerce, and
              operations — here&apos;s the trajectory in numbers.
            </p>
          </div>

          <div className="statGrid">
            <div className="statCard">
              <div className="num">$1.2M → $2.5M</div>
              <div className="label">
                Approx. annual online revenue growth over 9+ years
              </div>
            </div>
            <div className="statCard">
              <div className="num">+35%</div>
              <div className="label">
                Online revenue lift from stronger branding, SEO &amp; UX
              </div>
            </div>
            <div className="statCard">
              <div className="num">2</div>
              <div className="label">
                AI-assisted business applications designed &amp; deployed
              </div>
            </div>
            <div className="statCard">
              <div className="num">2.4M+</div>
              <div className="label">
                Organic views on a produced Instagram Reel
              </div>
            </div>
          </div>

          <div className="chartGrid">
            <div className="chartCard">
              <h3>Annual Online Revenue</h3>
              <div className="sub">Approximate — 2018 baseline vs. today</div>
              <div className="chartWrap">
                <div
                  className="lineChart"
                  role="img"
                  aria-label="Line chart showing approximate annual online revenue climbing from $1.2M in 2018 to $2.5M today, trending upward"
                >
                  <div className="barChartGrid" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <svg
                    className="lineChartSvg"
                    viewBox="0 0 500 220"
                    preserveAspectRatio="none"
                    style={{ overflow: "visible" }}
                  >
                    <path
                      d="M50,175 C150,163 230,128 300,98 C355,74 383,35 398,6"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      className="lineChartArrowhead"
                      d="M388,6 L400,-18 L412,6 Z"
                      fill="var(--accent)"
                    />
                    <circle cx="50" cy="175" r="5" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <circle cx="300" cy="98" r="5" fill="var(--accent)" />
                    <text x="50" y="150" className="lineChartValue" textAnchor="start">
                      $1.2M
                    </text>
                    <text
                      x="300"
                      y="75"
                      className="lineChartValue lineChartValueAccent"
                      textAnchor="middle"
                    >
                      $2.5M
                    </text>
                  </svg>
                  <div className="lineChartLabels">
                    <span className="barChartLabel">2018 Baseline</span>
                    <span className="barChartLabel">Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chartCard">
              <h3>Revenue Lift From Site &amp; Brand Work</h3>
              <div className="sub">
                Branding, website design, SEO &amp; product page improvements
              </div>
              <div className="chartWrap">
                <div
                  className="barChart barChartHorizontal"
                  role="img"
                  aria-label="Revenue lift from site and brand work: plus 35 percent"
                >
                  <div className="barChartRow">
                    <div className="barChartTrack">
                      <div
                        className="barChartGrid barChartGridHorizontal"
                        aria-hidden="true"
                      >
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div
                        className="barChartBarWide barChartBarAccent"
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div className="barChartValue barChartValueAccent barChartValueInline">
                      +35%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionAlt section" id="work">
        <div className="wrap">
          <div className="sectionHead">
            <div className="eyebrow">Recent Work</div>
            <h2>Websites</h2>
            <p>
              A mix of ecommerce, brand, and small-business sites — designed,
              built, and maintained end to end.
            </p>
          </div>

          <div className="projectGrid">
            <div className="projectCard">
              <div className="projectThumb">
                <Image
                  src="/portfolio/cagewrx.jpg"
                  alt="CageWRX ecommerce site"
                  width={1600}
                  height={886}
                />
              </div>
              <div className="projectBody">
                <div className="role">Ecommerce · Shopify</div>
                <h3>CageWRX</h3>
                <p>
                  Full ecommerce storefront for a UTV/off-road parts
                  manufacturer. Owned the site design, SEO, and product page
                  strategy behind the revenue growth above.
                </p>
                <div className="tagRow">
                  <span className="tag">Shopify</span>
                  <span className="tag">Liquid</span>
                  <span className="tag">SEO</span>
                  <span className="tag">CRO</span>
                </div>
                <a
                  className="projectLink"
                  href="https://cagewrx.com"
                  target="_blank"
                  rel="noopener"
                >
                  View site →
                </a>
              </div>
            </div>

            <div className="projectCard">
              <div className="projectThumb">
                <Image
                  src="/mockups/m81-desktop.jpg"
                  alt="M81 Designs website"
                  width={1600}
                  height={829}
                />
              </div>
              <div className="projectBody">
                <div className="role">Website Design</div>
                <h3>M81 Designs</h3>
                <p>
                  Custom site design and build for an off-road fabrication
                  shop — built to showcase their work with a bold,
                  motorsports-driven look.
                </p>
                <div className="tagRow">
                  <span className="tag">Web Design</span>
                  <span className="tag">Brand</span>
                  <span className="tag">Mobile-first</span>
                </div>
                <a
                  className="projectLink"
                  href="https://m81designs.com"
                  target="_blank"
                  rel="noopener"
                >
                  View site →
                </a>
              </div>
            </div>

            <div className="projectCard">
              <div className="projectThumb">
                <Image
                  src="/portfolio/cook-coatings.jpg"
                  alt="Cook Coatings website"
                  width={1600}
                  height={877}
                />
              </div>
              <div className="projectBody">
                <div className="role">Website Design</div>
                <h3>Cook Coatings</h3>
                <p>
                  Site redesign for a commercial roof coatings company
                  established in 1983 — clean, credible, and built to convert
                  project inquiries.
                </p>
                <div className="tagRow">
                  <span className="tag">Web Design</span>
                  <span className="tag">Industrial</span>
                  <span className="tag">Lead Gen</span>
                </div>
                <a
                  className="projectLink"
                  href="https://cookcoatingsinc.com"
                  target="_blank"
                  rel="noopener"
                >
                  View site →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ai">
        <div className="wrap">
          <div className="sectionHead">
            <div className="eyebrow">AI In My Workflow</div>
            <h2>Business Systems I&apos;ve Built</h2>
            <p>
              Using AI as a working partner to design and ship internal tools
              — replacing paid software and cutting manual work.
            </p>
          </div>

          <div className="aiGrid">
            <div className="aiCard">
              <div className="aiShots">
                <ZoomableShot
                  src="/portfolio/CagewrxProductOptions-app.png"
                  alt="Shopify Product Options Platform, screen 1"
                  width={1400}
                  height={1430}
                />
                <ZoomableShot
                  src="/portfolio/CagewrxProductOptions-app-2.png"
                  alt="Shopify Product Options Platform, screen 2"
                  width={1400}
                  height={1446}
                />
              </div>
              <div className="aiIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 9L12 3L21 9V21H3V9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21V13H15V21"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <span className="badge">AI-Assisted Build</span>
              <h3>Shopify Product Options Platform</h3>
              <p>
                Designed and deployed a custom product-options system that
                replaced a paid third-party Shopify app.
              </p>
              <ul>
                <li>
                  Faster page load and cleaner checkout flow than the app it
                  replaced
                </li>
                <li>Production-ready, fully owned — no recurring app fee</li>
                <li>
                  Built with AI as a coding partner to move from concept to
                  launch quickly
                </li>
              </ul>
            </div>

            <div className="aiCard">
              <div className="aiShots">
                <ZoomableShot
                  src="/portfolio/CagewrxOPS-app.png"
                  alt="Order Management Platform, screen 1"
                  width={1400}
                  height={1441}
                />
                <ZoomableShot
                  src="/portfolio/CagewrxOPS-app-2.png"
                  alt="Order Management Platform, screen 2"
                  width={1400}
                  height={1441}
                />
              </div>
              <div className="aiIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6H20M4 12H20M4 18H14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="badge">AI-Assisted Build</span>
              <h3>Order Management Platform</h3>
              <p>
                Built an internal tool to manage the full order lifecycle —
                from open orders through fulfillment.
              </p>
              <ul>
                <li>
                  Tracks open orders, backorders, and fulfillment status in
                  one place
                </li>
                <li>Built-in task management for employee productivity</li>
                <li>
                  Reduced manual tracking across a lean, three-person ops team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionAlt section">
        <div className="wrap">
          <div className="sectionHead">
            <div className="eyebrow">Skill Set</div>
            <h2>Areas of Expertise</h2>
          </div>
          <div className="skillsGrid">
            <div className="skillCard">
              <h3>Growth</h3>
              <div className="pillList">
                <span className="pill">SEO</span>
                <span className="pill">Google Ads</span>
                <span className="pill">Analytics</span>
                <span className="pill">Email</span>
              </div>
            </div>
            <div className="skillCard">
              <h3>Ecommerce</h3>
              <div className="pillList">
                <span className="pill">Shopify</span>
                <span className="pill">Liquid</span>
                <span className="pill">UX</span>
                <span className="pill">CRO</span>
              </div>
            </div>
            <div className="skillCard">
              <h3>Creative</h3>
              <div className="pillList">
                <span className="pill">Adobe Suite</span>
                <span className="pill">Photography</span>
                <span className="pill">Video</span>
                <span className="pill">Copywriting</span>
              </div>
            </div>
            <div className="skillCard">
              <h3>Operations</h3>
              <div className="pillList">
                <span className="pill">AI Solutions</span>
                <span className="pill">Leadership</span>
                <span className="pill">Process Improvement</span>
                <span className="pill">HTML/CSS/JS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footerRow">
            <div className="footerLeft">
              <h3>Johnny Wilkinson</h3>
              <p>Menifee, CA · (909) 659-4231 · jwilky108@gmail.com</p>
            </div>
            <div className="footerRight">
              <div className="footerCol">
                <h4>Contact</h4>
                <a href="mailto:jwilky108@gmail.com">jwilky108@gmail.com</a>
                <a href="tel:+19096594231">(909) 659-4231</a>
              </div>
              <div className="footerCol">
                <h4>Elsewhere</h4>
                <Link href="/">Wilky Productions</Link>
                <a href="https://cagewrx.com" target="_blank" rel="noopener">
                  CageWRX
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            © 2026 Johnny Wilkinson. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
