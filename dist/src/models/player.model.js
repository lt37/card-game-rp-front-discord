"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Player {
    constructor(player) {
        lodash_1.defaultsDeep(this, player, Player.DEFAULT);
    }
}
Player.DEFAULT = {
    id: '',
    hand: []
};
exports.Player = Player;
//# sourceMappingURL=player.model.js.map