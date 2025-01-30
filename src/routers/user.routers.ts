import { Router } from "express";

import { userController } from "../controllers/user.controllers";
import { commonMiddlewares } from "../middlewares/common.middelwares";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);
router.post(
  "/",
  commonMiddlewares.validateBody(UserValidator.create),
  userController.create,
);

router.get(
  "/:userId",
  commonMiddlewares.isIdValid("userId"),
  userController.getUserById,
);
router.put(
  "/:userId",
  commonMiddlewares.isIdValid("userId"),
  commonMiddlewares.validateBody(UserValidator.update),
  userController.updateUser,
);
router.delete(
  "/:userId",
  commonMiddlewares.isIdValid("userId"),
  userController.deleteUser,
);

export const userRouter = router;
