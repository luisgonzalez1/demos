"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pizza_router_1 = require("./routers/pizza-router");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3000;
app.set('port', port);
/**
 * Log all requests url and method to the console
 */
app.use((req, resp, next) => {
    console.log(`request was made with url: ${req.path}
and method: ${req.method}`);
    next();
});
// Register the body parser to convert request json to an actual object
app.use(body_parser_1.default.json());
/************************************************************
 * Register Routers
 ***********************************************************/
app.use('/pizzas', pizza_router_1.pizzaRouter);
app.listen(port, () => {
    console.log(`app is running at http://localhost:${app.get('port')}`);
});
//# sourceMappingURL=index.js.map