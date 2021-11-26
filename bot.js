const Discord = require('discord.js');//PROJENİN SAHİBİ Kabus
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { MessageButton} = require("discord.js-buttons")(client)
var Jimp = require('jimp');
const fs = require('fs');
const db = require('quick.db');
const express = require('express');
const { MessageEmbed } = require('discord.js')
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;
//
const log = message => {
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});




//---------------------------------- DM DEN HG -----------------------------------\\


//---------------------------------- DM DEN HG -----------------------------------\\
client.on(`guildMemberAdd`, async member => { const devils = new Discord.MessageEmbed()
.setImage(`https://cdn.discordapp.com/attachments/862365158994346005/874671283785322546/neon-welcome-neon-hd-wallpaper-preview.jpg`)
.setTitle("Sunucumuza Hoş Geldin")
.setColor("RED")
.setDescription(`
**${member.guild.name}** **İsimli Sunucuya Hoş Geldin 
Ses Teyit Odalarına Girerek Kayıt Olabilirsin
Tagımızı \`(✰)\` Alarak Bize Destek Olabilirsin`)
 member.send(devils); });



//------------------------------ BOT SESLİ KANAL SOKMA ----------------------------------\\


//------------------------------ BOT SESLİ KANAL SOKMA ----------------------------------\\


//------------------------------ BOT OYNUYOR ------------------------------------\\

 
//------------------------------ BOT OYNUYOR ------------------------------------\\



//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     
client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
  "0": "<a:kabus00:870974611494412338>",
  "1": "<a:kabus11:870975039464415273>",
  "2": "<a:kabus22:870973713133228042>",
  "3": "<a:kabus33:870973737133019147>",
  "4": "<a:kabus44:870973756221304863>",
  "5": "<a:kabus55:870973783492685835>",
  "6": "<a:kabus66:870973808851447818>",
  "7": "<a:kabus77:870973836726771783>",
  "8": "<a:kabus88:870973852350566450>",
  "9": "<a:kabus99:870973872122527794>",}[d];})}

      const kanal = member.guild.channels.cache.find(r => r.id === "888862968870223926");//mesaj atılcak kanal id
      let register = '888862968782147595'
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol ='<a:kabusred:870965542968754207> **Hesap Durumu**:\`Güvenilir Değil\`'
  if (kurulus > 1296000000) kontrol ='<a:kabusonay:870965631888031766> **Hesap Durumu**:\`Güvenilir\`'
    moment.locale("tr");
kanal.send(`
<a:vianamavii:888145134607286334> Sunucumuza Hoş Geldin <@`+ member + `>
  
<a:vianamorr:888145121772711966> Seninle Beraber **`+üyesayısı+`** Kişiye Ulaştık.
  
<a:vianamavii:888145134607286334> Hesabın \``+gecen+`\` Önce Açılmış 
  
<a:vianamorr:888145121772711966> Sunucu Odalarını Görebilmek İçin "Ses Teyit" Odalarında Yetkililerimize İsim Yaş Belirtmelisin
Unutma ki <#888862969331593262> Toplumun Düzenini Sağlamak İçin Var.Kurallarımıza Göz Atmayı İhmal Etme!

<a:vianapembee:888145146737225728> Birazdan <@&${register}> Sizinle ilgilenecektir.`)
  
})


//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     

//------------------------ŞÜPHELİ-HESAP-----------------------\\     

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "888862968715051047") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     var rol = member.guild.roles.cache.get("888862968379502621") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
     var kayıtsız = member.guild.roles.cache.get("888862968715051047") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     member.roles.add(rol)
     member.roles.remove(kytsz)

  member.user.send('Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Kategorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç.')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });


//-----------------------giriş-durum----------------------\\    

 client.login(process.env.TOKEN)

const disbut = require('discord-buttons')
disbut(client);
client.on('message', async (message) => {
    if (message.content.startsWith('-yardım')) {
      let button = new disbut.MessageButton()
      .setStyle('red') 
      .setLabel('Register Yardım')
      .setID('Tıkla')
      let embed = new Discord.MessageEmbed()
      .addField(`Register Bot`)
      message.channel.send({
        button: button,
          embed: embed
      })
      client.ws.on('INTERACTION_CREATE', async interaction => {
          
          client.api.interactions(interaction.id, interaction.token).callback.post({
              data: {
                  type: 4,
                  data: {
                      content: "✭**e**:Erkek\n✭**k**:Kadın\n✭**kb**:Teyit Bilgi\n✭**isimler**:Etiket\n✭**ping**\n✭**sayaç-kanal-ayarla**\n✭**sayaç-ayarla**:\n✭**nicks**:\n✭**top**:\n✭**kayıt-sıfırla**:",   // Yardım Menüsü Buraya Gelecek
                      flags: "64" // Bunu Ellemeyin
                    }
                }
            }) 
       });
    }
});

 


////-------------------kayıtsız----------------////



 client.on('guildMemberAdd', async (member, guild, message) => {

     let kayıtsız = await db.fetch(`kayitkayıtsızrol.${member.guild.id}`)
     if (!kayıtsız || kayıtsız.toLowerCase() === 'yok') return;
    else {
     try {
            member.roles.add(member.guild.roles.cache.get(kayıtsız))
                          } catch (e) {
     console.log(e)
    }

    }
    
    });
////-------------------kayıtsız----------------////


client.on("ready", () => {
client.channels.cache.get("887782121408708687").join()//botun gireceği ses kanal id
})
///sayaç///son///ilk///////sayaç///son///ilk////


client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya Ulaştık! Sayaç Sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

              
   member.guild.channels.cache.get(channel).send(`:outbox_tray: \`${member.user.tag}\` **Sunucudan** \`Ayrıldı\` **${db.fetch(`sayac_${member.guild.id}`)}**Üye Olmamıza Son **${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}** Üye Kaldı`);
});

client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;


member.guild.channels.cache.get(channel).send(`:inbox_tray: \`${member.user.tag}\` **Sunucuya** \`Katıldı\` **${db.fetch(`sayac_${member.guild.id}`)}** Üye Olmamıza Son **${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}** Üye Kaldı`);
});
///sayaç///son///ilk///////sayaç///son///ilk////







const data = require('quick.db');
const logs = require('discord-logs');
logs(client);
client.on('guildMemberNicknameUpdate', async (member, oldNickname, newNickname) => require('quick.db').push(`isimler.log.sistemi.sj.${member.user.id}.${member.guild.id}`, { isimler: `${oldNickname ? oldNickname : member.user.username} -> ${newNickname ? newNickname : member.user.username}` }));




client.on("guildMemberAdd", member => {
  const meftun2 = require("quick.db").fetch(`tagisimayar_${member.guild.id}`)
  var tag = require('quick.db').fetch(`isimtag_${member.guild.id}`)
  
  if (member.bot) return;
  if(!meftun2) return;
  setTimeout(() => {
    member.guild
      .member(member)
      .setNickname(`${tag} ${member.user.username.replace(/[^a-züıöşğç0-9]/gi, " ")}`);
  }, 3000);
});










client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = '✰'
  const sunucu = '888862968115232841'//sunucu id
  const log = '888862969784586300'//tag alınca mesaj atacak kanal id
  const rol = '888862968748589112'//tag alınca verilecek rol id

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`**${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim**`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`**${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!**`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("RED").setDescription(`**${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım**`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`**${newUser.username}, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!**`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});



 client.on("guildMemberAdd", member => {       
    let otorol = '888862968715051047'//sunucuya girince verilecek rol id
      member.roles.add(otorol) 
    });


client.on("guildMemberAdd", async member => {
   let guild = member.guild;
   if(guild.id !== 'sunucu id') return;
   let otorol = '888862968715051047' //sunucuya girince verilecek rol id
   member.roles.add(otorol) 
    });


/////main/////
 client.on('ready', () => {
setInterval (() => {
let server = client.guilds.cache.get("sunucu id")
server.members.cache.filter(u => db.get("limit_"+u.user.id)).map(m => {
db.delete("limit_"+m.user.id)

})
    }, 1800000);
}); 



client.on('message', async msg => {
  let prefix = ayarlar.prefix 
  if(msg.content == `<@!881455424954593330>`) return msg.channel.send(`**Biri Beni mi Çağırdı? Prefixim (.)**`);
});



client.on('guildMemberAdd', member => {
  // Rol
  let rol = "888862968715051047"//sunucuya girince verilecek rol id

  // Sunucuya Giren Kişiye Rol Verme
  member.roles.add(rol)

  // Hg Mesajı
 
  client.channels.cache.get('888862968870223927').send(`${member} **Kişisine \`Kayıtsız Üye\` Rolünü Verdim, Sunucumuza Hoş Geldin!**`)
})





client.on("message", message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send(`✰`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".tag") 
    return message.channel.send(`✰`)
});



const dbuttons = require("discord-buttons");
const { MessageMenu, MessageMenuOption } = require('discord-buttons');
client.on("message", async message => {
    if(message.content.startsWith(".menu")){
        if(message.author.bot) return;
        let secenek1 = new MessageMenuOption()
        .setLabel("Çekiliş")
        .setValue("Koç")
        .setDescription("Çekiliş Rolü")
        .setDefault()
        .setEmoji("🎉")
        let secenek2 = new MessageMenuOption()
        .setLabel("Etkinlik")
        .setValue("Boğa")
        .setDescription("Etkinlik Rolü")
        .setDefault()
        .setEmoji("🎁")
        
        let menu = new MessageMenu()
        .setID("MENU")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("Viana Etkinlik Rolleri")
        .addOption(secenek1)
        .addOption(secenek2)
        const embed = new MessageEmbed()
        .setTitle("Etkinlik Rol Alma")
        .setFooter("Viana Etkinlik Rolleri")
        .setColor("BLUE")
        let menumesaj = await message.channel.send("\`- - -ETKİNLİK ROLLERİ- - -\`", menu)
        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Koç":
                    menu.reply.send(" Çekiliş Rolü Verildi.", true)
                menu.clicker.member.roles.add("880820035797545056")
                break;
                case "Boğa":
                    menu.reply.send(" Etkinlik Rolü Verildi.", true)
                 menu.clicker.member.roles.add("880820035797545055")  
                break;
              
            }
        }
        client.on("clickMenu", menu => {
            if(menu.message.id == menumesaj.id) {
                    menuselection(menu)
                }
            }
        )
    }
})

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Calabria ❤️" }, status: "dnd" });
  });

