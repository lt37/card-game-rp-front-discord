"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_service_1 = require("../services/player.service");
const index_1 = require("../index");
module.exports = {
    name: 'players',
    description: 'Gets all players',
    usage: `<${this.name}>`,
    execute(message, args) {
        let response = `List of players:`;
        player_service_1.PlayerService.Instance().getPlayers().forEach(player => response += `${index_1.Client.users.get(player.id)}\n`);
        message.channel.send(response);
    }
};
//# sourceMappingURL=get-players.js.map