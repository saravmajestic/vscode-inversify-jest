import { injectable } from "inversify";
import { Printer } from "./printer";

@injectable()
export class ConsolePrinter implements Printer {
  print(message: string): void {
    console.log(message);
  }
}
