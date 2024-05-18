function validateRequest(validators: Validator[]) {
  return function (req: Request, res: Response, next: Function) {
    for (const validator of validators) {
      validator.validate(req, res, next);
    }
  };
}
