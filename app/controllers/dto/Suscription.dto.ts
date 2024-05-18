export class SuscriptionDto {
  id: number = 0;
  name: string = "";
  description: string = "";
  price: number = 0;
  duration: number = 0;
  email: string = "";
  type_suscription: string = "";

  constructor(partial: Partial<SuscriptionDto>) {
    Object.assign(this, partial);
  }
}
