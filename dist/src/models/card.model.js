"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Card {
    constructor(card) {
        lodash_1.defaultsDeep(this, card, Card.DEFAULT);
    }
}
Card.DEFAULT = {
    value: undefined,
    color: undefined,
    rigged: false
};
exports.Card = Card;
//# sourceMappingURL=card.model.js.map