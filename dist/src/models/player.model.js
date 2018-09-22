"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const role_model_1 = require("./role.model");
class Player {
    constructor(player) {
        lodash_1.defaultsDeep(this, player, Player.DEFAULT);
    }
}
Player.DEFAULT = {
    id: '',
    hand: [],
    role: role_model_1.Role.OMEGA
};
exports.Player = Player;
//# sourceMappingURL=player.model.js.map