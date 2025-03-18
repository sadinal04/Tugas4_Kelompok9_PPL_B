"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
// Data awal
let characters = [
    { id: 1, name: "Aulia Vika Rahman", age: 19, power: "Menghitung Aljabar" },
    { id: 2, name: "Sadinal Mufti", age: 21, power: "Menendang bola dengan akurat" },
    { id: 3, name: "M Habil Aswad", age: 21, power: "Membuat Machine Learning" }
];
// Endpoint API
app.get('/characters', (req, res) => {
    res.json({ data: characters });
});
app.post('/characters', (req, res) => {
    const { name, age, power } = req.body;
    const newCharacter = { id: characters.length + 1, name, age, power };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});
// Jalankan server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
