class Card {
    static getType() { return "com.cpe.springboot.card.Card" }

    constructor({name, description, family, affinity, imgUrl, smallImgUrl, id ,energy,hp,defence,attack,price,userId}) {
        this.id = id;
        this.hp = hp;
        this.energy = energy;
        this.defence = defence;
        this.attack = attack;
        this.price = price;
        this.userId = userId;
        this.name=name;
        this.description=description;
        this.family=family;
        this.affinity=affinity;
        this.imgUrl=imgUrl;
        this.smallImgUrl=smallImgUrl;
    }
}

module.exports = Card;