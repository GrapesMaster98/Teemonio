const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  run(client, message, args) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;

    let texto = args.join(' ');

    message.delete();
    message.channel.send(`${texto}`);
  }
}