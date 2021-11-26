const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!['887782119458357301'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
    if(!message.mentions.members.first()) return message.channel.send('Bir kullanıcıyı etiketlemelisin.');
  const isimlera = await data.fetch(`isimler.log.sistemi.sj.${message.mentions.members.first().user.id}.${message.guild.id}`);
  if(!isimlera) return message.channel.send('Hiç isim değişikliği yapmamış.').then(x => x.delete({ timeout: 6000 }) && message.delete({ timeout: 6000 }));
  let i = 1;
  message.channel.send(`**Kullanıcı**: ${message.mentions.members.first()} 
**İsimleri**:\n${isimlera.map(a => `**${i++}** • ${a.isimler}`).join(`\n`)}`).then(x => x.delete({ timeout: 6000 }) && message.delete({ timeout: 6000 }));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'isimler'
};