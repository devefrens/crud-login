import express, { Request, Response }  from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import { ResultSetHeader } from 'mysql2';

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mudar123",
    database: "unicesumar"
});

// Middleware para permitir dados no formato JSON
app.use(express.json());
// Middleware para permitir dados no formato URLENCODED
app.use(express.urlencoded({ extended: true }));

app.get('/cadastro', async (req: Request, res: Response): Promise<void> => {
    try {
        const [rows] = await connection.query("SELECT * FROM users");
        res.json(rows);
    } catch(error) {
        console.error(error); // Para detalhes de erro
        res.status(500).send('Erro ao buscar usuários.');
    }
});

app.post('/cadastro', async (req: Request, res: Response): Promise<void> => {
    const { nome, email, senha } = req.body;

    if(!nome || !email || !senha) {
        res.status(400).send('Nome, e-mail e senha, são obrigatórios.');
        return;
    }

    try {
        // No POST /cadastro
        const [result] = await connection.execute<ResultSetHeader>(
            "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha]
        )
        res.status(201).json({message: 'Usuário cadastrado com sucesso!', userId: result.insertId});
    } catch(error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

app.get('/usuarios', async (req: Request, res: Response) => {
    try {
        const [rows] = await connection.query('SELECT id, nome, email, senha FROM users');
        res.json(rows);
    } catch(error) {
        res.status(500).json({error: 'Erro ao buscar usuários'});
    }
})

app.post('/login', async (req: Request, res: Response): Promise<void> => {
    const { email, senha } = req.body;
 
    if(!email || !senha) {
        res.status(400).json({message: 'E-mail e senha são obrigatórios.'});
        return;
    }

    try {
        // 🔹 Buscar o usuário pelo e-mail no banco
        const [rows]: any = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

        if(rows.length === 0) {
            res.status(401).json({ message: "Usuário não encontrado!" });
            return;
        }

        const usuario = rows[0];

        if (senha !== usuario.senha) {
            res.status(401).json({ message: "Senha incorreta!" });
            return;
        }        

        res.json({ message: 'Login realizado com sucesso.', userId: usuario.id, nome: usuario.nome });

    } catch(error) {
        console.error(error); // Para detalhes de erro
        res.status(500).send('Erro ao buscar usuários.');
    }
});

app.listen(port, () => {
    console.log(`Server is running port ${port}.`);
});
