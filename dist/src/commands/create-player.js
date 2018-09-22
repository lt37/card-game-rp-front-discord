"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_service_1 = require("../services/player.service");
module.exports = {
    name: 'createplayer',
    description: 'Test',
    args: true,
    usage: `<createplayer> <@player>`,
    cooldown: 10,
    execute(message, args) {
        const id = args[0];
        player_service_1.PlayerService.Instance.createPlayer(id);
        message.channel.send(`Player should've been created if I didn't fuck this up`);
    }
};
//# sourceMappingURL=create-player.js.map