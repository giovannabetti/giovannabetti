import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  return response.send("Olá, NLW 05");
  /*
  Poderia ser gerado um json:
  return response.json({
    message: "Olá, NLW 05",
  });
  */
});

app.post("/", (request, response) => {
  return response.json({ message: "User salvo com sucesso!" });
});
// Podemos usar Imsonia, Postman, Postwoman...

app.listen(3333, () => console.log("Server is running"));

// missãoespacial
// embuscadoproximonivel