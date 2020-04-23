import React, { useContext } from "react";
import {
  Container,
  interfaces,
  injectable,
  ContainerModule,
  inject,
  unmanaged,
} from "inversify";
import "reflect-metadata";

export const DiContext = React.createContext<Container | null>(null);
export const Injectable = injectable;
export const Inject = inject;
export const Unmanaged = unmanaged;

export function createContainer(...modules: ContainerModule[]) {
  const container = new Container({ defaultScope: "Singleton" });
  modules.forEach((m) => container.load(m));
  return container;
}

export function createModule(
  registry: interfaces.ContainerModuleCallBack
): ContainerModule {
  return new ContainerModule(registry);
}

export function useDependency<T>(
  identifier: interfaces.ServiceIdentifier<T>
): T {
  const context = useContext(DiContext);
  if (context !== null) {
    return context!.get(identifier);
  }
  throw new Error("Dependency injection context was not provided!");
}
