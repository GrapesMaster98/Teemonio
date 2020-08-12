const BaseCommand = require('../../utils/structures/BaseCommand');
const chatbot = require('espchatbotapi');

module.exports = class UpdateChatCommand extends BaseCommand {
  constructor() {
    super('updateChat', 'dev', []);
  }

  run(client, message, args) {
    let pregunta = args.join(' ');
    let res = args.join(' ');
    if(!pregunta && !res) {
      return message.channel.send('¡Mal uso de comando! `-añadir pregunta | respuesta` Ejemplo: **-añadir ¿Quien eres? ¡Soy Teemo!**')
    }
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
      
    chatbot.enseñar(pregunta, res).then(respuesta => {
      console.log(respuesta);
      message.reply(respuesta);
    });
  }
}