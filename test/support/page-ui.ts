import type { Window } from "happy-dom";

const PART_SELECTORS = {
	overlay: ".xcommunity-oauth-overlay",
	card: ".xcommunity-oauth-card",
	button: ".xcommunity-oauth-button",
	error: ".xcommunity-oauth-error",
	title: ".xcommunity-oauth-token-title",
	token: ".xcommunity-oauth-token",
	copy: ".xcommunity-oauth-token-copy",
	status: ".xcommunity-oauth-token-status",
	note: ".xcommunity-oauth-token-note",
} as const;

export type PagePart = keyof typeof PART_SELECTORS;

export const pageUi = (window: Window) => {
	const find = (part: PagePart) =>
		window.document.querySelector(PART_SELECTORS[part]);

	const element = (part: PagePart) => {
		const found = find(part);
		if (!(found instanceof window.HTMLElement)) {
			throw new Error(`the page shows no ${part}`);
		}
		return found;
	};

	const button = (part: PagePart) => {
		const found = find(part);
		if (!(found instanceof window.HTMLButtonElement)) {
			throw new Error(`the page shows no ${part} button`);
		}
		return found;
	};

	return {
		find,
		get overlay() {
			return element("overlay");
		},
		get card() {
			return element("card");
		},
		get button() {
			return button("button");
		},
		get error() {
			return element("error");
		},
		get title() {
			return element("title");
		},
		get token() {
			return element("token");
		},
		get copy() {
			return button("copy");
		},
		get status() {
			return element("status");
		},
		get note() {
			return element("note");
		},
	};
};

export type PageUi = ReturnType<typeof pageUi>;
