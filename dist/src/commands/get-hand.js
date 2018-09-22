"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_service_1 = require("../services/player.service");
const hand_message_1 = require("../messages/hand.message");
module.exports = {
    name: 'hand',
    description: 'Shows your hand.',
    usage: `<${this.name}>`,
    execute(message, args) {
        let player = player_service_1.PlayerService.Instance().getPlayers().filter(p => p.id === message.author.id)[0];
        if (!player) {
            message.reply(`You're not a player!`);
            return;
        }
        let hand = player.hand;
        const response = hand_message_1.HandMessage.get(hand);
        message.author.send(response);
    }
};
//# sourceMappingURL=get-hand.js.map