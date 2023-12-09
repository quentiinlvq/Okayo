# Documentation API Okayo

## Endpoints

### Récupérer une entité (GET) : 
--> URL : '/nom_entite' (client, facture, produit, catalogue, logs, tva)

### Ajouter un client (POST)
--> Exemple requête :  
{
  "Id_Client": "1",
  "Nom": "Lévêque",
  "Prenom": "Quentin",
  "Adresse": "Croissy",
  "Telephone": "0658298797",
  "Mail": "qleveque21@gmail.com"
}
### Ajouter une facture (POST)
--> Exemple requête :  
{
    "Id_Facture": "0",
    "Date": "24-12-2023",
    "Total_HT": "84000.00",
    "Total_TTC": "99325.00",
    "entiteFacture": []
}
### Ajouter un produit (POST)
--> Exemple requête :  
{
    "Id_Produit": "A",
    "designation": "Mon produit A",
    "TVA": 5.5,
    "PU_HT": 1500.00
}
### Ajouter un catalogue (POST)
--> Exemple requête :  
{
    "id_catalogue": "0",
    "id_produit": "A",
    "dateDebut": "01-07-2024",
    "dateFin": "30-09-2024"
}
### Ajouter une TVA (POST)
--> Exemple requête :  
{
    "Id_TVA": "TVA001",
    "TVA": 20,
    "dateDebut": "09-12-2023",
    "dateFin": "" *non obligatoire*
}

### Supprimer un attribut d'une entité (DELETE) :
--> URL : '/nom_entite/Id_attribut

## Reponses
### Succès : 
Status 200 OK
### Erreur :
Status 400 Bad Request
