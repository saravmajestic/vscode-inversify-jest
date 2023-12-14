import * as path from "path";

import {
  downloadAndUnzipVSCode,
  resolveCliArgsFromVSCodeExecutablePath,
  runTests,
} from "@vscode/test-electron";

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, "../../");

    const version = "1.85.1";

    // Download VS Code, unzip it and run the integration test
    const vscodeExecutablePath = await downloadAndUnzipVSCode(version);
    const [cliPath, ...args] =
      resolveCliArgsFromVSCodeExecutablePath(vscodeExecutablePath);

    // Run the extension test without python extension
    await runTests({
      // Use the specified `code` executable
      vscodeExecutablePath: vscodeExecutablePath,
      extensionDevelopmentPath: extensionDevelopmentPath,
      extensionTestsPath: path.resolve(
        __dirname,
        `./suite/${process.env.testType}/index.js`
      ),
      version: version,
      launchArgs: [],
      extensionTestsEnv: {},
    });
    console.log("Tests passed");
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Run ended with error", err);
  process.exit(1);
});
