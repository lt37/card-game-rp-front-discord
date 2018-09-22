import { defaultsDeep } from 'lodash';
import { Card } from './card.model';

export class Player {

    private static readonly DEFAULT: Player = {
        id: '',
        hand: []
    };

    id: string;
    hand: Card[];

    constructor(player?: Partial<Player>) {
        defaultsDeep(this, player, Player.DEFAULT);
    }
}