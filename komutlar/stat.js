 const Discord = require("discord.js"); //KABUS
const client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");

exports.run = async (client, message, args, presence) => {
      if (message.channel.id !== "kullanılacagı rol id") return message.channel.send("Bu Komutu Sadece Kayıt Chatte Kullanabilirsin <#887782120003604550>").then(x => x.delete({timeout: 10000})); 
if(!['kullanıcak rol id'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply("Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.")
  
  let user = message.mentions.users.first();

  if (!user) user = message.author;
//KABUS
  const member = message.guild.member(user);
  let kız = await db.fetch(`kizteyit_${member.id}`);
  let erkek = await db.fetch(`erkekteyit.${member.id}`);
  

  let k_uses = ""
  let e_uses = ""
  
  if (!kız) {
    if (kız  === null || kız === undefined || kız === NaN)
    k_uses = 0
  } else {
  k_uses = kız
  }
//KABUS
  if (!erkek) {
    if (erkek === null || erkek === undefined || erkek === NaN)
    e_uses = 0
  } else {
    e_uses = erkek
  }

let teyit = e_uses + k_uses
//KABUS
  
  const embed = new Discord.MessageEmbed()
  .setThumbnail(user.avatarURL)
  .setFooter(client.user.username, client.user.avatarURL)
  .setDescription(`
<a:kabusbekleme:870967060941905980> **Erkek**: **${e_uses}** 
<a:kabusbekleme:870967060941905980> **Kız**: **${k_uses}**
<a:kabusbekleme:870967060941905980> **Toplam Teyit Sayın**: **${teyit}**
`);
 
  
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kb","rank","info","information"],
  permLevel: 0
};
//KABUS
exports.help = {
  name: "teyit-bilgi",
  category: "kullanıcı",
  description: "İstediğiniz kullanıcı hakkında bilgi verir.",
  usage: "teyit-bilgi <@kişi-etiket>"
};
    