import { injectable, inject } from "inversify";

import TYPES from "../types";

import { Command } from "./command";
import { Printer } from "../utils/printer";

@injectable()
export class AddCommand implements Command {
  constructor(@inject(TYPES.Printer) private printer: Printer) {}

  get id() {
    return "extension.add";
  }

  execute(...args: any[]) {
    this.printer.print("AddCommand");
  }
}
