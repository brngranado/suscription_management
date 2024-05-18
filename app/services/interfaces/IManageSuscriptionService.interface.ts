import { Create, Update } from "./ManageSuscriptionInterface";
export default interface IManageSuscriptionService {
  findAll(): void;
  findOne(id: number): void;
  create(create: Create): void;
  update(id: number, update: Update): void;
  delete(id: number): void;
}
