class Produit {
    constructor(id_produit, designation, TVA, PU_HT) {
        this.id = id_produit;
        this.designation = designation;
        this.TVA = TVA;
        this.PU_HT = PU_HT;
    }
}

module.exports = Produit;