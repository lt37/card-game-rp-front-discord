"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_model_1 = require("../models/player.model");
const game_state_service_1 = require("../services/game-state.service");
const game_state_model_1 = require("../models/game-state.model");
const role_model_1 = require("../models/role.model");
module.exports = {
    name: 'gameinit',
    description: 'Initializes a game, with all the Players you specify.',
    args: true,
    usage: () => `<${this.name}> <@Player1> <@Player2>...`,
    execute(message, args) {
        if (game_state_service_1.GameStateService.Instance().gameState !== game_state_model_1.GameState.INITIALIZING) {
            message.channel.send(`Now is not the time to use that.`);
            return;
        }
        let players = [];
        message.mentions.users.forEach(user => players.push(new player_model_1.Player({ id: user.id })));
        players[0].role = role_model_1.Role.ALPHA;
        game_state_service_1.GameStateService.Instance().initializeGame(players);
        message.channel.send(`Game has been initialized!`);
    }
};
//# sourceMappingURL=game-init.js.map