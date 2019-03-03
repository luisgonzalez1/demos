"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.pizzaRouter = express_1.default.Router();
let pizza = [
    {
        name: 'supreme',
        size: 'large'
    },
    {
        name: 'buffalo',
        size: 'large'
    }
];
exports.pizzaRouter.get('', (req, resp) => {
    console.log('retreiving all pizzas');
    resp.json(pizza);
});
exports.pizzaRouter.get('/name/:name', (req, resp) => {
    const name = req.params.name;
    console.log(`retreiving pizza with name ${name}`);
    for (let p of pizza) {
        if (p.name === name) {
            resp.json(p);
            return;
        }
    }
    resp.end();
});
exports.pizzaRouter.get('/size/:size', (req, resp) => {
    const size = req.params.size;
    console.log(`retreiving pizza with size ${size}`);
    const filtered = pizza.filter((p) => p.size === size);
    resp.json(filtered);
});
exports.pizzaRouter.post('', (req, resp) => {
    console.log(`adding pizza: ${JSON.stringify(req.body)}
  to pizzas`);
    if (!req.body.name || !req.body.size) {
        resp.sendStatus(400);
    }
    else {
        const p = {
            name: req.body.name,
            size: req.body.size
        };
        pizza.push(p);
        resp.sendStatus(201);
    }
});
exports.pizzaRouter.delete('/name/:name', (req, resp) => {
    pizza = pizza.filter((p) => p.name !== req.params.name);
    resp.end();
});
//# sourceMappingURL=pizza-router.js.map