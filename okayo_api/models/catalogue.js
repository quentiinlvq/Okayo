class Catalogue {
  constructor(id_catalogue, id_produit, dateDebut, dateFin) {
    this.id_catalogue = id_catalogue;
    this.id_produit = id_produit;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
  }
}

module.exports = Catalogue;