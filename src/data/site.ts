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
			"Laravel + Inertia/React platform for DRM-protected video courses — role-based access for admins, instructors and students, VDOCipher behind a pluggable video-provider interface, and Docker + GitHub Actions CI/CD. I co-founded it with an experienced dentist and dentistry instructor, ahead of an upcoming release. The live link is a staging demo — sign in as admin@example.com, instructor@example.com, or student@example.com with the password “password”.",
		tags: ["Laravel", "Inertia + React", "TypeScript", "DRM video"],
		liveUrl: "https://top.mohannadjamal.dev",
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
		"Full-stack software engineer with five years building production web and mobile systems: accounting platforms, ISP stacks, and CMS.",
	role: "Full-stack software engineer · Jerusalem · 5 years",
	tagline:
		"From database schema to UI: production web and mobile systems across accounting/fintech, telecom, and CMS — serving 40,000+ users, shipped with AI-augmented workflows.",
	bio: [
		"Full-stack software engineer with five years building production systems end to end across web and mobile — accounting and fintech, telecom, and CMS platforms serving 40,000+ users. I own features from database schema to UI, and I work natively in AI-augmented workflows, using Claude Code, Claude Design and Cursor to ship faster without trading away quality.",
		"At DeltaSmarts I lead development of a full-stack accounting platform — Laravel, Angular, and React Native — for 500+ active business clients: invoicing, financial dashboards, automated reporting, and a hardware-agnostic document engine covering Puppeteer document generation and thermal printing (ESC/POS, ZPL). I also drive technical direction through code review, feature scoping, and architectural roadmaps in a cross-functional Agile team.",
		"Before that I spent two years at Mada, an ISP, leading Django and Flutter development for 40,000+ active subscribers — a versioned REST API layer with strict data contracts, project-based unit testing, Docker across every production deployment, and a company site rebuilt on Wagtail. I started out in frontend at ASAL building modular React components, and spent 2025 freelancing end-to-end web and mobile projects for small-business clients.",
	],
	skills: [
		"TypeScript",
		"JavaScript",
		"Python",
		"PHP",
		"Dart",
		"Laravel",
		"Django",
		"Wagtail",
		"Angular",
		"React",
		"Redux",
		"React Native",
		"Flutter",
		"Docker",
		"CI/CD",
		"PostgreSQL",
		"MySQL",
		"REST APIs",
		"Git",
		"Claude Code",
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
