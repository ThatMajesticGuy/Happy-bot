const Discord = require('discord.js');

exports.run = (bot, message) => {
const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        msg.channel.send('You must provide some text to emoji-fy!');
    }

    msg.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
    );
}};
