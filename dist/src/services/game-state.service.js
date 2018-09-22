"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_state_model_1 = require("../models/game-state.model");
const player_service_1 = require("./player.service");
const card_service_1 = require("./card.service");
const role_model_1 = require("../models/role.model");
class GameStateService {
    static Instance() {
        if (!GameStateService.instance) {
            this.instance = new GameStateService();
        }
        return this.instance;
    }
    constructor() {
        this.gameState = game_state_model_1.GameState.INITIALIZING;
        this.playerService = player_service_1.PlayerService.Instance();
        this.cardService = card_service_1.CardService.Instance();
    }
    initializeGame(players) {
        this.gameState = game_state_model_1.GameState.INITIALIZING;
        this.playerService.resetPlayers();
        this.playerService.addPlayers(players);
        this.cardService.generateDeck();
    }
    startRound() {
        this.drawCardsForEveryone();
        this.gameState = game_state_model_1.GameState.PICKING_CARDS_TO_PUT_DOWN;
    }
    drawCardsForEveryone() {
        let players = this.playerService.getPlayers();
        players.forEach(player => {
            let maxCardsInHand = 3;
            if (player.role === role_model_1.Role.ALPHA) {
                maxCardsInHand = 6;
            }
            player.hand = player.hand.concat(this.cardService.draw(maxCardsInHand - player.hand.length));
        });
    }
}
exports.GameStateService = GameStateService;
//# sourceMappingURL=game-state.service.js.map