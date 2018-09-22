"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_state_service_1 = require("../services/game-state.service");
const player_service_1 = require("../services/player.service");
const index_1 = require("../index");
const game_state_model_1 = require("../models/game-state.model");
const hand_message_1 = require("../messages/hand.message");
module.exports = {
    name: 'roundstart',
    description: 'Starts a round. Seriously.',
    usage: `<${this.name}>`,
    execute(message, args) {
        if (game_state_service_1.GameStateService.Instance().gameState !== game_state_model_1.GameState.INITIALIZING) {
            message.channel.send(`Now is not the time to use that.`);
            return;
        }
        game_state_service_1.GameStateService.Instance().startRound();
        let user;
        let response;
        player_service_1.PlayerService.Instance().getPlayers().forEach(player => {
            response = hand_message_1.HandMessage.get(player.hand);
            user = index_1.Client.users.get(player.id);
            user.send(response);
        });
    }
};
//# sourceMappingURL=round-start.js.map