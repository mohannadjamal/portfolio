export type Project = {
	title: string;
	summary: string;
	tags: readonly string[];
	liveUrl?: string;
	sourceUrl?: string;
	/** Source exists but is not public — renders a plain "Private" label, not a link. */
	sourcePrivate?: boolean;
};

const projects: readonly Project[] = [
	{
		title: "TOP Academy",
		summary:
			"Laravel + Inertia/React platform for DRM-protected video courses for dental students and dentists — role-based access for admins, instructors and students, VDOCipher behind a pluggable video-provider interface, and Docker + GitHub Actions CI/CD. I co-founded it with an experienced dentist and dentistry instructor; it's live at topacademy.app.",
		tags: ["Laravel", "Inertia + React", "TypeScript", "DRM video"],
		liveUrl: "https://topacademy.app",
		sourcePrivate: true,
	},
	{
		title: "Personal site",
		summary:
			"Static Astro build with Docker image and GitHub Actions CI/CD — project highlights and a downloadable PDF CV — Hosted on my own local server.",
		tags: ["Astro", "Docker", "CI/CD"],
		liveUrl: "https://www.mohannadjamal.dev",
		sourceUrl: "https://github.com/mohannadjamal/portfolio",
	},
];

export type Job = {
	role: string;
	company: string;
	period: string;
	/** Line under the title: what the company does · where. */
	context: string;
	highlights: readonly string[];
};

const experience: readonly Job[] = [
	{
		role: "Full-Stack Software Engineer",
		company: "DeltaSmarts",
		period: "Aug 2025 – Present",
		context: "Accounting technology firm · Jerusalem",
		highlights: [
			"Lead end-to-end development of a full-stack accounting platform (Laravel, Angular, React Native) serving 500+ active business clients.",
			"Engineered a high-performance, hardware-agnostic document engine for financial reporting and real-time transaction processing, improving reliability across diverse client environments.",
			"Consolidated legacy web and mobile interfaces into a unified design system, improving user retention and cross-platform consistency.",
			"Built data-driven financial dashboards and automated reporting tools, reducing clients' manual overhead.",
			"Drive technical direction through code review, feature scoping and architectural roadmaps in a cross-functional Agile team, and embedded AI-assisted development into the team's workflow.",
		],
	},
	{
		role: "Chief Product Officer (part-time)",
		company: "Noqta Platform",
		period: "Aug 2026 – Oct 2026",
		context: "Restaurant operating system · Ramallah",
		highlights: [
			"Wrote product specifications and set up the release process for an early-stage restaurant platform.",
		],
	},
	{
		role: "Freelance Full-Stack Developer",
		company: "Self-Employed",
		period: "Jan 2025 – Aug 2025",
		context: "Remote · Web and mobile projects for small-business clients",
		highlights: [
			"Delivered end-to-end web applications (Yii 2, React) — requirements, data modeling, implementation and deployment.",
			"Managed scope, deadlines and client communication directly as a solo engineer.",
		],
	},
	{
		role: "Full-Stack Software Engineer",
		company: "Mada",
		period: "Dec 2022 – Dec 2024",
		context: "Internet service provider · Ramallah",
		highlights: [
			"Led full-stack development of web and mobile applications (Django, Flutter) serving 40,000+ active clients.",
			"Architected a versioned REST API layer with strict data contracts, guaranteeing reliability and structural consistency across all client surfaces.",
			"Introduced project-wide Django unit testing, raising release confidence across API and data-model changes.",
			"Rebuilt the company website on Wagtail CMS and containerized all production deployments with Docker, standardizing the development-to-production pipeline and eliminating environment drift.",
		],
	},
	{
		role: "Frontend Developer",
		company: "ASAL Technologies",
		period: "Nov 2021 – Nov 2022",
		context: "International software outsourcing · Ramallah",
		highlights: [
			"Developed modular React.js UI components integrated against REST API backends for an in-house product.",
			"Engineered responsive interfaces (HTML5, CSS3, JavaScript) with complex application state managed in Redux.",
		],
	},
];

export const site = {
	lang: "en",
	name: "Mohannad Jamal",
	title: "Mohannad Jamal — Full-stack software engineer",
	description:
		"Full-stack software engineer with five years of production experience: an accounting platform for 500+ business clients, ISP systems for 40,000+ users, and CMS.",
	role: "Full-stack software engineer · Jerusalem · 5 years",
	tagline:
		"From database schema to UI: currently building an accounting platform used by 500+ business clients, after production systems for 40,000+ users in telecom and content management.",
	bio: [
		"Full-stack software engineer with five years of production experience across web and mobile. I'm currently building an accounting platform used by 500+ business clients at DeltaSmarts; earlier work delivered production systems to 40,000+ end users in telecommunications and content management.",
		"I own features from database schema to UI, and I work natively in AI-augmented workflows, using Claude Code, Claude Design and Cursor to ship faster without trading away quality. On the product side I write specifications, plan roadmaps and set up release processes.",
		"Arabic (native) · English (professional working) · Hebrew (conversational)",
	],
	experience,
	education: {
		degree: "BSc in Computer Science",
		school: "Birzeit University",
		year: "2019",
	},
	skills: [
		"TypeScript",
		"JavaScript",
		"Python",
		"PHP",
		"Dart",
		"SQL",
		"Laravel",
		"Django",
		"Django REST Framework",
		"Next.js",
		"Wagtail",
		"React",
		"Angular",
		"Redux",
		"Tailwind",
		"React Native",
		"Flutter",
		"PostgreSQL",
		"MySQL",
		"Supabase",
		"Docker",
		"CI/CD",
		"Vercel",
		"Git",
		"REST APIs",
		"Unit & feature testing",
		"RTL & bilingual UI",
		"Product specs & roadmapping",
		"Release management",
		"Jira",
		"Claude Code",
		"Claude Design",
		"Cursor",
	],
	projects,
	email: "jamalmohannad@gmail.com",
	social: {
		github: "https://github.com/mohannadjamal",
		linkedin: "https://www.linkedin.com/in/jamalmohannad",
	},
	cvPdf: {
		href: "/Mohannad-Jamal-CV.pdf",
		fileLabel: "Mohannad-Jamal-CV.pdf",
	},
} as const;
