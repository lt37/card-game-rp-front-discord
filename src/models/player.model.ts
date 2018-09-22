import { defaultsDeep } from 'lodash';
import { Card } from './card.model';
import { Role } from './role.model';

export class Player {

    private static readonly DEFAULT: Player = {
        id: '',
        hand: [],
        role: Role.OMEGA
    };

    id: string;
    hand: Card[];
    role: Role;

    constructor(player?: Partial<Player>) {
        defaultsDeep(this, player, Player.DEFAULT);
    }
}