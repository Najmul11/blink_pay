"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
];
allRoutes.forEach(route => router.use(route.path, route.route));
exports.routes = router;
