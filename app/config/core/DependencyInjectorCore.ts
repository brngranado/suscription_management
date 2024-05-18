export class DependencyInjectorCore {
  private static instance: DependencyInjectorCore;
  private dependencies: Map<any, any>;

  public constructor() {
    this.dependencies = new Map();
  }

  static getInstance(): DependencyInjectorCore {
    if (!DependencyInjectorCore.instance) {
      DependencyInjectorCore.instance = new DependencyInjectorCore();
    }
    return DependencyInjectorCore.instance;
  }

  public register(token: any, implementation: any): void {
    this.dependencies.set(token, implementation);
  }

  public resolve(token: any): any {
    const implementation = this.dependencies.get(token);
    if (!implementation) {
      throw new Error(
        `No se encontró una implementación para el token ${token}`
      );
    }
    return new implementation();
  }
}
