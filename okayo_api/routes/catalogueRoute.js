const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste de tous les catalogues' });
});

router.get('/:id', (req, res) => {
  const catalogueId = req.params.id;
  res.json({ message: `Détails du catalogue avec l'ID ${catalogueId}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Nouveau catalogue créé' });
});

router.put('/:id', (req, res) => {
  const catalogueId = req.params.id;
  res.json({ message: `Catalogue avec l'ID ${catalogueId} mis à jour` });
});

router.delete('/:id', (req, res) => {
  const catalogueId = req.params.id;
  res.json({ message: `Catalogue avec l'ID ${catalogueId} supprimé` });
});

module.exports = router;
