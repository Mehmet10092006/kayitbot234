const { MessageEmbed } = require("discord.js");
const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, member) => { 
      if (message.channel.id !== "888862968870223926") return message.channel.send("Bu Komutu Sadece Kayıt Chatte Kullanabilirsin <#887782120003604550>").then(x => x.delete({timeout: 10000})); 
if(!['888862968782147595'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));  
  let uye = message.mentions.users.first() || message.author;
let bilgi = db.get(`yetkili.${uye.id}.toplam`);
let yazı = "Top Teyit Listesi"
  
let top = message.guild.members.cache.filter(uye => db.get(`yetkili.${uye.id}.toplam`)).array().sort((uye1, uye2) => Number(db.get(`yetkili.${uye2.id}.toplam`))-Number(db.get(`yetkili.${uye1.id}.toplam`))).slice(0, 15).map((uye, index) => (index+1)+" • <@"+ uye +"> | \`" + db.get(`yetkili.${uye.id}.toplam`) +"\` Kayıta Sahip.").join('\n');
message.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setTimestamp().setColor("AQUA").setFooter(message.member.displayName+" tarafından istendi!", message.author.avatarURL).setDescription(top));
  //PROJENİN SAHİBİ KABUS
}
//PROJENİN SAHİBİ KABUS
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["topteyit","teyit", "top-teyit"],
    permLevel: 0
};
//PROJENİN SAHİBİ KABUS
exports.help = {
    name: "top"
}