import { Create, Update } from "./interfaces/ManageSuscriptionInterface";
import IManageSuscriptionService from "./interfaces/IManageSuscriptionService.interface";

class ManagementSuscriptionService implements IManageSuscriptionService {
  constructor() {}
  findAll() {
    return [
      {
        id: 1,
        title: "first todo",
        content: "a task to execute",
      },
      {
        id: 2,
        title: "second todo",
        content: "another task to execute",
      },
    ];
  }

  findOne(id: number) {
    console.log("llega a get servicio", id);
    const infofake = [
      {
        id: 1,
        title: "first todo",
        content: "a task to execute",
      },
      {
        id: 2,
        title: "second todo",
        content: "another task to execute",
      },
    ];

    return infofake.find((todo) => +todo.id === +id);
  }

  create(create: Create) {
    return create;
    // Lógica para crear una suscripcion
  }

  update(id: number, update: Update) {
    return {
      id: id,
      ...update,
    };
  }

  delete(id: number) {
    return {
      id: id,
      message: "deleted",
    };
  }
}

export default ManagementSuscriptionService;
