import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';
import { Container } from "inversify";
import TYPES from "../../types";
import { CommandsManager } from "../../commands/commands-manager";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  let container: Container;
  setup("Load Extension", async () => {
    const ext = vscode.extensions.getExtension(
      "saravmajestic.vscode-inversify-jest"
    );
    container = await ext!.activate();
    const cmdManager = container.get<CommandsManager>(TYPES.CommandManager);
    console.log("cmdManager in tests", cmdManager);
    console.log("extension activated");
  });

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
