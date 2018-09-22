import { Card } from '../models/card.model';

export class HandMessage {

    static get(hand: Card[]): string {
        let response = `Your hand for this round:\n`;
        hand.forEach(card =>
            response += `${card.value} ${card.color} ${card.rigged}\n`
        );

        return response;
    }
}