const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste de tous les logs' });
});

router.get('/:id', (req, res) => {
  const logId = req.params.id;
  res.json({ message: `Détails du log avec l'ID ${logId}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Nouveau log créé' });
});

router.put('/:id', (req, res) => {
  const logId = req.params.id;
  res.json({ message: `Log avec l'ID ${logId} mis à jour` });
});

router.delete('/:id', (req, res) => {
  const logId = req.params.id;
  res.json({ message: `Log avec l'ID ${logId} supprimé` });
});

module.exports = router;