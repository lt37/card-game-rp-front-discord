"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_service_1 = require("../services/player.service");
const index_1 = require("../index");
module.exports = {
    name: 'players',
    description: 'Gets all players',
    usage: `<${this.name}>`,
    execute(message, args) {
        let response = `List of players:\n`;
        player_service_1.PlayerService.Instance().getPlayers().forEach((player, index) => response += `${index + 1}: ${index_1.Client.users.get(player.id)} (${player.role})\n`);
        message.channel.send(response);
    }
};
//# sourceMappingURL=get-players.js.map