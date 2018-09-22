"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const secrets_1 = require("../secrets");
const fs = require('fs');
const Discord = require('discord.js');
// This file contains 'secret' things, such as the bot's token.
// For obvious reasons, I am not sharing it, and neither should you. It IS in the .gitignore file :)
exports.Client = new Discord.Client();
// Creates a map that associates each commands to its name.
exports.Client.commands = new Discord.Collection();
addCommands('src/commands');
const cooldowns = new Discord.Collection();
exports.Client.on('ready', () => {
    console.log('Client is ready!');
});
exports.Client.on('message', message => {
    // Checks if the message has to be processed.
    if (!message.content.startsWith(config_1.Config.prefix) || message.author.bot)
        return;
    // Parses the message using spaces and tabs.
    const args = message.content.slice(config_1.Config.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    // Checks that the command exists
    if (!exports.Client.commands.has(commandName))
        return;
    const command = exports.Client.commands.get(commandName);
    // Checks if the command is server-only
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('This command cannot be used in a private message!');
    }
    // Checks that the command was given proper arguments.
    if (command.args && !args.length) {
        let reply = `Some arguments are missing, ${message.author}!`;
        if (command.usage) {
            reply += `\nUsage: \`${config_1.Config.prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    // Handles cooldowns
    // TODO: This part needs some serious documenting & refactoring.
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const cooldownAmount = (command.cooldown || config_1.Config.defaultCooldown) * 1000;
    const timestamps = cooldowns.get(command.name);
    if (!timestamps.has(message.author.id)) {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
    else {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} seconds before reusing the \`${command.name}\` command.`);
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
    // This part actually runs the command.
    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply(`An error occurred when running the \`${command.name}\` command.`);
    }
});
exports.Client.login(secrets_1.Secrets.token);
function addCommands(folderPath) {
    const commandFiles = fs.readdirSync(folderPath);
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        exports.Client.commands.set(command.name.toLowerCase(), command);
    }
}
//# sourceMappingURL=index.js.map