const express = require('express');
const app = express();

const catalogueRoute = require('./routes/catalogueRoute');
const factureRoute = require('./routes/factureRoute');
const logRoute = require('./routes/logsRoute');
const tvaRoute = require('./routes/tvaRoute');
const clientRoute = require('./routes/clientRoute'); 
const produitRoute = require('./routes/produitRoute'); 

app.use('/catalogue', catalogueRoute);
app.use('/facture', factureRoute);
app.use('/logs', logRoute);
app.use('/tva', tvaRoute);
app.use('/client', clientRoute); 
app.use('/produit', produitRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
