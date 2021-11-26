//////komutlar/////
const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json');;
exports.run = async (client, message, args) => {
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;

let yetkilirol = "888862968782147595"
let kayıtsız = "888862968715051047"
let nick  = "Kayıtsız"

if(!message.member.roles.cache.has(yetkilirol)) return message.channel.send("\`Maalesef Yetkin Yok!\`")
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (user.id === message.author.id) return message.channel.send('Dostum Kendini Atamazsın').then(x => x.delete({timeout: 3000}));
if (user.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(("Kendinden üst/eşit yetkide birisine ceza uygulayamazsın!")).then(x => x.delete({timeout: 2000}))
let data = db.fetch("limit_"+message.author.id)

if(data >= 2) {// Günde 20 Kişiyi Kayıtsız  Attıysa İşlem Görmez

message.channel.send("Günlük Limite Ulaşmışsın")

} else {

message.channel.send("Üye Başarıyla Kayıtsıza Atıldı!")
message.react('<a:kabusonay1:881099474448027688>')          

user.roles.set(['888862968715051047'])
user.setNickname(nick)

db.add("limit_"+message.author.id, 1)  
}
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }

  exports.help = {
    name: 'kayıtsız',
    description: "<prefix>kayıtsız @üye",
    usage: '<prefix>kayıtsız @üye'
  }