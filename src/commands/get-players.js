import { PlayerService } from "../services/player.service";
import { Client } from "../index";

module.exports = {
  name: 'players',
  description: 'Gets all players',
  usage: `<${this.name}>`,
  execute(message, args) {
    let response = `List of players:\n`;
    PlayerService.Instance().getPlayers().forEach((player, index) => response += `${index+1}: ${Client.users.get(player.id)} (${player.role})\n`);
    message.channel.send(response);
  }
};
