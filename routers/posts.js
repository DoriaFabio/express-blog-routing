const express = require("express");
const router = express.Router();

const blog = require("../data/post.js");  // Tutti i posts

// index
router.get("/", (req, res) => {
    const itemName = req.query.titolo;
    console.log(itemName);
    let response = {
      count: blog.length,
      data: [...blog],
      // copia dell'array nel caso dovessimo filtrare i dati
    };
    res.json(response);
  });
  
  // leggere una sola pizza - Read one - Show
  router.get("/:id", (req, res) => {
    //pizzas/1/
    console.log(req.params);
    const id = parseInt(req.params.id);
    const item = blog.find((item) => item.id === id);
    if (item) {
      res.json({
        success: true,
        item,
      });
    } else {
      res.status(404);
      res.json({
        success: false,
        message: `Il post ${id} non esiste`,
      });
    }
  });
  
  //Create - Store
  router.post("/", (req, res) => {
    res.send("Creazione nuovo post");
  });
  
  //Update totale - Update
  router.put("/:id", (req, res) => {
    res.send(`Modifica integrale del post ${id}`);
  });
  
  //Update parziale - Modify
  router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post ${id}`);
  });
  
  //Delete (cancellazione) - Destroy
  router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post ${id}`);
  });
  
  module.exports = router;