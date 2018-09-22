"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerService {
    static Instance() {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }
        return this.instance;
    }
    constructor() {
        if (PlayerService.instance) {
            throw new Error("Instanciation failed: use PlayerService.instance");
        }
        this.players = [];
    }
    addPlayers(players) {
        this.players = this.players.concat(players);
    }
    resetPlayers() {
        this.players = [];
    }
    getPlayers() {
        return this.players;
    }
}
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map