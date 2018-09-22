import { Player } from '../models/player.model';

export class PlayerService {

    private static instance: PlayerService;

    private players: Player[];

    public static Instance(): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService();
        }
        return this.instance;
    }

    private constructor() {
        if (PlayerService.instance) {
            throw new Error("Instanciation failed: use PlayerService.instance");
        }

        this.players = [];
    }

    addPlayers(players: Player[]) {
        this.players = this.players.concat(players);
    }

    resetPlayers() {
        this.players = [];
    }

    getPlayers() {
        return this.players;
    }
}