import { DependencyInjectorCore } from "./DependencyInjectorCore";
import ManagementSuscriptionController from "../../controllers/ManagementSuscription.controller";
import ManagementSuscriptionService from "../../services/ManagementSuscription.service";
/**
 * Inyecció́n de dependencias
 * @description Si se quiere inyectar una dependencia se debe registrar en el constructor a traves del metodo register
 * para que una vez que inicializar el servidor se inyecte la dependencia
 */
export const injector = DependencyInjectorCore.getInstance();
injector.register(
  ManagementSuscriptionController,
  ManagementSuscriptionController
);
injector.register(ManagementSuscriptionService, ManagementSuscriptionService);
