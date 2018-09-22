import { defaultsDeep } from 'lodash';
import { CardColor } from './card-color.model';
import { CardValue } from './card-value.model';

export class Card {

    private static readonly DEFAULT: Card = {
       value: undefined,
       color: undefined,
       rigged: false
    };

    value: CardValue;
    color: CardColor;
    rigged: boolean;

    constructor(card?: Partial<Card>) {
        defaultsDeep(this, card, Card.DEFAULT);
    }
}