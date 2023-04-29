const express = require('express');
const router = express.Router();
const { controllerWrapper } = require('../../helpers/');
const { personalSchema, prePersonalSchema } = require('../../schemas/personal');

const Personal = require('../../controllers/personal/');
const { authenticate } = require('../../middlewares');

const { validateBody } = require('../../middlewares');


router.post(
  '/pre',
  authenticate,
  validateBody(prePersonalSchema),
  controllerWrapper(Personal.personalPlan)
);

router.post(
  '/',
  authenticate,
  validateBody(personalSchema),
  controllerWrapper(Personal.addPersonalPlan)
);

router.get('/', authenticate, controllerWrapper(Personal.getPersonalPlan));

router.put('/', authenticate, validateBody(personalSchema), controllerWrapper(Personal.updatePersonalPlan));

module.exports = router;
