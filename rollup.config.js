import typescript from "@rollup/plugin-typescript";

export default {
	input: "generated/index.ts",
	output: {
		dir: "dist",
		format: "esm",
	},
	plugins: [typescript()],
};
