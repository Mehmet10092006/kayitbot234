const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const mapping = {
  " ": "   ",
   "0": "<a:kabus00:870974611494412338>",
  "1": "<a:kabus11:870975039464415273>",
  "2": "<a:kabus22:870973713133228042>",
  "3": "<a:kabus33:870973737133019147>",
  "4": "<a:kabus44:870973756221304863>",
  "5": "<a:kabus55:870973783492685835>",
  "6": "<a:kabus66:870973808851447818>",
  "7": "<a:kabus77:870973836726771783>",
  "8": "<a:kabus88:870973852350566450>",
  "9": "<a:kabus99:870973872122527794>",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};

let tags = ayarlar.tag;
"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
exports.run = function(client, message, args) {
if(!['888862968782147595'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply("Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.").then(x => x.delete({timeout: 5000}));
  let selam = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size;
  let offlinee = `${selam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");
  let canım = message.guild.memberCount;
  let sunucu = `${canım}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");
  let ben = message.guild.members.cache.filter(
    m => !m.user.bot && m.user.presence.status !== "online"
  ).size;
  let onlinee = `${ben}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  let bacınım = message.guild.members.cache.filter(m =>
    m.user.username.includes(tags)
  ).size;
  let tagg = `${bacınım}`
      .split("")
      .map(c => mapping[c] || c)
      .join("");
  
  let legacy = message.guild.members.cache.filter(
    m => m.user.presence.status === "idle"
  ).size;
  let idlee = `${legacy}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  let burdanKendimeSelam = message.guild.members.cache.filter(
    m => m.user.presence.status === "dnd"
  ).size;
  let dndd = `${burdanKendimeSelam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  const CuguliyiSeverim = message.guild.channels.cache
    .filter(channel => channel.type == "voice")
    .map(channel => channel.members.size)
    .reduce((a, b) => a + b);
  let sess = `${CuguliyiSeverim}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  const boyum158 = message.guild.roles.cache.get("888710000913047602").members.size;
  let kizz = `${boyum158}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  const Hayırsızlar = message.guild.roles.cache.get("888709994441228298")
    .members.size;
  let erkekk = `${Hayırsızlar}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  const boost = message.guild.premiumSubscriptionCount
let boostt = `${boost}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  const kayitsiz = message.guild.roles.cache.get("888710001336651787")
    .members.size;
  let kayitsizz = `${kayitsiz}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");

  

  
  
  
  const legacyy = new Discord.MessageEmbed()
    .setTitle(`Sunucu İstatikleri`)
    .setDescription(`**Sunucuda Toplam ${sunucu} Kişi Var
Sunucumuzda Toplam ${kizz} Kadın Kullanıcı ve ${erkekk} Erkek Kullanıcı Var
Toplam ${offlinee} Offline Kişi Var
Toplam ${onlinee} Online Kişi Var
Boşta Toplam ${idlee} Kişi Var
Rahatsız Etmeyinde Toplam ${dndd} Kişi Var
Ses Kanallarından ${sess} Kişi Bulunuyor.
✭ - Tagını Alan ${tagg} Kişi Var.
Sunucuda Toplam ${boostt} Boost Bulunuyor
**`
    )
    .setColor("GREEN")
//yukardakindende bakabilirsin mevcut degiskenlere
  // ben norsunkine benzesin diye onlari koymadim
  
const sj = new Discord.MessageEmbed()
.setAuthor(`${client.user.username}`, client.user.avatarURL({ dynamic: true }))
.setColor("BLACK")
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter("Komutu Kullanan Kişi: "+message.author.tag+"" , message.author.avatarURL({ dynamic: true }))
.setDescription(`
**Sunucumuzda toplam ${sunucu} üye bulunmakta.**

**Sunucumuzda toplam ${erkekk} erkek  ${kizz} kız ve  ${kayitsizz} kayıtsız üye bulunmakta.** 

**Ses kanallarında toplam ${sess} üye bulunmakta.** 

**✰ ⇒ Tagını Alan ${tagg} Kişi Var.**

**Sunucuda toplam ${boostt} boost bulunuyor.**`)
message.channel.send(sj)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  description: "say"
};
