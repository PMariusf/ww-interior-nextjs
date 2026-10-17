import { spawnSync } from "node:child_process";

const installArgs = ["install", "--frozen-lockfile"];
const options = { stdio: "inherit" };

function run(command, args) {
  const result = spawnSync(command, args, options);
  if (result.error?.code === "ENOENT") return { missing: true };
  if (result.error) {
    console.error(`Could not start ${command}: ${result.error.message}`);
    process.exit(1);
  }
  return { status: result.status ?? 1, signal: result.signal };
}

// Corepack reads the pnpm version pinned in package.json. This works on
// macOS, Windows, and Linux; unlike install-pnpm.sh it needs no GNU-only tools.
const corepack = run("corepack", ["pnpm", ...installArgs]);
if (!corepack.missing) {
  if (corepack.status !== 0) process.exit(corepack.status);
  process.exit(0);
}

// Node installations without Corepack can still install the exact pinned pnpm.
const npx = run("npx", ["--yes", "pnpm@11.25.0", ...installArgs]);
if (npx.missing) {
  console.error("Install Node.js 22.13+ with Corepack, or install pnpm 11.25.0.");
  process.exit(1);
}
process.exit(npx.status);
