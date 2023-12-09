class Facture {
    constructor(Id_Facture, Date, Total_HT, Total_TTC, entiteFacture) {
        this.Id_Facture = Id_Facture;
        this.Date = Date;
        this.Total_HT = Total_HT;
        this.Total_TTC = Total_TTC;
        this.entiteFacture = entiteFacture;
    }
}

module.exports = Facture;