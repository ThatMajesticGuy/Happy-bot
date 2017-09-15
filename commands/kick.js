const Discord = require('discord.js');

exports.run = (bot, message) => {
  const modRole = message.guild.roles.find("name", "Helpers");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command. Why are you even trying?");

  if (message.mentions.users.size === 0) {
    return message.reply("Mention the person that needs to be kicked");

    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("you dont have permission");

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`);
      kickMember.reply('test')
    });
  }
};
