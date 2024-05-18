export default interface IManageSuscriptionController {
  create(req: Request, res: Response): any;
  findAll(res: Response): any;
  findOne(id: number): any;
  update(id: any, req: Request): any;
  remove(id: any): any;
}
