import { PlayerService } from "../services/player.service";
import { HandMessage } from "../messages/hand.message";

module.exports = {
  name: 'hand',
  description: 'Shows your hand.',
  usage: `<${this.name}>`,
  execute(message, args) {
    let player = PlayerService.Instance().getPlayers().filter(p => p.id === message.author.id)[0];
    if (!player) {
      message.reply(`You're not a player!`);
      return;
    }

    let hand = player.hand;
    const response = HandMessage.get(hand);
    message.author.send(response);
  }
};
