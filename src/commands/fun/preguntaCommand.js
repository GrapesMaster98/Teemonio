const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class preguntaCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  run(client, message, args) {
    const respuestas = ['Memorí no puedo responder.', 'Si.', 'No.', 'Lo dudo.', 'Definitivamente.', 'Sinceramente, no.', '¡Absolutamente!', 'Confirmo.', 'Negativo', 'Afirmativo.'];

    let gen = respuestas[Math.floor(Math.random() * respuestas.length)];

    let texto = args.join(' ');

    if(!texto) return message.channel.send('Necesitas preguntarme algo. (Solo preguntas de Si o No)');

    //Si lo generado agarra el 1er objeto del array, manda un embed (teemo muere);
    if(gen === respuestas[0]) {
      const embed = new MessageEmbed()
      .setTitle(respuestas[0])
      .setImage('https://images-ext-2.discordapp.net/external/mmxGquSP0zPEbrAigIQ5WDDpGa-CqxZ4G5oeouFNw74/https/i.redd.it/h39to9sp0ef41.jpg?width=869&height=475')
      .setColor('RANDOM');
      message.channel.send(embed);
    } else {
      message.reply(`${gen}`);
    }
    // message.channel.send(message.member.user+' a su pregunta `'+texto+'` mi respuesta es: `'+ respuestas[Math.floor(Math.random() * respuestas.length)]+'`');
  }
} 