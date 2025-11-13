import http from "node:http";
import { randomUUID } from "node:crypto";
import { json } from "../middlewares/json.js";
import { Database } from "../middlewares/database.js";

const database = new Database();

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    // Middleware que converte os dados da requisição em JSON
    await json(req, res);

    if (method === "GET" && url === "/users") {
        const users = database.select("users");
        return res.end(JSON.stringify(users));
    }

    if (method === "POST" && url === "/users") {
        const { name, email } = req.body;

        const user = {
            id: randomUUID(), // Cria ID único
            name,
            email
        };

        database.insert("users", user);

        return res.writeHead(201).end(JSON.stringify(user));
    }

    return res.writeHead(404).end("Not Found");
});

server.listen(3333);

