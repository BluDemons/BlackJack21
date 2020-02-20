function calculateScore(score, card) {
  // ace
  if (card.rank === "A") {
    score.hardTotal += 1;
    score.softTotal += score.softTotal + 11 > 21 ? 1 : 11;
  }
  // face cards
  else if (typeof card.rank === "string") {
    score.hardTotal += 10;
    score.softTotal += 10;
  } else {
    // non-face cards
    score.hardTotal += card.rank;
    score.softTotal += card.rank;
  }

  return score;
}

function calculateTotal(score) {
  if (score.hardTotal === 21 || score.softTotal === 21) {
    return 21;
  } else if (score.softTotal > 21) {
    return score.hardTotal;
  }

  return score.softTotal;
}

let _hand = new WeakMap();
let _stats = new WeakMap();

class Hand {
  constructor() {
    this.clear();
  }

  draw(card) {
    // adds a card to the hand
    let hand = _hand.get(this);
    hand.push(card);
    _hand.set(this, hand);

    // update stats
    _stats.set(this, calculateScore(_stats.get(this), card));

    return card;
  }

  clear() {
    _hand.set(this, []);
    _stats.set(this, {
      softTotal: 0,
      hardTotal: 0
    });
  }

  get scoreTotal() {
    return calculateTotal(_stats.get(this));
  }

  get scoreStats() {
    return _stats.get(this);
  }

  get cards() {
    return _hand.get(this);
  }

  get isBust() {
    return this.scoreTotal > 21;
  }

  get hasBlackjack() {
    return this.cards.length === 2 && this.scoreTotal === 21;
  }
}

module.exports={
    calculateScore,
    calculateTotal,
    Hand
}