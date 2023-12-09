const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste de tous les produits' });
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Détails du produit avec l'ID ${productId}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Nouveau produit créé' });
});

router.put('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Produit avec l'ID ${productId} mis à jour` });
});

router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Produit avec l'ID ${productId} supprimé` });
});

module.exports = router;