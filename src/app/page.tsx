import Image from "next/image";

// Icon Components
const GitHubIcon = () => (
  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const ExternalLinkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
  </svg>
);

// Section Header Icon Components
const BoltIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const CodeIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
  </svg>
);

// Project Icons
const ChartIcon = () => (
  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
  </svg>
);

const TrendingIcon = () => (
  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
  </svg>
);

const BadgeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
  </svg>
);

// Reusable Components
const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      {icon}
    </span>
    {title}
  </h2>
);

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20">
    {children}
  </a>
);

const TechBadge = ({ color, children }: { color: string; children: React.ReactNode }) => {
  const colorClasses: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    slate: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  };

  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border ${colorClasses[color] || colorClasses.slate}`}>
      {children}
    </span>
  );
};

const SkillPill = ({ color, children }: { color: string; children: React.ReactNode }) => {
  const colorClasses: Record<string, string> = {
    yellow: "from-yellow-500/10 to-yellow-600/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-500/40",
    blue: "from-blue-500/10 to-blue-600/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40",
    green: "from-green-500/10 to-green-600/10 text-green-400 border-green-500/20 hover:border-green-500/40",
    orange: "from-orange-500/10 to-orange-600/10 text-orange-400 border-orange-500/20 hover:border-orange-500/40",
    cyan: "from-cyan-500/10 to-cyan-600/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40",
    rose: "from-rose-500/10 to-rose-600/10 text-rose-400 border-rose-500/20 hover:border-rose-500/40",
    slate: "from-slate-500/10 to-slate-600/10 text-slate-300 border-slate-500/20 hover:border-slate-500/40",
    emerald: "from-emerald-500/10 to-emerald-600/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40",
    red: "from-red-500/10 to-red-600/10 text-red-400 border-red-500/20 hover:border-red-500/40",
    indigo: "from-indigo-500/10 to-indigo-600/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-500/40",
    amber: "from-amber-500/10 to-amber-600/10 text-amber-400 border-amber-500/20 hover:border-amber-500/40",
    sky: "from-sky-500/10 to-sky-600/10 text-sky-400 border-sky-500/20 hover:border-sky-500/40",
    violet: "from-violet-500/10 to-violet-600/10 text-violet-400 border-violet-500/20 hover:border-violet-500/40",
    pink: "from-pink-500/10 to-pink-600/10 text-pink-400 border-pink-500/20 hover:border-pink-500/40",
    purple: "from-purple-500/10 to-purple-600/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40",
    teal: "from-teal-500/10 to-teal-600/10 text-teal-400 border-teal-500/20 hover:border-teal-500/40",
    lime: "from-lime-500/10 to-lime-600/10 text-lime-400 border-lime-500/20 hover:border-lime-500/40",
    fuchsia: "from-fuchsia-500/10 to-fuchsia-600/10 text-fuchsia-400 border-fuchsia-500/20 hover:border-fuchsia-500/40",
  };

  return (
    <span className={`px-3 py-1.5 text-sm rounded-full bg-gradient-to-r border transition-colors cursor-default ${colorClasses[color] || colorClasses.slate}`}>
      {children}
    </span>
  );
};

// Experience Item Component
const ExperienceItem = ({
  role,
  company,
  dates,
  color,
  achievements,
  isLast = false,
}: {
  role: string;
  company: string;
  dates: string;
  color: "indigo" | "purple" | "pink" | "emerald" | "amber" | "cyan";
  achievements: string[];
  isLast?: boolean;
}) => {
  const colorClasses = {
    indigo: {
      dot: "bg-indigo-500 group-hover:ring-indigo-500/30",
      border: "hover:border-indigo-500/30",
      bullet: "text-indigo-400",
      company: "text-indigo-400",
    },
    purple: {
      dot: "bg-purple-500 group-hover:ring-purple-500/30",
      border: "hover:border-purple-500/30",
      bullet: "text-purple-400",
      company: "text-purple-400",
    },
    pink: {
      dot: "bg-pink-500 group-hover:ring-pink-500/30",
      border: "hover:border-pink-500/30",
      bullet: "text-pink-400",
      company: "text-pink-400",
    },
    emerald: {
      dot: "bg-emerald-500 group-hover:ring-emerald-500/30",
      border: "hover:border-emerald-500/30",
      bullet: "text-emerald-400",
      company: "text-emerald-400",
    },
    amber: {
      dot: "bg-amber-500 group-hover:ring-amber-500/30",
      border: "hover:border-amber-500/30",
      bullet: "text-amber-400",
      company: "text-amber-400",
    },
    cyan: {
      dot: "bg-cyan-500 group-hover:ring-cyan-500/30",
      border: "hover:border-cyan-500/30",
      bullet: "text-cyan-400",
      company: "text-cyan-400",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`relative pl-6 sm:pl-12 ${isLast ? "" : "pb-8"} group`}>
      <div className={`absolute left-0 sm:left-4 top-2 w-2 h-2 -translate-x-[3px] rounded-full ring-4 ring-slate-900 transition-all duration-300 ${colors.dot}`} />
      <div className={`bg-slate-800/30 rounded-xl p-5 border border-slate-700/30 transition-all duration-300 hover:transform hover:translate-x-1 ${colors.border}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{role}</h3>
            <p className={`${colors.company} font-medium`}>{company}</p>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full w-fit">{dates}</span>
        </div>
        <ul className="space-y-2 text-sm text-slate-400">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={colors.bullet}>▹</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({
  icon,
  title,
  description,
  techStack,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: { name: string; color: string }[];
  color: string;
}) => {
  const colorClasses: Record<string, string> = {
    indigo: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
    purple: "hover:border-purple-500/50 hover:shadow-purple-500/10",
    emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    amber: "hover:border-amber-500/50 hover:shadow-amber-500/10",
  };

  const titleHoverColors: Record<string, string> = {
    indigo: "group-hover:text-indigo-400",
    purple: "group-hover:text-purple-400",
    emerald: "group-hover:text-emerald-400",
    amber: "group-hover:text-amber-400",
  };

  const linkColors: Record<string, string> = {
    indigo: "text-indigo-400 hover:text-indigo-300",
    purple: "text-purple-400 hover:text-purple-300",
    emerald: "text-emerald-400 hover:text-emerald-300",
    amber: "text-amber-400 hover:text-amber-300",
  };

  const iconBgColors: Record<string, string> = {
    indigo: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
    purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    emerald: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    amber: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  };

  const hoverIconColors: Record<string, string> = {
    indigo: "hover:text-indigo-400",
    purple: "hover:text-purple-400",
    emerald: "hover:text-emerald-400",
    amber: "hover:text-amber-400",
  };

  return (
    <div className={`group bg-slate-800/30 rounded-xl p-5 border border-slate-700/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${colorClasses[color]}`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center border ${iconBgColors[color]}`}>
          {icon}
        </div>
        <a href="#" className={`text-slate-500 transition-colors ${hoverIconColors[color]}`}>
          <ExternalLinkIcon />
        </a>
      </div>
      <h3 className={`text-lg font-semibold text-white mb-2 transition-colors ${titleHoverColors[color]}`}>{title}</h3>
      <p className="text-sm text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <TechBadge key={index} color={tech.color}>{tech.name}</TechBadge>
        ))}
      </div>
      <a href="#" className={`inline-flex items-center gap-2 text-sm transition-colors group/link ${linkColors[color]}`}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View Code
        <ChevronRightIcon />
      </a>
    </div>
  );
};

// Code Logo </>
const CodeLogo = () => (
  <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
    </defs>
    {/* < */}
    <path
      d="M28 25L12 40L28 55"
      stroke="url(#logoGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* / */}
    <path
      d="M45 20L35 60"
      stroke="url(#logoGradient)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* > */}
    <path
      d="M52 25L68 40L52 55"
      stroke="url(#logoGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CVPage() {
  return (
    <div className="gradient-bg min-h-screen text-slate-300">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Hero Section */}
        <header className="glass rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 glow-border transition-all duration-500">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <Image
                src="/cover_photo.jpeg"
                alt="Paulo Borba"
                width={160}
                height={160}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-4 border-slate-800 profile-glow transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name & Title */}
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                Paulo Borba
              </h1>
              <p className="text-lg sm:text-xl text-indigo-400 font-medium mb-4">
                Software Engineer
              </p>
              <p className="text-slate-400 text-sm sm:text-base mb-5 max-w-lg">
                Distrito Federal, Brazil · Open to Remote
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <SocialLink href="https://github.com/pauloesb">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/pauloesb">
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink href="mailto:pauloesb@gmail.com">
                  <EmailIcon />
                </SocialLink>
              </div>
            </div>

            {/* Code Logo */}
            <div className="hidden lg:flex items-center justify-center">
              <CodeLogo />
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="glass rounded-2xl p-6 sm:p-8 mb-8 glow-border transition-all duration-500">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <BoltIcon />
            </span>
            Professional Summary
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Software Engineer with <span className="text-indigo-400 font-medium">8+ years</span> of experience building scalable web applications and microservices.
            Expert in <span className="text-indigo-400 font-medium">Ruby on Rails</span>, <span className="text-indigo-400 font-medium">JavaScript/TypeScript</span>, and cloud-native architectures.
            Proven track record in decoupling monoliths into microservices, leading technical projects, and improving data quality systems.
            Fluent in English and Portuguese, with international experience across U.S., U.K., Denmark, and Brazil.
          </p>
        </section>

        {/* Experience Section */}
        <section className="glass rounded-2xl p-6 sm:p-8 mb-8 glow-border transition-all duration-500">
          <SectionHeader icon={<BriefcaseIcon />} title="Experience" />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-4 top-2 bottom-2 w-0.5 timeline-line rounded-full" />

            <ExperienceItem
              role="Senior Software Engineer"
              company="Kiavi"
              dates="06/2023 - Present"
              color="indigo"
              achievements={[
                "Decoupling monolith into Microservices using Kotlin and communication through gRPC",
                "Lead the Project Milestones, Scope of Work Recycle, and Dedicated Borrower Team initiatives",
                "Created internal Gem to communicate with Data Warehouse through GraphQL",
                "Participated in development of Infill Scope Of Work with Shadow Writing, Data Validation, and architecture adjustments",
              ]}
            />

            <ExperienceItem
              role="Ruby Engineer"
              company="Smart Pension"
              dates="10/2022 - 04/2023"
              color="purple"
              achievements={[
                "Working on Investments, Contributions and Monetary domain, increasing code quality and maintainability",
                "Refactoring of main business logic related to trade instructions sent to trading platforms",
                "Help building event-driven architecture using Kafka and decoupling parts of monolith",
              ]}
            />

            <ExperienceItem
              role="Full Stack Developer - GTM Ops"
              company="MongoDB"
              dates="10/2021 - 10/2022"
              color="emerald"
              achievements={[
                "Developed new API Enrichment Service to centralize all enrichment and provide better data management",
                "Added enrichment providers (Salesforce, Eloqua) to increase data quality",
                "Responsible for tracking all user interactions across MongoDB pages using Twilio Segment",
              ]}
            />

            <ExperienceItem
              role="Data Integration Engineer"
              company="HomeLight"
              dates="03/2021 - 10/2021"
              color="amber"
              achievements={[
                "Created workflow to migrate tables to Elasticsearch for scalability",
                "Decreased database hits by migrating complex queries to Elasticsearch",
                "Improved code quality following SOLID and DRY principles with increased test coverage",
              ]}
            />

            {/* Previous Experiences */}
            <div className="relative pl-6 sm:pl-12 group">
              <div className="absolute left-0 sm:left-4 top-2 w-2 h-2 -translate-x-[3px] bg-pink-500 rounded-full ring-4 ring-slate-900 group-hover:ring-pink-500/30 transition-all duration-300" />
              <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/30 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:translate-x-1">
                <h3 className="text-lg font-semibold text-white mb-3">Previous Experience</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▹</span>
                    <span><span className="text-slate-300">Full Stack Developer</span> at Ignição Digital (2019 - 2020)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▹</span>
                    <span><span className="text-slate-300">Software Engineer</span> at BoominGroup (2018 - 2019)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▹</span>
                    <span><span className="text-slate-300">Software Engineer</span> at Novatics (2018)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▹</span>
                    <span><span className="text-slate-300">Ruby on Rails Developer</span> at Better Now, Copenhagen (2017 - 2018)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▹</span>
                    <span><span className="text-slate-300">Data Analyst</span> at Comunix (2016 - 2017)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▹</span>
                    <span><span className="text-slate-300">Jr. Programmer</span> at Capgemini (2016 - 2017)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="glass rounded-2xl p-6 sm:p-8 mb-8 glow-border transition-all duration-500">
          <SectionHeader icon={<CodeIcon />} title="Projects" />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <ProjectCard
              icon={<TrendingIcon />}
              title="Getlabor"
              description="A time tracking and invoice platform built at Novatics. Helps freelancers and teams control their time and manage billing efficiently."
              techStack={[
                { name: "Ruby on Rails", color: "red" },
                { name: "PostgreSQL", color: "blue" },
                { name: "Vue.js", color: "emerald" },
              ]}
              color="amber"
            />

            <ProjectCard
              icon={<ShieldIcon />}
              title="Cortesias"
              description="Platform for Sabin Lab where users can request courtesy exams and analysts can review and approve or deny requests."
              techStack={[
                { name: "Ruby on Rails", color: "red" },
                { name: "PostgreSQL", color: "blue" },
                { name: "JavaScript", color: "yellow" },
              ]}
              color="emerald"
            />
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="glass rounded-2xl p-6 sm:p-8 mb-8 glow-border transition-all duration-500">
          <SectionHeader icon={<LightbulbIcon />} title="Technical Skills" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <SkillPill color="red">Ruby</SkillPill>
                <SkillPill color="yellow">JavaScript</SkillPill>
                <SkillPill color="blue">TypeScript</SkillPill>
                <SkillPill color="green">Python</SkillPill>
                <SkillPill color="purple">Kotlin</SkillPill>
                <SkillPill color="orange">Java</SkillPill>
                <SkillPill color="rose">SQL</SkillPill>
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <SkillPill color="red">Ruby on Rails</SkillPill>
                <SkillPill color="green">Node.js</SkillPill>
                <SkillPill color="emerald">Vue.js</SkillPill>
                <SkillPill color="cyan">React</SkillPill>
                <SkillPill color="slate">Next.js</SkillPill>
                <SkillPill color="blue">React Native</SkillPill>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <SkillPill color="amber">AWS</SkillPill>
                <SkillPill color="sky">Docker</SkillPill>
                <SkillPill color="pink">CI/CD</SkillPill>
                <SkillPill color="violet">Microservices</SkillPill>
                <SkillPill color="indigo">gRPC</SkillPill>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <SkillPill color="blue">PostgreSQL</SkillPill>
                <SkillPill color="yellow">MySQL</SkillPill>
                <SkillPill color="green">MongoDB</SkillPill>
                <SkillPill color="orange">Elasticsearch</SkillPill>
              </div>
            </div>

            {/* Tools & Testing */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Tools & Testing</h3>
              <div className="flex flex-wrap gap-2">
                <SkillPill color="orange">Git</SkillPill>
                <SkillPill color="purple">RSpec</SkillPill>
                <SkillPill color="teal">Sidekiq</SkillPill>
                <SkillPill color="red">RabbitMQ</SkillPill>
                <SkillPill color="slate">Kafka</SkillPill>
              </div>
            </div>

            {/* Practices */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Practices</h3>
              <div className="flex flex-wrap gap-2">
                <SkillPill color="teal">Agile/Scrum</SkillPill>
                <SkillPill color="lime">TDD</SkillPill>
                <SkillPill color="fuchsia">SOLID/DRY</SkillPill>
                <SkillPill color="cyan">GraphQL</SkillPill>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Languages */}
        <section className="glass rounded-2xl p-6 sm:p-8 mb-8 glow-border transition-all duration-500">
          <SectionHeader icon={<AcademicCapIcon />} title="Education & Languages" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Education</h3>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 border border-indigo-500/20">
                    <BookIcon />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">B.Sc. in Software Engineering</h4>
                    <p className="text-indigo-400 text-sm">Universidade de Brasília</p>
                    <p className="text-slate-500 text-sm mt-1">2010 - 2017</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <BookIcon />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">B.Sc. Computer Science (Interchange)</h4>
                    <p className="text-purple-400 text-sm">Brunel University London</p>
                    <p className="text-slate-500 text-sm mt-1">2014 - 2015</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                    <BadgeIcon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">MBA in Full Stack Development</h4>
                    <p className="text-amber-400 text-sm">Instituto de Gestão e Tecnologia da Informação</p>
                    <p className="text-slate-500 text-sm mt-1">2019 - 2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Languages</h3>

              <div className="space-y-3">
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold text-sm">EN</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">English</h4>
                    <p className="text-slate-500 text-xs">Fluent</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20">
                    <span className="text-green-400 font-bold text-sm">PT</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Portuguese</h4>
                    <p className="text-slate-500 text-xs">Native</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                    <span className="text-blue-400 font-bold text-sm">FR</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">French</h4>
                    <p className="text-slate-500 text-xs">Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6">
          <p className="text-slate-500 text-sm">
            Built with <span className="text-indigo-400">Next.js</span> & <span className="text-indigo-400">Tailwind CSS</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
