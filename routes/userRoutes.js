const express = require("express");
const {
  getUser,
  getUsers,
  login,
  getChildren,
  forgotPassword,
  resetPassword,
  getParents,
  register,
  editProfile,
  getUserForUser,
} = require("../controllers/userController");
const { userAuth, adminAuth } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.get("/user", userAuth, adminAuth, getUsers);
router.get("/user/children", getChildren);
router.get("/user/parents", getParents);
router.get("/user/profile", userAuth, getUser);
router.post("/user/register", register);
router.post("/user/forgotPassword", forgotPassword);
router.post("/user/resetPassword", resetPassword);
router.get("/userForUser", userAuth, getUserForUser);

router.put("/user", userAuth, editProfile);
router.post("/login", login);

module.exports = router;
