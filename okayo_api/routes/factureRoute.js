const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste de toutes les factures' });
});

router.get('/:id', (req, res) => {
  const factureId = req.params.id;
  res.json({ message: `Détails de la facture avec l'ID ${factureId}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Nouvelle facture créée' });
});

router.put('/:id', (req, res) => {
  const factureId = req.params.id;
  res.json({ message: `Facture avec l'ID ${factureId} mise à jour` });
});

router.delete('/:id', (req, res) => {
  const factureId = req.params.id;
  res.json({ message: `Facture avec l'ID ${factureId} supprimée` });
});

module.exports = router;