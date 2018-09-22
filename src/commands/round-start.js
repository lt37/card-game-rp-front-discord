import { GameStateService } from "../services/game-state.service";
import { PlayerService } from "../services/player.service";
import { Client } from "../index";
import { GameState } from "../models/game-state.model";
import {HandMessage} from "../messages/hand.message";

module.exports = {
  name: 'roundstart',
  description: 'Starts a round. Seriously.',
  usage: `<${this.name}>`,
  execute(message, args) {
    if (GameStateService.Instance().gameState !== GameState.INITIALIZING) {
      message.channel.send(`Now is not the time to use that.`);
      return;
    }

    GameStateService.Instance().startRound();

    let user;
    let response;

    PlayerService.Instance().getPlayers().forEach(player => {
      response = HandMessage.get(player.hand);
      user = Client.users.get(player.id);
      user.send(response);
    });
  }
};
