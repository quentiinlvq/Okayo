class Log {
    constructor(Id_Log, date_heure, typeEntite, idEntite, champModifie, Old_Value, New_Value, User) {
        this.Id_Log = Id_Log;
        this.date_heure = date_heure;
        this.typeEntite = typeEntite;
        this.idEntite = idEntite;
        this.champModifie = champModifie;
        this.Old_Value = Old_Value;
        this.New_Value = New_Value;
        this.User = User;
    }
}

module.exports = Log;