const User = require("../models/User.model");
const userService = require("../service/user-service");
require("dotenv").config();
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

module.exports.userController = {
  userRegistrationController: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BodRequest("Ошибка Не правильный email", errors.array())
        );
      }
      const {name, lastName, login, email, password } = req.body;
      const userData = await userService.registration(name, lastName, login, email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  },

  activateController: async (req, res, next) => {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  },

  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.json(token);
    } catch (error) {
      next(error);
    }
  },

  refresh: async (req, res, next) => {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next();
    }
  },

  patchController: async (req, res) => {
    try {
      const { name, lastName, role } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          name,
          lastName,
        },
        { new: true }
      );

      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  deleteController: async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (error) {
      next(error);
    }
  },
};
