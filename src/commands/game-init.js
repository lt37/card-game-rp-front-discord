import { Player } from "../models/player.model";
import { GameStateService } from "../services/game-state.service";
import {GameState} from "../models/game-state.model";
import {Role} from "../models/role.model";

module.exports = {
  name: 'gameinit',
  description: 'Initializes a game, with all the Players you specify.',
  args: true,
  usage: () => `<${this.name}> <@Player1> <@Player2>...`,
  execute(message, args) {
    if (GameStateService.Instance().gameState !== GameState.INITIALIZING) {
      message.channel.send(`Now is not the time to use that.`);
      return;
    }

    let players = [];
    message.mentions.users.forEach(user => players.push(new Player({ id: user.id })));
    players[0].role = Role.ALPHA;

    GameStateService.Instance().initializeGame(players);
    message.channel.send(`Game has been initialized!`);
  }
};
