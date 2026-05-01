export const site = {
	lang: "en",
	name: "Mohannad Jamal",
	title: "Mohannad Jamal — Full-stack software engineer",
	description:
		"Full-stack software engineer with five years building production web and mobile systems: accounting platforms, ISP stacks, and CMS.",
	role: "Software engineer · Full stack · 5 years",
	tagline:
		"Shipping end-to-end systems from database schema to UI — accounting, ISP platforms, and agile product teams.",
	bio: [
		"Full-stack engineer with five years architecting production systems across web and mobile: accounting software, ISP tooling, and CMS rebuilds. I own features end to end, collaborate in larger codebases, and lean on strong tooling and clear APIs.",
		"At DeltaSmarts I build and maintain a full-stack accounting platform — Laravel, Angular SPA, and React Native — for 500+ active clients: invoicing, financial reporting, asset management, document generation with Puppeteer, and thermal printing (ESC/POS, ZPL). Previously at Mada I shipped Django and Flutter apps for 40,000+ ISP subscribers and rebuilt the marketing site on Wagtail.",
	],
	skills: [
		"TypeScript",
		"JavaScript",
		"Python",
		"PHP",
		"Laravel",
		"Django",
		"Angular",
		"React",
		"React Native",
		"Flutter",
		"Docker",
		"PostgreSQL",
		"REST APIs",
		"Git",
	],
	projects: [
		{
			title: "Personal site",
			summary:
				"Static Astro build with Docker image and GitHub Actions CI/CD — project highlights and a downloadable PDF CV — Hosted on my own local server.",
			tags: ["Astro", "Docker", "CI/CD"],
			liveUrl: "https://www.mohannadjamal.dev",
			sourceUrl: "https://github.com/mohannadjamal/portfolio",
		},
	],
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
