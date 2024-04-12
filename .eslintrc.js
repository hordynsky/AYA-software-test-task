module.exports = {
	root: true,
	env: {
		browser: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"no-console": "off",
		"no-unused-vars": ["error", { vars: "all", args: "none" }],
	},
};
