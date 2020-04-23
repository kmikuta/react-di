import { Injectable } from "./core";

@Injectable()
export class Logger {
  public log(message: any, ...optionalParams: any[]): void {
    if (optionalParams.length > 0) {
      console.log(message, optionalParams);
      return;
    }
    console.log(message);
  }
}
