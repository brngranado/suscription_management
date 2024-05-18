import { Router } from "express";
import { DependencyInjectorCore } from "../config/core/DependencyInjectorCore";
import ManagementSuscriptionController from "../controllers/ManagementSuscription.controller";
const router = Router();
router
  .route("/")
  .get((req, res, next) => {
    const injector = DependencyInjectorCore.getInstance();
    const suscriptionController = injector.resolve(
      ManagementSuscriptionController
    );
    const listData = suscriptionController.findAll();
    res.status(200).json(listData);
  })
  .post((req, res, next) => {
    const injector = DependencyInjectorCore.getInstance();
    const suscriptionController = injector.resolve(
      ManagementSuscriptionController
    );
    const createData = suscriptionController.create(req, res);
    res.status(201).json(createData);
  });
router
  .route("/:id")
  .get((req, res, next) => {
    const id = req.params.id;
    const injector = DependencyInjectorCore.getInstance();
    const suscriptionController = injector.resolve(
      ManagementSuscriptionController
    );
    const findedSuscription = suscriptionController.findOne(id);
    res.status(200).json(findedSuscription);
  })
  .put((req, res, next) => {
    const id = req.params.id;
    const injector = DependencyInjectorCore.getInstance();
    const suscriptionController = injector.resolve(
      ManagementSuscriptionController
    );
    const updatedSuscription = suscriptionController.update(id, req);
    res.status(201).json(updatedSuscription);
  })
  .delete((req, res, next) => {
    const id = req.params.id;
    const injector = DependencyInjectorCore.getInstance();
    const suscriptionController = injector.resolve(
      ManagementSuscriptionController
    );
    const remove = suscriptionController.remove(id);
    res.status(200).json(remove);
  });
export default router;
