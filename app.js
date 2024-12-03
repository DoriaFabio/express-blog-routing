/*
*Esercizio*
Usando l'array dei post con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessarie per l'entità post.
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
Ad esempio:
Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
e via dicendo… 
Registrare il router dentro app.js con il prefisso /posts.
*Bonus*
- Provare a restituire la lista dei post dalla rotta index, in formato json
- Provare a restituire un singolo post dalla rotta show, sempre in formato json
*/

const express = require("express");
const app = express();
const PORT = 5500;

const postsRouter = require("./routers/posts");
//definisco dove sono gli asset statici
app.use(express.static("public")); //http://localhost:5500/


//rotte API
app.use("/posts", postsRouter);


//rotta fallback
app.all("*", (req, res) => {
  res.status(404).send("<h1>Error 404 - Not Found !</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}}`);
});