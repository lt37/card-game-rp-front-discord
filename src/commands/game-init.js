import { Player } from "../models/player.model";
import { GameStateService } from "../services/game-state.service";

module.exports = {
  name: 'gameinit',
  description: 'Initializes a game, with all the Players you specify.',
  args: true,
  usage: () => `<${this.name}> <@Player1> <@Player2>...`,
  execute(message, args) {
    let players = [];
    message.mentions.users.forEach(user => players.push(new Player({ id: user.id })));
    GameStateService.Instance().initializeGame(players);
    message.channel.send(`Game has been initialized!`);
  }
};
