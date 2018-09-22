"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_state_model_1 = require("../models/game-state.model");
const player_service_1 = require("./player.service");
const card_service_1 = require("./card.service");
class GameStateService {
    static Instance() {
        if (!GameStateService.instance) {
            this.instance = new GameStateService();
        }
        return this.instance;
    }
    constructor() {
        this.playerService = player_service_1.PlayerService.Instance();
        this.cardService = card_service_1.CardService.Instance();
    }
    initializeGame(players) {
        this.gameState = game_state_model_1.GameState.INITIALIZING;
        this.playerService.resetPlayers();
        this.playerService.addPlayers(players);
        this.cardService.generateDeck();
    }
}
exports.GameStateService = GameStateService;
//# sourceMappingURL=game-state.service.js.map