import { useEffect, useState, type ReactNode } from "react";

type Page = "Home" | "Campus Directory" | "Events" | "Student Services" | "Campus Chatbot";

const iconPaths: Record<string, ReactNode> = {
  home: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v10h13V10M9 20v-6h6v6" />
    </>
  ),
  directory: (
    <>
      <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M2 20h20M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 3v3m14-3v3M3.5 9h17" />
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 13h.01m4 0h.01m4 0h.01M8 17h.01m4 0h.01" />
    </>
  ),
  services: (
    <>
      <path d="M4 19h16M6 16h12M5 9l7-5 7 5M7 9v7m4-7v7m6-7v7" />
    </>
  ),
  chat: (
    <>
      <path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-3.8A3 3 0 0 1 2 14.4V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z" />
      <path d="M7 10h.01M11 10h.01M15 10h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  map: (
    <>
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" />
      <path d="M9 3v15m6-12v15" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z" />
    </>
  ),
  health: (
    <>
      <path d="M12 21S4 16.5 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 16.5 12 21 12 21Z" />
      <path d="M9 12h6m-3-3v6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3m-13 5h18M10 12v2h4v-2" />
    </>
  ),
  food: (
    <>
      <path d="M7 3v8m-3-8v5a3 3 0 0 0 6 0V3M7 11v10M17 3v18m0-18c3 2 4 5 4 8h-4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </>
  ),
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />,
};

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

const navItems: { label: Page; icon: string }[] = [
  { label: "Home", icon: "home" },
  { label: "Campus Directory", icon: "directory" },
  { label: "Events", icon: "calendar" },
  { label: "Student Services", icon: "services" },
  { label: "Campus Chatbot", icon: "chat" },
];

const quickLinks = [
  {
    page: "Campus Directory" as Page,
    icon: "directory",
    title: "Campus Directory",
    text: "Find official offices, phone numbers, and email contacts.",
    tone: "blue",
  },
  {
    page: "Events" as Page,
    icon: "calendar",
    title: "Events",
    text: "Explore events published on the official USIU-Africa website.",
    tone: "orange",
  },
  {
    page: "Student Services" as Page,
    icon: "services",
    title: "Student Services",
    text: "Quick access to official support and student resources.",
    tone: "green",
  },
  {
    page: "Campus Chatbot" as Page,
    icon: "chat",
    title: "Campus Chatbot",
    text: "Get quick answers from this official-information guide.",
    tone: "purple",
  },
];

const events = [
  {
    month: "OCT",
    day: "30",
    date: "2026-10-30",
    title: "Journalism Alumni & Students Networking Session",
    meta: "6:00–8:00 PM · Training Kitchen, USIU-Africa",
    category: "Alumni",
    color: "blue",
    url: "https://www.usiu.ac.ke/events/journalism-alumni-students-networking-session/",
    detail: "Free admission; registration is required.",
  },
  {
    month: "NOV",
    day: "05",
    date: "2026-11-05",
    title: "SPHS Undergraduate Research & Innovation Symposium",
    meta: "9:00 AM–5:00 PM · USIU-Africa Auditorium",
    category: "Research",
    color: "yellow",
    url: "https://www.usiu.ac.ke/events/sphs-undergraduate-research-innovation-symposium/",
    detail: "Free event on healthcare delivery in the digital era.",
  },
  {
    month: "NOV",
    day: "05",
    date: "2026-11-05",
    title: "Mr. & Miss USIU-Africa 2026 Pre-Judging",
    meta: "5:00 PM–12:00 AM · USIU-Africa Auditorium",
    category: "Student Life",
    color: "blue",
    url: "https://www.usiu.ac.ke/events/mr-miss-usiu-africa-2026-pre-judging/",
    detail:
      "The official event metadata lists November 5; the page description says November 6. Verify on the source page.",
  },
  {
    month: "NOV",
    day: "18",
    date: "2026-11-18",
    title: "Rock’In Uni Comes to USIU-Africa",
    meta: "3:00–5:00 PM · USIU-Africa Auditorium",
    category: "Business",
    color: "orange",
    url: "https://www.usiu.ac.ke/events/rockin-uni-comes-to-usiu-africa/",
    detail: "Free session on financial data and real-world decision-making.",
  },
];

const upcomingEvents = events.filter((event) => new Date(`${event.date}T23:59:59`) >= new Date());

function Sidebar({ active, onChange }: { active: Page; onChange: (page: Page) => void }) {
  return (
    <aside className="sidebar">
      <button className="brand" onClick={() => onChange("Home")} aria-label="Go to home">
        <span className="brand-mark">
          <span>U</span>
        </span>
        <span>
          <strong>USIU</strong>
          <small>SMART CAMPUS</small>
        </span>
      </button>
      <nav aria-label="Main navigation">
        <p className="nav-label">CAMPUS HUB</p>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${active === item.label ? "active" : ""}`}
            onClick={() => onChange(item.label)}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-note">
        <span className="note-icon">
          <Icon name="book" size={18} />
        </span>
        <div>
          <strong>Coursework?</strong>
          <p>Continue using Blackboard for classes and assignments.</p>
        </div>
      </div>
      <div className="profile">
        <div className="avatar">AM</div>
        <div>
          <strong>Alex Morgan</strong>
          <span>Demo profile</span>
        </div>
        <button aria-label="Profile options">•••</button>
      </div>
    </aside>
  );
}

function Header({
  page,
  onSearch,
  dark,
  onToggleTheme,
}: {
  page: Page;
  onSearch: (term: string) => void;
  dark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <header className="topbar">
      <div className="mobile-brand">
        <span className="brand-mark">
          <span>U</span>
        </span>
        <strong>USIU Smart Campus</strong>
      </div>
      <div className="search-wrap">
        <Icon name="search" size={18} />
        <input
          aria-label="Search the prototype"
          onChange={(e) => onSearch(e.target.value)}
          placeholder={page === "Home" ? "Search the campus hub…" : `Search ${page.toLowerCase()}…`}
        />
        <kbd>⌘ K</kbd>
      </div>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
        title={`Switch to ${dark ? "light" : "dark"} mode`}
      >
        <span className={!dark ? "selected" : ""}>
          <Icon name="sun" size={15} />
        </span>
        <span className={dark ? "selected" : ""}>
          <Icon name="moon" size={14} />
        </span>
      </button>
      <button className="icon-button" aria-label="Notifications">
        <Icon name="bell" size={20} />
        <i />
      </button>
      <button className="mobile-avatar">AM</button>
    </header>
  );
}

function Home({ go }: { go: (page: Page) => void }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">STUDENT LIFE, SIMPLIFIED</span>
          <h1>Good morning, Alex.</h1>
          <p>Everything you need for campus life, all in one place.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => go("Student Services")}>
              Explore services <Icon name="arrow" size={17} />
            </button>
            <button className="text-btn" onClick={() => go("Campus Directory")}>
              View campus directory
            </button>
          </div>
        </div>
        <div
          className="hero-image"
          role="img"
          aria-label="Modern university building surrounded by trees"
        >
          <div className="weather">
            <span>
              <Icon name="pin" size={17} />
            </span>
            <div>
              <strong>Main campus</strong>
              <small>USIU Road · Nairobi</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">START HERE</span>
            <h2>Campus at a glance</h2>
          </div>
          <p>Quick access to the places students use most.</p>
        </div>
        <div className="quick-grid">
          {quickLinks.map((item) => (
            <button key={item.title} className="quick-card" onClick={() => go(item.page)}>
              <span className={`quick-icon ${item.tone}`}>
                <Icon name={item.icon} size={23} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="round-arrow">
                <Icon name="arrow" size={17} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="home-columns">
        <section className="section events-panel">
          <div className="section-heading compact">
            <div>
              <span className="section-kicker">WHAT'S HAPPENING</span>
              <h2>Upcoming events</h2>
            </div>
            <button className="view-all" onClick={() => go("Events")}>
              View all <Icon name="arrow" size={15} />
            </button>
          </div>
          <div className="event-list">
            {upcomingEvents.map((event) => (
              <button className="event-row" key={event.title} onClick={() => go("Events")}>
                <span className="date-box">
                  <small>{event.month}</small>
                  <strong>{event.day}</strong>
                </span>
                <span className="event-info">
                  <span className={`tag ${event.color}`}>{event.category}</span>
                  <strong>{event.title}</strong>
                  <small>
                    <Icon name="clock" size={14} />
                    {event.meta}
                  </small>
                </span>
                <span className="event-arrow">›</span>
              </button>
            ))}
          </div>
        </section>
        <aside className="ask-card">
          <span className="bot-orbit">
            <Icon name="chat" size={25} />
          </span>
          <span className="section-kicker light">CAMPUS ASSISTANT</span>
          <h2>Not sure where to go?</h2>
          <p>Ask about verified contacts, student services, and events listed by USIU-Africa.</p>
          <button onClick={() => go("Campus Chatbot")}>
            Start a conversation <Icon name="arrow" size={17} />
          </button>
          <div className="bot-dots">
            <span />
            <span />
            <span />
          </div>
        </aside>
      </div>
    </>
  );
}

const directoryEntries = [
  {
    icon: "book",
    name: "Library and Information Center",
    place: "Ask a Librarian service",
    email: "askalibrarian@usiu.ac.ke",
    phone: "+254 730 116 429",
    category: "Academic",
    url: "https://www.usiu.ac.ke/academics/library-and-e-resources/",
  },
  {
    icon: "services",
    name: "Admissions Office",
    place: "Main campus admissions",
    email: "admit@usiu.ac.ke",
    phone: "+254 730 116 247",
    category: "Administration",
    url: "https://www.usiu.ac.ke/about-us/contact-us/",
  },
  {
    icon: "directory",
    name: "Registrar",
    place: "Academic records and registration",
    email: "registrar@usiu.ac.ke",
    phone: "+254 730 116 786",
    category: "Administration",
    url: "https://www.usiu.ac.ke/about-us/contact-us/",
  },
  {
    icon: "briefcase",
    name: "Placement and Career Services",
    place: "Freida Brown Student Center · 1st Floor, Registrar Wing",
    email: "careeroffice@usiu.ac.ke",
    phone: "+254 730 116 778",
    category: "Student support",
    url: "https://www.usiu.ac.ke/placement-careers/",
  },
  {
    icon: "services",
    name: "IT Helpdesk",
    place: "Technology support",
    email: "helpdesk@usiu.ac.ke",
    phone: "+254 730 116 333",
    category: "Student support",
    url: "https://www.usiu.ac.ke/about-us/contact-us/",
  },
  {
    icon: "services",
    name: "Finance Office",
    place: "Student finance enquiries",
    email: "finance@usiu.ac.ke",
    phone: "+254 730 116 403",
    category: "Administration",
    url: "https://www.usiu.ac.ke/about-us/contact-us/",
  },
  {
    icon: "map",
    name: "USIU-Africa Main Campus",
    place: "USIU Road, off Thika Road (Exit 7), Nairobi",
    email: "admit@usiu.ac.ke",
    phone: "+254 730 116 000",
    category: "Facilities",
    url: "https://www.usiu.ac.ke/about-us/contact-us/",
  },
];

function Directory({ search }: { search: string }) {
  const [filter, setFilter] = useState("All");
  const visible = directoryEntries.filter(
    (x) =>
      (filter === "All" || x.category === filter) &&
      `${x.name} ${x.place} ${x.email}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <PageShell
      kicker="FIND YOUR WAY"
      title="Campus Directory"
      description="Official office and service contacts published by USIU-Africa."
    >
      <div className="filter-row">
        {["All", "Academic", "Administration", "Student support", "Facilities"].map((item) => (
          <button
            key={item}
            className={`filter ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="directory-grid">
        {visible.map((entry) => (
          <article className="directory-card" key={entry.name}>
            <span className="quick-icon blue">
              <Icon name={entry.icon} />
            </span>
            <div>
              <h3>{entry.name}</h3>
              <p>
                <Icon name="pin" size={15} />
                {entry.place}
              </p>
              <div className="contact-links">
                <a href={`tel:${entry.phone.replace(/\s/g, "")}`}>{entry.phone}</a>
                <a href={`mailto:${entry.email}`}>{entry.email}</a>
              </div>
              <a className="source-link" href={entry.url} target="_blank" rel="noreferrer">
                Official source ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      {!visible.length && <EmptyState />}
    </PageShell>
  );
}

function Events({ search }: { search: string }) {
  const [filter, setFilter] = useState<"Upcoming" | "Recent" | "All">("Upcoming");
  const now = new Date();
  const visible = events.filter((x) => {
    const isUpcoming = new Date(`${x.date}T23:59:59`) >= now;
    const matchesFilter = filter === "All" || (filter === "Upcoming" ? isUpcoming : !isUpcoming);
    return matchesFilter && x.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <PageShell
      kicker="GET INVOLVED"
      title="Events"
      description="Events published on the official USIU-Africa website."
    >
      <div className="filter-row">
        {(["Upcoming", "Recent", "All"] as const).map((item) => (
          <button
            key={item}
            className={`filter ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="event-page-list">
        {visible.map((event) => (
          <article className="event-page-card" key={event.title}>
            <span className="date-box large">
              <small>{event.month}</small>
              <strong>{event.day}</strong>
            </span>
            <div>
              <span className={`tag ${event.color}`}>{event.category}</span>
              <h3>{event.title}</h3>
              <p>
                <Icon name="clock" size={15} />
                {event.meta}
              </p>
              <small>{event.detail}</small>
            </div>
            <a href={event.url} target="_blank" rel="noreferrer">
              View details <Icon name="arrow" size={15} />
            </a>
          </article>
        ))}
      </div>
      {!visible.length && <EmptyState />}
    </PageShell>
  );
}

const services = [
  [
    "book",
    "Library & e-resources",
    "Access library services, databases, research support, instructional classes, and Ask a Librarian.",
    "https://www.usiu.ac.ke/academics/library-and-e-resources/",
  ],
  [
    "health",
    "Health & wellness",
    "Find confidential counseling, the on-campus clinic, wellness programs, and specialist schedules.",
    "https://www.usiu.ac.ke/health-wellness/",
  ],
  [
    "briefcase",
    "Placement & careers",
    "Access career advising, CV workshops, mock interviews, recruitment drives, and the Career Link portal.",
    "https://www.usiu.ac.ke/placement-careers/",
  ],
  [
    "briefcase",
    "Academic internships",
    "Review internship placement support, registration procedures, workshops, and employer partnerships.",
    "https://www.usiu.ac.ke/student-life/internships/",
  ],
  [
    "users",
    "Student exchange",
    "Explore partner-university opportunities, eligibility requirements, and application information.",
    "https://www.usiu.ac.ke/student-life/student-exchange-program/",
  ],
  [
    "home",
    "Housing & accommodation",
    "Review on-campus residence information, eligibility, room applications, and accredited off-campus options.",
    "https://www.usiu.ac.ke/student-life/housing-accommodation/",
  ],
];

function Services({ search }: { search: string }) {
  const visible = services.filter((x) =>
    `${x[1]} ${x[2]}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <PageShell
      kicker="HERE TO HELP"
      title="Student Services"
      description="A starting point for student resources published by USIU-Africa."
    >
      <div className="services-grid">
        {visible.map(([icon, title, text, url]) => (
          <a className="service-card" key={title} href={url} target="_blank" rel="noreferrer">
            <span className="quick-icon green">
              <Icon name={icon} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span>
                Browse resources <Icon name="arrow" size={15} />
              </span>
            </div>
          </a>
        ))}
      </div>
      {!visible.length && <EmptyState />}
    </PageShell>
  );
}

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi Alex. Ask me about official USIU-Africa contacts, student services, or currently listed events. Information was reviewed on November 8, 2026.",
    },
  ]);
  const [input, setInput] = useState("");
  const answer = (question: string) => {
    const query = question.toLowerCase();
    if (query.includes("library"))
      return "The Library and Information Center offers research help, databases, instructional classes, and Ask a Librarian. Email askalibrarian@usiu.ac.ke or call +254 730 116 429.";
    if (query.includes("career") || query.includes("job"))
      return "Placement and Career Services is on the 1st floor of the Freida Brown Student Center, Registrar Wing. Email careeroffice@usiu.ac.ke or call +254 730 116 778 / 779 / 796.";
    if (query.includes("health") || query.includes("clinic") || query.includes("counsel"))
      return "Health & Wellness provides confidential counseling, an on-campus clinic, wellness programs, and scheduled specialist services. General doctors and ambulance services are listed as available 24/7.";
    if (query.includes("housing") || query.includes("accommodation"))
      return "USIU-Africa lists two on-campus residential buildings accommodating 258 students. Contact the Housing Officer at housing@usiu.ac.ke or +254 730 116 265.";
    if (query.includes("exchange"))
      return "The Student Exchange Program is for eligible undergraduates with at least 30 units, a cumulative GPA of 3.0 or above, good academic and financial standing, and no disciplinary history.";
    if (query.includes("admission"))
      return "Contact Admissions at admit@usiu.ac.ke, +254 730 116 247 / 300 / 397 / 503 / 522, or WhatsApp +254 755 844 849.";
    if (query.includes("registrar"))
      return "The Registrar can be reached at registrar@usiu.ac.ke or +254 730 116 786.";
    if (query.includes("event"))
      return "The next event listed when this guide was reviewed is Rock’In Uni on November 18, 2026, from 3:00–5:00 PM at the USIU-Africa Auditorium. Open Events for the official listing.";
    return "I don’t have a verified answer for that yet. Please use the official source links in the Directory and Student Services, or contact USIU-Africa’s main line at +254 730 116 000.";
  };
  const send = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      {
        from: "bot",
        text: answer(input),
      },
    ]);
    setInput("");
  };
  return (
    <PageShell
      kicker="ASK THE HUB"
      title="Campus Chatbot"
      description="Quick answers based on the official USIU-Africa website, reviewed November 8, 2026."
    >
      <div className="chat-shell">
        <div className="chat-header">
          <span className="bot-orbit small">
            <Icon name="chat" />
          </span>
          <div>
            <strong>Campus Assistant</strong>
            <span>
              <i /> Official-source guide
            </span>
          </div>
        </div>
        <div className="messages">
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="suggestions">
          <button onClick={() => setInput("Where is the library?")}>Where is the library?</button>
          <button onClick={() => setInput("Show me upcoming events")}>
            What events are coming up?
          </button>
        </div>
        <div className="composer">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask about campus services…"
          />
          <button onClick={send} aria-label="Send message">
            <Icon name="send" size={19} />
          </button>
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-title">
        <span className="section-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <div className="prototype-notice">
        <strong>Official-source information</strong>
        <span>
          Reviewed November 8, 2026. Details can change; follow each official USIU-Africa source
          link for the latest information.
        </span>
        <a href="https://www.usiu.ac.ke/" target="_blank" rel="noreferrer">
          Visit usiu.ac.ke ↗
        </a>
      </div>
      {children}
    </>
  );
}

function EmptyState() {
  return (
    <div className="empty">
      <Icon name="search" size={28} />
      <h3>No results found</h3>
      <p>Try a different search term.</p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("Home");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("usiu-theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("usiu-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    const glow = document.querySelector<HTMLElement>(".cursor-underglow");
    let frame = 0;

    const moveGlow = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        glow?.classList.add("is-visible");
        glow?.classList.toggle(
          "is-hovering",
          event.target instanceof Element &&
            Boolean(event.target.closest("a, button, input, .quick-card, .service-card")),
        );
      });
    };
    const hideGlow = () => glow?.classList.remove("is-visible");

    window.addEventListener("pointermove", moveGlow, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideGlow);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", moveGlow);
      document.documentElement.removeEventListener("mouseleave", hideGlow);
    };
  }, []);
  const go = (next: Page) => {
    setPage(next);
    setSearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="app-shell">
      <svg className="liquid-filter" aria-hidden="true">
        <defs>
          <filter id="liquid-refraction" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.045"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
          </filter>
        </defs>
      </svg>
      <div className="cursor-underglow" aria-hidden="true" />
      <Sidebar active={page} onChange={go} />
      <div className="main-column">
        <Header
          page={page}
          onSearch={setSearch}
          dark={dark}
          onToggleTheme={() => setDark((current) => !current)}
        />
        <main>
          <div className="page-stage" key={page}>
            {page === "Home" && <Home go={go} />}
            {page === "Campus Directory" && <Directory search={search} />}
            {page === "Events" && <Events search={search} />}
            {page === "Student Services" && <Services search={search} />}
            {page === "Campus Chatbot" && <Chatbot />}
          </div>
        </main>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.label)}
              className={page === item.label ? "active" : ""}
            >
              <Icon name={item.icon} size={20} />
              <span>
                {item.label === "Campus Directory"
                  ? "Directory"
                  : item.label === "Student Services"
                    ? "Services"
                    : item.label === "Campus Chatbot"
                      ? "Chatbot"
                      : item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
