interface Validator {
  validate(req: Request, res: Response, next: Function): void;
}
