const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
      if (message.channel.id !== "888862968870223926") return message.channel.send("Bu Komutu Sadece Kayıt Chatte Kullanabilirsin <#888862968870223926>").then(x => x.delete({timeout: 10000})); 
  
if(!['kayıt yetkilisi id'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)//PROJENİN SAHİBİ KABUS
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
  
const tag = '✰'   
const kadınrol = message.guild.roles.cache.find(r => r.id == '888862968748589109')//kadınrol id
const kadınrol1 = message.guild.roles.cache.find(r => r.id == '888862968748589108')//kadın rol id

const erkekrol = message.guild.roles.cache.find(r => r.id === '888862968748589107') //erkek rol id
const erkekrol1 = message.guild.roles.cache.find(r => r.id === '888862968715051048') //erkek rol id

const kayıtsız = message.guild.roles.cache.find(r => r.id === '888862968715051047')//kayıtsız id
const genelchat = message.guild.channels.cache.find(c => c.id === '888862970178830447')//genelchat id
const savelog = message.guild.channels.cache.find(c => c.id === '888862973018402827')//savelog id

if(!kadınrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
  
if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kayıtsız rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

let Name = args[1]
let age = Number(args[2])

if(!Name) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir isim belirtmelisin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir yaş belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kendini kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bot kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Sunucu sahibini kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
  
  
datab.add('kizteyit_'+message.author.id , 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`${tag} ${Name} | ${age}`)
member.roles.add(kadınrol)
member.roles.add(kadınrol1)

member.roles.remove(erkekrol)
member.roles.remove(erkekrol1)
member.roles.remove(kayıtsız)
   
message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`
• <a:kabusonay:870965631888031766> **Kayıt İşlemi Başarılı**

• <a:kabusileri:870966419326640149> **Kayıt Edilen Kullanıcı**:${member}

• <a:kabusileri:870966419326640149> **Kayıt Eden Kullanıcı**:${message.author}

• <a:kabusileri:870966419326640149> **Yeni Kullanıcı Adı**:\`${Name}\` \`${age}\`
`)
.setColor('PURPLE'))
.then(x => x.delete({timeout: 5000}));
message.react('<a:kabusonay1:881099474448027688>')          
  
genelchat.send(new MessageEmbed()
.setDescription(`
<a:vianaelmass:888145167670997064> ${member}   **Aramıza Katıldı Seninle Birlikte ${message.guild.memberCount} Kişi Olduk Hoş Geldin! <#887782120565649488> <#887783600395796520>** <a:vianatacc:888145154639273986>`)         
 );
  
 const dmlog = new MessageEmbed()
.setDescription(`
•${member} Tebrikler, \`${message.guild.name}\` Sunucusunda \`Kadın\` Olarak Kaydedildin.
•İsmin \`${Name} | ${age}\` Olarak Değiştirildi.`)
.setFooter(`Eğer Kaydında Bir Yanlışlık Varsa Yetkililere Bildir Lütfen.`)
.setColor('PURPLE')
 member.send(dmlog)   
  
savelog.send(new MessageEmbed()
.setTitle ("Bir Kullanıcı Aramıza Katıldı")
.setThumbnail(message.author.avatarURL)
.setDescription(`
Kayıt Eden Yetkili:${message.author} 
Kayıt Olan Kullanıcının Adı:\`${Name}\` 
Kayıt Olan Kullanıcının Yaşı:\`${age}\` `)
.setColor('PURPLE'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: Name, role: kadınrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['kadın', 'k', 'girl', 'woman', 'kız'], permLevel: 0}
exports.help = {name: 'kadın', description: "Etiketlenen kişiyi kadın rolleriyle kayıt eder.", usage: '.kadın @etiket/id İsim Yaş'}
