import { Config } from '../../config';

module.exports = {
  name: 'help',
  description: 'This command provides help about other commands.',
  usage: `<${this.name}>`,
  execute(message, args) {
    const { commands } = message.client;
    const data = [];

    // If no args were given, we simply list every command.
    if (!args.length) {
      data.push('Here is the list of available commands:\n');
      data.push(commands.map(command => `\`${command.name}\``).join('\n\n'));
      data.push(`\nSend \`${Config.prefix}help <command>\` for more information about a specific command.`);
    }

    else {
      if (!commands.has(args[0])) {
        return message.reply(`The \`${args[0]}\` command does not exist!`);
      }

      const command = commands.get(args[0]);

      data.push(`**Name:** ${command.name}`);

      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** \`${Config.prefix}${command.name} ${command.usage}\``);
      data.push(`**Cooldown:** ${command.cooldown || Config.defaultCooldown } second(s)`);
    }

    message.channel.send(data);
  }
};