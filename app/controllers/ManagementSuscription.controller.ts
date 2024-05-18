import { Request, Response } from "express";
import ManagementSuscriptionService from "../services/ManagementSuscription.service";
import IManageSuscriptionController from "./interfaces/IManageSuscriptionController.interface";
import { DependencyInjectorCore } from "../config/core/DependencyInjectorCore";
import { SuscriptionDto } from "./dto/Suscription.dto";
class ManagementSuscriptionController implements IManageSuscriptionController {
  create(req: any): any {
    const createData: SuscriptionDto = req.body;
    const injector = DependencyInjectorCore.getInstance();
    const fd = injector.resolve(ManagementSuscriptionService);
    const newSuscription = fd.create(createData);
    return newSuscription;
  }

  findAll(): any {
    const injector = DependencyInjectorCore.getInstance();
    const fd = injector.resolve(ManagementSuscriptionService);
    const listSuscription = fd.findAll();
    return listSuscription;
  }

  findOne(id: number): any {
    const injector = DependencyInjectorCore.getInstance();
    const fd = injector.resolve(ManagementSuscriptionService);
    const findOneSuscription = fd.findOne(id);
    return findOneSuscription;
  }

  update(id: number, req: any): any {
    const updateData: SuscriptionDto = req.body;
    const injector = DependencyInjectorCore.getInstance();
    const fd = injector.resolve(ManagementSuscriptionService);
    const findOneSuscription = fd.update(id, updateData);
    return findOneSuscription;
  }

  remove(id: number): any {
    const injector = DependencyInjectorCore.getInstance();
    const fd = injector.resolve(ManagementSuscriptionService);
    const deleteSuscription = fd.delete(id);
    return deleteSuscription;
  }
}

export default ManagementSuscriptionController;
