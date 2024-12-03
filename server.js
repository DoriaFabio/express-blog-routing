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

//definisco dove sono gli asset statici
app.use(express.static("public")); //http://localhost:5500/

const posts = require("./data/post.js");

//rotta /
app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

// rotta bacheca
app.get("/bacheca", (req, res) => {
  let response = {
    data: posts,
    counter: posts.length,
  };
  const postTitolo = req.query.titolo;
  if (postTitolo) {
    response.data = posts.filter(post => post.titolo.toLowerCase().includes(postTitolo.toLowerCase()));
    if (response.data.length < 1) {
      res.status(404);
      response = {
        error: 404,
        message: "Non ci sono post con questa ricerca"
      }
    }
  }
  res.json(response);
});

// rotta immagini
app.get("/ciambellone", (req, res) => {
  res.send(`<img src="images/ciambellone.jpeg">`);
});
app.get("/cracker", (req, res) => {
  res.send(`<img src="images/cracker_barbabietola.jpeg">`);
});
app.get("/pane", (req, res) => {
  res.send(`<img src="images/pane_fritto_dolce.jpeg">`);
});
app.get("/pasta", (req, res) => {
  res.send(`<img src="images/pasta_barbabietola.jpeg">`);
});
app.get("/torta", (req, res) => {
  res.send(`<img src="images/torta_paesana.jpeg">`);
});

//rotta fallback
app.all("*", (req, res) => {
  res.status(404).send("<h1>Error 404 - Not Found !</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}}`);
});