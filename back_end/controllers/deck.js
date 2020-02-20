class Fabrica {
  constructor() {
    this.mazo = [];
    this.carta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    this.palo = ["♦", "♣", "♥", "♠"];
  }

  create() {
    this.carta.forEach(carta => {
      this.palo.forEach(palos => {
        this.mazo.push({ carta, palos });
      });
    });

    return this.mazo;
  }

  obtenerRandomCard() {
    this.actualizarMazo = this.mazo;
    this.randomIndex = Math.floor(Math.random() * this.actualizarMazo.length);
    this.cartaRandom = this.actualizarMazo[this.randomIndex];
    this.actualizarMazo.splice(this.randomIndex, 1);
    return [this.cartaRandom, this.actualizarMazo];
  }

  getCount() {
    this.rearranged = [];
    this.carta.forEach(card => {
      if (card.carta === "A") {
        this.rearranged.push(card);
      } else if (card.carta) {
        this.rearranged.unshift(card);
      }

      // (card.number === 'A') ? rearranged.push(card) : rearranged.unshift(card);
    });

    return this.rearranged.reduce((total, card) => {
      if (card.carta === "J" || card.carta === "Q" || card.carta === "K") {
        return total + 10;
      } else if (card.carta === "A") {
        return total + 11 <= 21 ? total + 11 : total + 1;
      } else {
        return total + card.carta;
      }
    }, 0);
  }

  dealCards() {
    this.playerCard1 = this.obtenerRandomCard(this.mazo);
    this.dealerCard1 = this.obtenerRandomCard(this.playerCard1);
    this.playerCard2 = this.obtenerRandomCard(this.dealerCard1);
    this.playerStartingHand = this.obtenerRandomCard(this.playerCard1.cartaRandom, this.playerCard2.cartaRandom);
    this.dealerStartingHand = this.obtenerRandomCard(this.dealerCard1.cartaRandom, {});

    this.player = [
      this.cards= this.playerStartingHand,
      this.count= this.getCount(this.playerStartingHand)
    ];
    this.dealer = [
      this.cards= this.dealerStartingHand,
      this.count= this.getCount(this.dealerStartingHand)
    ];

    return [this.actualizarMazo=this.obtenerRandomCard(this.playerCard2.actualizarMazo), this.player, this.dealer];
  }

}
const x = new Fabrica();
x.create();
x.obtenerRandomCard();
x.dealCards();
console.log(x)

module.exports = {
  Fabrica
};
