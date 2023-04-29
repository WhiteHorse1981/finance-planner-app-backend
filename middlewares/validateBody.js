const { requestError } = require('../helpers');

function validateBody(schema) {
  const fn = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw requestError(400, error.message);
    }
    next();
  };
  return fn;
}

module.exports = validateBody;
