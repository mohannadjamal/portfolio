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
		"Full-stack software engineer with five years of production experience across web and mobile. I'm currently building an accounting platform used by 500+ business clients at DeltaSmarts; earlier work delivered production systems to 40,000+ end users in telecommunications and content management. I work natively in AI-augmented workflows, using Claude Code, Claude Design and Cursor to ship faster without trading away quality.",
		"At DeltaSmarts I lead end-to-end development of a full-stack accounting platform — Laravel, Angular, and React Native — for 500+ active business clients: a hardware-agnostic document engine for financial reporting and real-time transaction processing (Puppeteer document generation, thermal printing over ESC/POS and ZPL), a unified design system that replaced the legacy web and mobile interfaces, and data-driven financial dashboards with automated reporting. I drive technical direction through code review, feature scoping, and architectural roadmaps in a cross-functional Agile team, and brought AI-assisted development into the team's workflow.",
		"From August to October 2026 I was also part-time Chief Product Officer at Noqta, an early-stage restaurant operating system in Ramallah, where I wrote the product specifications and set up the release process.",
		"Before DeltaSmarts I spent two years at Mada, an ISP, leading Django and Flutter development for 40,000+ active clients — a versioned REST API layer with strict data contracts, project-wide Django unit testing, Docker across every production deployment, and a company site rebuilt on Wagtail. I started out in frontend at ASAL Technologies building modular React components, and spent 2025 freelancing end-to-end web applications (Yii 2, React) for small-business clients. BSc in Computer Science, Birzeit University (2019); Arabic native, English professional, Hebrew conversational.",
	],
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
