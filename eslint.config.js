import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

export default [
	{ ignores: ["web-ext-artifacts/**", "node_modules/**"] },
	{
		...js.configs.recommended,
		files: ["shared/**/*.js", "chrome/**/*.js"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.webextensions },
		},
	},
	...ts.configs.recommended.map((config) => ({
		...config,
		files: ["test/**/*.ts"],
	})),
];
