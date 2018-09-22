"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_model_1 = require("../models/player.model");
const index_1 = require("../index");
module.exports = {
    name: 'mention-test',
    description: 'Initializes a game, with all the Players you specify.',
    args: true,
    usage: () => `<${this.name}> <@Player1> <@Player2>...`,
    execute(message, args) {
        let response = `Game has been initialized. Players are:\n`;
        let players = [];
        let counter = 1;
        message.mentions.users.forEach(user => {
            players.push(new player_model_1.Player({
                id: user.id
            }));
            response += `${counter}: ${user}\n`;
            counter++;
        });
        response += `Now if this works it's gonna be cool:\n`;
        players.forEach(p => response += `${index_1.Client.users.get(p.id)}\n`);
        message.channel.send(response);
    }
};
//# sourceMappingURL=mention-test.js.map