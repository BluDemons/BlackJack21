function getWinner(playerScore, dealerScore) {
    switch(true) {
        case (playerScore === dealerScore):
        case (playerScore > 21 && dealerScore > 21):
            return null;
        case (playerScore > 21):
        case (dealerScore > playerScore && dealerScore <= 21):
            return false;
        default:
            return true;
    }
}

function dealerDrawing(dealerHand, deck, playerHand) {
    if (!playerHand.isBust && !playerHand.hasBlackjack) {
        for (let stats = dealerHand.scoreStats; (stats.hardTotal < 17) || (stats.softTotal === 17);) {
            dealerHand.draw(deck.deal());
        }
    }
}

function calculateWinPercentage(winCount, roundCount) {
    let num = (winCount / roundCount);
    num = isNaN(num) ? 0 : isFinite(num) ? num : 0;

    return +(num * 100).toFixed(2) + '%';
}

module.exports={
    getWinner,
    dealerDrawing,
    calculateWinPercentage
}