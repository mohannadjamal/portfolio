export const site = {
	lang: "en",
	name: "Your Name",
	title: "Your Name — Portfolio",
	description:
		"Portfolio of Your Name — developer and builder of thoughtful web experiences.",
	role: "Developer & builder",
	tagline: "I craft fast, accessible websites and tools that solve real problems.",
	bio: [
		"Replace this paragraph with a short introduction: who you are, what you care about, and what kind of work you want to do next.",
		"Add a second paragraph for background, education, or what you are learning lately — keep it friendly and specific.",
	],
	skills: [
		"TypeScript",
		"Astro",
		"CSS",
		"Accessibility",
		"Performance",
	],
	projects: [
		{
			title: "Project Alpha",
			summary: "A concise description of what you built and the impact it had.",
			tags: ["Astro", "UX"],
			liveUrl: "https://example.com",
			sourceUrl: "https://github.com",
		},
		{
			title: "Project Beta",
			summary: "Another placeholder card — swap titles, links, and tags for your real work.",
			tags: ["API", "Automation"],
			liveUrl: "",
			sourceUrl: "",
		},
		{
			title: "Project Gamma",
			summary: "Short enough for recruiters to scan; link out for depth.",
			tags: ["Design", "Frontend"],
			liveUrl: "https://example.com",
			sourceUrl: "",
		},
	],
	email: "you@example.com",
	social: {
		github: "https://github.com",
		linkedin: "https://linkedin.com",
	},
} as const;
