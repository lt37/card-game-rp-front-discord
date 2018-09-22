import { PlayerService } from "../services/player.service";
import { Client } from "../index";

module.exports = {
  name: 'players',
  description: 'Gets all players',
  usage: `<${this.name}>`,
  execute(message, args) {
    let response = `List of players:`;
    PlayerService.Instance().getPlayers().forEach(player => response += `${Client.users.get(player.id)}\n`);
    message.channel.send(response);
  }
};
