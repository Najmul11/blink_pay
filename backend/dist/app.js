"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const API_not_found_1 = require("./utils/API-not-found");
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`<p>{App_NAME} server running on PORT ${config_1.default.port}</p>
  <a href="${config_1.default.frontend_url}">visit frontend</a>
  `);
});
app.use('/api/v1', routes_1.routes);
// middleware
// app.use(globalErrorhandler);
app.use(API_not_found_1.apiNotFound);
exports.default = app;
