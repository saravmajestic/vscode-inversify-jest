import "reflect-metadata";
import * as path from "path";
import Mocha from "mocha";
import { glob } from "glob";

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: "tdd",
    color: true,
  });

  const testsRoot = path.resolve(__dirname, "..");

  const testSuite = "./mocha/**/*.test.js";

  console.log("testsRoot", testsRoot, testSuite);

  return new Promise((resolve, reject) => {
    glob(testSuite, { cwd: testsRoot })
      .then((files: any[]) => {
        //   if (err) {
        //     return reject(err);
        //   }

        // Add files to the test suite
        files.forEach((f: string) => mocha.addFile(path.resolve(testsRoot, f)));

        try {
          // Run the mocha test
          mocha.run((failures) => {
            if (failures > 0) {
              reject(new Error(`${failures} tests failed.`));
            } else {
              resolve();
            }
          });
        } catch (err) {
          console.error(err);
          reject(err);
        }
      })
      .catch((err) => console.log(err));
  });
}
