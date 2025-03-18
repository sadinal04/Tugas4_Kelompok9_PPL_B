import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';


const app: Application = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Interface untuk karakter
interface Character {
    id: number;
    name: string;
    age: number;
    power: string;
}

// Data awal
let characters: Character[] = [
    { id: 1, name: "Aulia Vika Rahman", age: 19, power: "Menghitung Aljabar" },
    { id: 2, name: "Sadinal Mufti", age: 21, power: "Menendang bola dengan akurat" },
    { id: 3, name: "M Habil Aswad", age: 21, power: "Membuat Machine Learning" }
];

// Endpoint API
app.get('/characters', (req: Request, res: Response): void => {
    res.json({ data: characters });
});

app.post('/characters', (req: Request, res: Response): void => {
    const { name, age, power } = req.body;
    const newCharacter: Character = { id: characters.length + 1, name, age, power };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});


// Jalankan server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
