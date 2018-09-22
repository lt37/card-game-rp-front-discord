import { Card } from '../models/card.model';
import { CardColor } from '../models/card-color.model';
import { CardValue } from '../models/card-value.model';
import { Arrays } from '../utils/arrays';

export class CardService {

    private static instance: CardService;

    private deck: Card[];

    public static Instance() {
        if (!CardService.instance) {
            CardService.instance = new CardService();
        }
        return this.instance;
    }

    private constructor() {
        this.deck = [];
    }

    generateDeck(): Card[] {
        this.resetDeck();
        Object.keys(CardColor).forEach(color => {
            Object.keys(CardValue).forEach(value => {
                this.deck.push(
                    new Card({
                        color: CardColor[color],
                        value: CardValue[value],
                        rigged: false
                    }),
                    new Card({
                        color: CardColor[color],
                        value: CardValue[value],
                        rigged: true
                    })
                );
            });
        });

        Arrays.shuffle(this.deck);
        return this.deck;
    }

    draw(amount: number): Card[] {
        return this.deck.splice(0, amount);
    }

    resetDeck() {
        this.deck = [];
    }

    getDeck() {
        return this.deck;
    }
}