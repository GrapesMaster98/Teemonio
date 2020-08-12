const BaseCommand = require('../../utils/structures/BaseCommand');
const randomPuppy = require('random-puppy');
const { MessageEmbed } = require('discord.js');

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'fun', []);
  }

  async run(client, message, args) {
    const reddits = ['dankmeme', 'me_irl', 'meme', 'technicallythetruth', 'HolUp'];
    //Escoger una imagen random del array de subreddits.
    const generador = reddits[Math.floor(Math.random() * reddits.length)];    

    const img = await randomPuppy(generador);
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Meme sacado de: r/${generador}`)
    .setImage(img)
    .setURL(`https://reddit.com/r/${generador}`);

    message.channel.send(embed);
  }
}