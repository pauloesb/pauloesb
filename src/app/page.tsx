import Image from "next/image";

// Icon Components
const ArrowUpRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const PBLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="var(--color-ink)"/>
    <text x="20" y="26" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fill="var(--color-cream)" textAnchor="middle">PB</text>
    <rect y="35" width="40" height="5" fill="var(--color-vermillion)"/>
  </svg>
);

// Section Header
const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="relative mb-12">
    <span className="section-number">{number}</span>
    <div className="flex items-center gap-4">
      <div className="accent-line" />
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium tracking-tight">
        {title}
      </h2>
    </div>
  </div>
);

// Skill Tag
const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <span className="skill-tag cursor-default">{children}</span>
);

// Experience Item
const ExperienceItem = ({
  role,
  company,
  period,
  achievements,
  isActive = false,
}: {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  isActive?: boolean;
}) => (
  <div className="group grid grid-cols-[auto_1fr] gap-6 md:gap-10">
    <div className="flex flex-col items-center">
      <div className={`timeline-dot ${isActive ? "timeline-dot-active" : ""} group-hover:border-[var(--color-vermillion)] group-hover:scale-110 transition-all`} />
      <div className="w-px flex-1 bg-[var(--color-stone)] group-last:bg-transparent" />
    </div>
    <div className="pb-12 group-last:pb-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium">{role}</h3>
          <p className="text-[var(--color-vermillion)] font-medium">{company}</p>
        </div>
        <span className="text-sm text-[var(--color-ink-muted)] uppercase tracking-wider">{period}</span>
      </div>
      <ul className="space-y-2 text-[var(--color-ink-muted)]">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[var(--color-vermillion)] mt-1.5 text-xs">&#9632;</span>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Project Card
const ProjectCard = ({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) => (
  <div className="card-brutalist p-6 hover-lift group">
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-cream)] transition-colors">
        {title}
      </h3>
      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-vermillion)]" />
    </div>
    <p className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-stone)] mb-6 leading-relaxed transition-colors">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs uppercase tracking-wider text-[var(--color-ink-muted)] group-hover:text-[var(--color-cream)] border-b border-[var(--color-stone)] group-hover:border-[var(--color-stone)] transition-colors">
          {t}
        </span>
      ))}
    </div>
  </div>
);

// Education Card
const EducationCard = ({
  degree,
  institution,
  period,
  isInterchange = false,
}: {
  degree: string;
  institution: string;
  period: string;
  isInterchange?: boolean;
}) => (
  <div className="border-l-2 border-[var(--color-ink)] pl-6 py-2 hover:border-[var(--color-vermillion)] transition-colors group">
    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium group-hover:text-[var(--color-vermillion)] transition-colors">
      {degree}
      {isInterchange && <span className="text-xs uppercase tracking-wider text-[var(--color-sage)] ml-2">(Exchange)</span>}
    </h4>
    <p className="text-[var(--color-ink-muted)]">{institution}</p>
    <p className="text-sm text-[var(--color-sage)] mt-1">{period}</p>
  </div>
);

export default function CVPage() {
  const skills = {
    languages: ["Ruby", "JavaScript", "TypeScript", "Python", "Kotlin", "Java", "SQL"],
    frameworks: ["Ruby on Rails", "Node.js", "Vue.js", "React", "Next.js", "React Native"],
    cloud: ["AWS", "Docker", "CI/CD", "Microservices", "gRPC"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
    tools: ["Git", "RSpec", "Sidekiq", "RabbitMQ", "Kafka"],
    practices: ["Agile", "TDD", "SOLID", "GraphQL"],
  };

  return (
    <div className="min-h-screen relative z-10">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/90 backdrop-blur-sm border-b border-[var(--color-stone)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <PBLogo />
          <nav className="flex items-center gap-8">
            <a href="https://github.com/pauloesb" className="link-underline text-sm uppercase tracking-wider hover:text-[var(--color-vermillion)] transition-colors flex items-center gap-2">
              <GitHubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/pauloesb" className="link-underline text-sm uppercase tracking-wider hover:text-[var(--color-vermillion)] transition-colors flex items-center gap-2">
              <LinkedInIcon />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="mailto:pauloesb@gmail.com" className="link-underline text-sm uppercase tracking-wider hover:text-[var(--color-vermillion)] transition-colors flex items-center gap-2">
              <EmailIcon />
              <span className="hidden sm:inline">Email</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            <div className="animate-fade-up">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Software Engineer</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[0.95]">
                Paulo<br />
                <span className="italic text-[var(--color-vermillion)]">Borba</span>
              </h1>
              <div className="editorial-divider mb-6" />
              <p className="text-lg md:text-xl text-[var(--color-ink-muted)] max-w-xl leading-relaxed animate-fade-up delay-2">
                Building scalable systems with <span className="text-[var(--color-ink)] font-medium">8+ years</span> of experience.
                Specializing in Ruby on Rails, TypeScript, and cloud-native architectures.
              </p>
              <div className="mt-8 flex items-center gap-6 animate-fade-up delay-3">
                <span className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-vermillion)]" />
                  Distrito Federal, Brazil
                </span>
                <span className="text-[var(--color-stone)]">|</span>
                <span className="text-sm text-[var(--color-ink-muted)]">Open to Remote</span>
              </div>
            </div>

            <div className="animate-fade-up delay-4 justify-self-center lg:justify-self-end">
              <div className="photo-frame">
                <Image
                  src="/cover_photo.jpeg"
                  alt="Paulo Borba"
                  width={320}
                  height={400}
                  className="w-64 md:w-80 h-80 md:h-96 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="py-12 border-y border-[var(--color-stone)] overflow-hidden bg-[var(--color-paper)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, i) => (
            <span key={i} className="mx-4 text-sm uppercase tracking-widest text-[var(--color-ink-muted)]">
              {skill} <span className="mx-4 text-[var(--color-vermillion)]">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="01" title="About" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-[var(--color-ink-muted)]">
                Software Engineer with extensive experience building scalable web applications and microservices.
                Expert in <span className="text-[var(--color-ink)] font-medium">Ruby on Rails</span>, <span className="text-[var(--color-ink)] font-medium">JavaScript/TypeScript</span>,
                and cloud-native architectures.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-[var(--color-ink-muted)]">
                Proven track record in decoupling monoliths into microservices, leading technical projects, and improving
                data quality systems. Fluent in English and Portuguese, with international experience across the
                <span className="text-[var(--color-ink)] font-medium"> U.S., U.K., Denmark, and Brazil</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 md:py-32 bg-[var(--color-paper)]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="02" title="Experience" />

          <div className="max-w-3xl">
            <ExperienceItem
              role="Senior Software Engineer"
              company="Kiavi"
              period="Jun 2023 — Present"
              isActive
              achievements={[
                "Decoupling monolith into Microservices using Kotlin and communication through gRPC",
                "Leading Project Milestones, Scope of Work Recycle, and Dedicated Borrower Team initiatives",
                "Created internal Gem to communicate with Data Warehouse through GraphQL",
                "Development of Infill Scope of Work with Shadow Writing and Data Validation",
              ]}
            />

            <ExperienceItem
              role="Ruby Engineer"
              company="Smart Pension"
              period="Oct 2022 — Apr 2023"
              achievements={[
                "Working on Investments, Contributions and Monetary domain",
                "Refactoring main business logic for trade instructions to trading platforms",
                "Building event-driven architecture using Kafka and decoupling monolith",
              ]}
            />

            <ExperienceItem
              role="Full Stack Developer — GTM Ops"
              company="MongoDB"
              period="Oct 2021 — Oct 2022"
              achievements={[
                "Developed API Enrichment Service for centralized data management",
                "Added enrichment providers (Salesforce, Eloqua) for data quality",
                "Tracking user interactions across MongoDB pages using Twilio Segment",
              ]}
            />

            <ExperienceItem
              role="Data Integration Engineer"
              company="HomeLight"
              period="Mar 2021 — Oct 2021"
              achievements={[
                "Created workflow to migrate tables to Elasticsearch for scalability",
                "Decreased database hits by migrating complex queries to Elasticsearch",
                "Improved code quality following SOLID and DRY principles",
              ]}
            />

            <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium mb-6">Previous Roles</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-[var(--color-ink-muted)]">
                  <div className="border-l border-[var(--color-stone)] pl-4">
                    <span className="font-medium text-[var(--color-ink)]">Full Stack Developer</span>
                    <br />Ignição Digital · 2019—2020
                  </div>
                  <div className="border-l border-[var(--color-stone)] pl-4">
                    <span className="font-medium text-[var(--color-ink)]">Software Engineer</span>
                    <br />BoominGroup · 2018—2019
                  </div>
                  <div className="border-l border-[var(--color-stone)] pl-4">
                    <span className="font-medium text-[var(--color-ink)]">Software Engineer</span>
                    <br />Novatics · 2018
                  </div>
                  <div className="border-l border-[var(--color-stone)] pl-4">
                    <span className="font-medium text-[var(--color-ink)]">Ruby on Rails Developer</span>
                    <br />Better Now, Copenhagen · 2017—2018
                  </div>
                  <div className="border-l border-[var(--color-stone)] pl-4">
                    <span className="font-medium text-[var(--color-ink)]">Data Analyst</span>
                    <br />Comunix · 2016—2017
                  </div>
                  <div className="border-l border-[var(--color-stone)] pl-4">
                    <span className="font-medium text-[var(--color-ink)]">Jr. Programmer</span>
                    <br />Capgemini · 2016—2017
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="03" title="Projects" />

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Getlabor"
              description="A time tracking and invoice platform built at Novatics. Helps freelancers and teams control their time and manage billing efficiently."
              tech={["Ruby on Rails", "PostgreSQL", "Vue.js"]}
            />
            <ProjectCard
              title="Cortesias"
              description="Platform for Sabin Lab where users can request courtesy exams and analysts can review and approve or deny requests."
              tech={["Ruby on Rails", "PostgreSQL", "JavaScript"]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 md:py-32 bg-[var(--color-paper)]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="04" title="Technical Skills" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-4">Practices</h3>
              <div className="flex flex-wrap gap-2">
                {skills.practices.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="05" title="Education" />

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <EducationCard
                degree="B.Sc. in Software Engineering"
                institution="Universidade de Brasília"
                period="2010 — 2017"
              />
              <EducationCard
                degree="B.Sc. Computer Science"
                institution="Brunel University London"
                period="2014 — 2015"
                isInterchange
              />
              <EducationCard
                degree="MBA in Full Stack Development"
                institution="Instituto de Gestão e Tecnologia da Informação"
                period="2019 — 2020"
              />
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-sage)] mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[var(--color-stone)]">
                  <span className="font-medium">English</span>
                  <span className="text-sm text-[var(--color-ink-muted)] uppercase tracking-wider">Fluent</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[var(--color-stone)]">
                  <span className="font-medium">Portuguese</span>
                  <span className="text-sm text-[var(--color-ink-muted)] uppercase tracking-wider">Native</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[var(--color-stone)]">
                  <span className="font-medium">French</span>
                  <span className="text-sm text-[var(--color-ink-muted)] uppercase tracking-wider">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--color-stone)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[var(--color-ink-muted)]">
              Built with Next.js & Tailwind CSS
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/pauloesb" className="text-[var(--color-ink-muted)] hover:text-[var(--color-vermillion)] transition-colors">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/pauloesb" className="text-[var(--color-ink-muted)] hover:text-[var(--color-vermillion)] transition-colors">
                <LinkedInIcon />
              </a>
              <a href="mailto:pauloesb@gmail.com" className="text-[var(--color-ink-muted)] hover:text-[var(--color-vermillion)] transition-colors">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
