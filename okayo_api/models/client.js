class Client {
    constructor(Id_Client, Nom, Prenom, Adresse, Telephone, Mail) {
        this.Id_Client = Id_Client;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Adresse = Adresse;
        this.Telephone = Telephone;
        this.Mail = Mail;
    }
}

module.exports = Client;