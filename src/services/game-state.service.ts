import { GameState } from '../models/game-state.model';
import { Player } from '../models/player.model';
import { PlayerService } from './player.service';
import { CardService } from './card.service';
import { Role } from '../models/role.model';

export class GameStateService {

    private static instance: GameStateService;

    private playerService: PlayerService;
    private cardService: CardService;

    gameState: GameState;

    public static Instance() {
        if (!GameStateService.instance) {
            this.instance = new GameStateService();
        }

        return this.instance;
    }

    private constructor() {
        this.gameState = GameState.INITIALIZING;
        this.playerService = PlayerService.Instance();
        this.cardService = CardService.Instance();
    }

    initializeGame(players: Player[]) {
        this.gameState = GameState.INITIALIZING;
        this.playerService.resetPlayers();
        this.playerService.addPlayers(players);
        this.cardService.generateDeck();
    }

    startRound() {
        this.drawCardsForEveryone();
        this.gameState = GameState.PICKING_CARDS_TO_PUT_DOWN;
    }

    private drawCardsForEveryone() {
        let players = this.playerService.getPlayers();
        players.forEach(player => {
            let maxCardsInHand = 3;
            if (player.role === Role.ALPHA) {
                maxCardsInHand = 6;
            }

            player.hand = player.hand.concat(this.cardService.draw(maxCardsInHand - player.hand.length));
        });
    }
}