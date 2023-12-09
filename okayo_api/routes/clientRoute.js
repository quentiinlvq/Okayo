const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste de tous les clients' });
});

router.get('/:id', (req, res) => {
  const clientId = req.params.id;
  res.json({ message: `Détails du client avec l'ID ${clientId}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Nouveau client créé' });
});

router.put('/:id', (req, res) => {
  const clientId = req.params.id;
  res.json({ message: `Client avec l'ID ${clientId} mis à jour` });
});

router.delete('/:id', (req, res) => {
  const clientId = req.params.id;
  res.json({ message: `Client avec l'ID ${clientId} supprimé` });
});

module.exports = router;
