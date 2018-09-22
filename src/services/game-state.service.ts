import { GameState } from '../models/game-state.model';
import { Player } from '../models/player.model';
import { PlayerService } from './player.service';
import { CardService } from './card.service';

export class GameStateService {

    private static instance: GameStateService;

    private playerService: PlayerService;
    private cardService: CardService;

    private gameState: GameState;

    public static Instance() {
        if (!GameStateService.instance) {
            this.instance = new GameStateService();
        }

        return this.instance;
    }

    private constructor() {
        this.playerService = PlayerService.Instance();
        this.cardService = CardService.Instance();
    }

    initializeGame(players: Player[]) {
        this.gameState = GameState.INITIALIZING;
        this.playerService.resetPlayers();
        this.playerService.addPlayers(players);
        this.cardService.generateDeck();
    }
}