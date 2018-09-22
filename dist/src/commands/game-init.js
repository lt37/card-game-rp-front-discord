"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_model_1 = require("../models/player.model");
const game_state_service_1 = require("../services/game-state.service");
module.exports = {
    name: 'gameinit',
    description: 'Initializes a game, with all the Players you specify.',
    args: true,
    usage: () => `<${this.name}> <@Player1> <@Player2>...`,
    execute(message, args) {
        let players = [];
        message.mentions.users.forEach(user => players.push(new player_model_1.Player({ id: user.id })));
        game_state_service_1.GameStateService.Instance().initializeGame(players);
        message.channel.send('Everything worked out fine! (I hope)');
    }
};
//# sourceMappingURL=game-init.js.map