const BaseCommand = require('../../utils/structures/BaseCommand');
const chatbot = require('espchatbotapi');

module.exports = class ChatCommand extends BaseCommand {
  constructor() {
    super('chat', 'chat', []);
  }

  run(client, message, args) {    
    let pregunta = args.join(' ');
    if(!pregunta) return message.reply('`-chat {algún texto} (ejemplo: -chat Hola)`');
    console.log('Pregunta recibida.')
    chatbot.hablar(pregunta).then(respuesta => {
      console.log('Mandando respuesta...');
      message.channel.send(respuesta);
      console.log('Respuesta mandada.');
    }).catch(error => {
      message.reply(`¡Error! Reporta esto con LaUva#1812: ${error}`);
      console.log(error);
    });
  }
}