const Discord = require('discord.js');


exports.run = (bot, message, args) => {
  message.delete()

  let user = message.mentions.users.first();
  let member = message.guild.member(user);
  const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;
  let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
if (roles.length < 1) roles = ['None'];
  const millisJoined = new Date().getTime() - member.joinedAt.getTime();
  const daysJoined = millisJoined / 1000 / 60 / 60 / 24
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to get their information!').catch(console.error);
  let embed = new Discord.RichEmbed()
    .setColor("#80d4ff")
    .setThumbnail(`${user.displayAvatarURL}`)
    .addField("Username + tag", `${user.username}#${user.discriminator}`)
    .addField("ID", `${user.id}`)
    .addField("Created At", `${user.createdAt}`)
    .addField("Status", `${user.presence.status}`)
    .addField("Last Message", `${(user.lastMessage) || 'Has not said a message yet.'}`)
    .addField("Joined On", `${(member.joinedAt)}`)
    .addField("Playing", `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`)
    .addField("Roles", `${roles.join(', ')}`)
  message.channel.sendEmbed(embed);
};
