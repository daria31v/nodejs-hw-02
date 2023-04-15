const { HttpError } = require("../helpers");


const validateBodyUpdateContact = (schema) => {
    const func = (req, res, next) => {
      console.log(req.body);
      const { error } = schema.validate(req.body);
      if (!req.body || error) {
        throw HttpError(400, "missing fields");
      }
      next();
    };
    func.schema = schema;
    return func;
  };

module.exports = validateBodyUpdateContact