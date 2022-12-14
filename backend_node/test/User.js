class User {
    static getType() { return "com.cpe.springboot.user.User" }

    constructor({id, login, password, account, lastName, surName, email,cardList}) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.email = email;
        this.account = account;
        this.lastName = lastName;
        this.surName = surName;
        this.cardList=cardList;
    }
}

module.exports = User;