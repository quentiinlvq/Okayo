const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste de toutes les TVA' });
});

router.get('/:id', (req, res) => {
  const tvaId = req.params.id;
  res.json({ message: `Détails de la TVA avec l'ID ${tvaId}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Nouvelle TVA créée' });
});

router.put('/:id', (req, res) => {
  const tvaId = req.params.id;
  res.json({ message: `TVA avec l'ID ${tvaId} mise à jour` });
});

router.delete('/:id', (req, res) => {
  const tvaId = req.params.id;
  res.json({ message: `TVA avec l'ID ${tvaId} supprimée` });
});

module.exports = router;