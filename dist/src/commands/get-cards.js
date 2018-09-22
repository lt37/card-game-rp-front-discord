"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_service_1 = require("../services/card.service");
module.exports = {
    name: 'get-deck',
    description: 'Shows the content of the deck',
    usage: `<${this.name}>`,
    execute(message, args) {
        let response = `Deck content:\n`;
        card_service_1.CardService.Instance().getDeck().forEach(card => response += `${card.color} ${card.value} ${card.rigged}\n`);
        let response1 = response.substring(0, 1000);
        message.channel.send(response1);
    }
};
//# sourceMappingURL=get-cards.js.map