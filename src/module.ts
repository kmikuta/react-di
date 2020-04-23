import { interfaces } from "inversify";
import { Logger } from "./logger";
import { createModule } from "./core";

export const appModule = createModule((bind: interfaces.Bind) => {
  bind<Logger>(Logger).to(Logger);
});
