const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TeemoCommand extends BaseCommand {
  constructor() {
    super('teemo', 'fun', []);
  }

  run(client, message, args) {
    const repertorio = ['Capitan Teemo listo para el combate.', 'Chiquito pero peligroso.', 'Grandes sorpresas vienen en paquetes pequeños.', 'Recargado y listo.'];

    const rpts = repertorio[Math.floor(Math.random() * repertorio.length)];

    message.channel.send(`${rpts}`);
  }
}