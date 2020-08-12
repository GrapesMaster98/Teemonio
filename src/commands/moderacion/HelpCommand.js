const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'moderacion', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('**Ayuda Teemonio**')
    .setColor('AQUA')
    .setDescription('Soy un bot simple hecho para divertirte. :)')
    .setThumbnail(client.user.avatarURL())
    .addField('-os', 'Mi código está disponible en GitHub, puedes acceder a el usando este comando, por favor, lee el README.md, tiene información importante.')
    .addField('-chat {texto}', '¡Habla conmigo! No creo responder algo coherente, pero será divertido.')
    .addField('-meme', 'Ah...Reddit...genere memes random de Reddit con este comando.')
    .addField('-8ball {pregunta}', 'Usa este comando para preguntarme algo, te responderé con si o no.')
    .addField('-teemo', 'Frases random mias.')
    .addField('¿Encontraste un error?', 'Contacta a LaUva#1812 y reportalo. *No me hablen para chatear plssss...*')
    .setFooter('Creado por GrapesCode.', message.author.displayAvatarURL())
    .setTimestamp();

    message.channel.send(embed);
  }
}