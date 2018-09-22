"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_model_1 = require("../models/card.model");
const card_color_model_1 = require("../models/card-color.model");
const card_value_model_1 = require("../models/card-value.model");
class CardService {
    static Instance() {
        if (!CardService.instance) {
            CardService.instance = new CardService();
        }
        return this.instance;
    }
    constructor() {
        this.deck = [];
    }
    generateDeck() {
        this.resetDeck();
        Object.keys(card_color_model_1.CardColor).forEach(color => {
            Object.keys(card_value_model_1.CardValue).forEach(value => {
                this.deck.push(new card_model_1.Card({
                    color: card_color_model_1.CardColor[color],
                    value: card_value_model_1.CardValue[value],
                    rigged: false
                }), new card_model_1.Card({
                    color: card_color_model_1.CardColor[color],
                    value: card_value_model_1.CardValue[value],
                    rigged: true
                }));
            });
        });
        return this.deck;
    }
    resetDeck() {
        this.deck = [];
    }
    getDeck() {
        return this.deck;
    }
}
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map