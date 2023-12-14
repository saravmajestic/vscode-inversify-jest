import * as vscode from "vscode";
import { multiInject, injectable } from "inversify";
import TYPES from "../types";
import { Command } from "./command";

@injectable()
export class CommandsManager {
  constructor(@multiInject(TYPES.Command) private commands: Command[]) {}

  registerCommands(context: vscode.ExtensionContext) {
    for (const c of this.commands) {
      const cmd = vscode.commands.registerCommand(c.id, c.execute, c);
      context.subscriptions.push(cmd);
    }
  }
}
