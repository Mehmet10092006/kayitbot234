const Discord = require ("discord.js");
const { MessageEmbed } = require("discord.js");
exports.run = (client, message) => {
if (message.channel.id !== "888862968870223926") return message.channel.send("Bu Komutu Sadece Bot Komutta Kullanabilirsin <#888862970178830448>").then(x => x.delete({timeout: 5500})); 
if(!['888862968870223922'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000})); 
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const sudeask = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**Viana Register**")
.setDescription(`
**• Komutlar**
> <a:kabusucgen:876140197941751878> » **.e**:[Erkek]
> <a:kabusucgen:876140197941751878> » **.k**:[Kız]
> <a:kabusucgen:876140197941751878> » **.kayıtsız**:[Kullanıcıyı Kayıtsıza Atar]
> <a:kabusucgen:876140197941751878> » **.vip**:[Verilecek Kişi]
> <a:kabusucgen:876140197941751878> » **.taglı**:[Taglı Kişileri Sayar]
> <a:kabusucgen:876140197941751878> » **.sayaç-kanal-ayarla**:
> <a:kabusucgen:876140197941751878> » **.sayaç-ayarla (sayı)**:
> <a:kabusucgen:876140197941751878> » **.ping**:[Bot Pingi]
> <a:kabusucgen:876140197941751878> » **.top**:[Top Teyit Listesi]
> <a:kabusucgen:876140197941751878> » **.kayıt-sıfırla**:[Teyit Sıfırlar Belirlediğiniz Kullanıcının]
> <a:kabusucgen:876140197941751878> » **.say**:[Sunucu Toplam Liste]
> <a:kabusucgen:876140197941751878> » **.isimler**:[Kullanıcının Eski İsimlerini Listeler]
> <a:kabusucgen:876140197941751878> » **.kb**:[Teyit Listesi]

`)

 

return message.channel.send(sudeask)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım',
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-koruma'
};