const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class OsCommand extends BaseCommand {
  constructor() {
    super('os', 'dev', []);
  }

  run(client, message, args) {
    message.channel.send('¿Quieres aportar algo a mi código o ver como soy por dentro? ¡Adelante! **Lee todo el README.md antes de aportar algo.**');
    message.channel.send('https://github.com/GrapesMaster98/Teemonio');
  }
}