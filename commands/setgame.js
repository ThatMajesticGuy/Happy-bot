const Discord = require('discord.js');

exports.run = (bot, message) => {
  var args2 = message.content.split(' ').slice(1).join(' ');
  message.reply(":ok_hand: changed my game")
  bot.user.setGame(args2)
};
