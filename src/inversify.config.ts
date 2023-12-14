import "reflect-metadata";

import { Container } from "inversify";
import TYPES from "./types";
import { Printer } from "./utils/printer";
import { ConsolePrinter } from "./utils/console-printer";
import { AddCommand } from "./commands/add-command";
import { Command } from "./commands/command";
import { RemoveCommand } from "./commands/remove-command";
import { CommandsManager } from "./commands/commands-manager";

const container = new Container();
container.bind<Printer>(TYPES.Printer).to(ConsolePrinter);
container.bind<Command>(TYPES.Command).to(AddCommand);
container.bind<Command>(TYPES.Command).to(RemoveCommand);
container.bind<CommandsManager>(TYPES.CommandManager).to(CommandsManager);

export default container;
