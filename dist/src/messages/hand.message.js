"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HandMessage {
    static get(hand) {
        let response = `Your hand for this round:\n`;
        hand.forEach(card => response += `${card.value} ${card.color} ${card.rigged}\n`);
        return response;
    }
}
exports.HandMessage = HandMessage;
//# sourceMappingURL=hand.message.js.map