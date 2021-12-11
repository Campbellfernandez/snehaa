
const Maalutty = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Maalutty.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/BsVW6fM/IMG-20211210-WA0528.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 10) wish = '*ɢᴏᴏᴅ ᴍʀɴɪɴɢ ʙʀᴏ🌅*'
if (hrs >= 10 && hrs <= 13) wish = '*ʜᴇʟʟᴏ👋*'
if (hrs >= 13 && hrs <= 16) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ ʙʀᴏ🌇*'
if (hrs >= 16 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ🏝️*'
if (hrs >= 19 && hrs <= 24) wish = '*ᴍɪᴅ ɴɪɢʜᴛ🌃*'

if (config.FULLEVA == 'true') eva = 'On'
if (config.FULLEVA == 'false') eva = 'Off'
if (config.AUTOBİO == 'true') auto_bio = 'On'
if (config.AUTOBİO == 'false') auto_bio = 'Off'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
    ` + config.BOT + `
╭──────────────────╯
│
│ ᴍᴡᴏɴᴜsᴇ ` + wish + `
│         *⌚` + time + `*
│
│ ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ꪶ͢ʜᴜsɴɪ ɴɪᴊɪɴꫂ
│ ▢ *ʙᴏᴛ * :` + config.BOT + `
│ ▢ *ᴠᴇʀsɪᴏɴ* : 2.0
│ ▢ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│ ▢ *ᴘʀᴇғɪx* : *. , !*
│
│╔════╗╔═╗╔══╗╔╗╔╗╔╗
│║╔╗╔╗║║═╝║╔╗║║║║║║║
│║║║║║║║═╗║║║╚╝║║╚╝║
│╚╝╚╝╚╝╚═╝╚╝╚══╝╚══╝
│  ©ꪶ͢Devil_sirꪶ͢
│
╰──────────────────╮
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
╭──────────────────╯
│ ◩ ᴍᴇɴᴜ ◪
╭──────────────────╯
│
│[ ᴍᴇᴅɪᴀ ]
│
│ ▢ .sᴏɴɢ
│ ▢ .ᴠɪᴅᴇᴏ
│ ▢ .ɪɴsᴛᴀ
│ ▢ .ʏᴛ
│         
│[ ᴄᴏɴᴠᴇʀᴛ ]
│
│ ▢ .ɢɪғ
│ ▢ .ᴍᴘ3
│ ▢ .ᴛᴛs
│ ▢ .ɪᴍɢ
│ ▢ .sᴛɪᴄᴋᴇʀ
│ ▢ .ᴀᴛᴛᴘ
│ ▢ .ᴛᴛᴘ
│ ▢ .ᴘʜᴏᴛᴏ
│ ▢ .2ɪᴍɢ
│
│[ ᴍᴀᴋᴇʀ ]
│
│ ▢ .ᴍᴏʀᴇᴛxᴛ
│ ▢ .2ᴍᴏʀᴇᴛxᴛ
│ ▢ .xᴍᴇᴅɪᴀ
│ ▢ .ᴍᴍᴘᴀᴄᴋ
│ 
│[ ғᴜɴ ]
│
│ ▢ .ᴊᴏᴋᴇ
│ ▢ .ᴍᴇᴍᴇ
│ ▢ .ǫʀ
│ ▢ .ᴄʜᴀɴɢᴇsᴀʏ
│ ▢ .ᴛʀᴜᴍᴘsᴀʏ
│ ▢ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ sᴇᴀʀᴄʜ ]
│ 
│ ▢ .ᴡɪᴋɪ
│ ▢ .ʟʏʀɪᴄ
│ ▢ .sʜᴏᴡ
│ ▢ .ᴍᴏᴠɪᴇ
│ ▢ .ᴡᴇᴀᴛʜᴇʀ
│
│[ ᴛᴀɢ ]
│
│ ▢ .ᴛᴀɢᴀʟʟ
│ ▢ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ ᴏᴛʜᴇʀ ]
│ 
│ ▢ .ᴀɴɪᴍᴇ
│ ▢ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ▢ .ss
│ ▢ .ᴅɪᴄᴛ
│ ▢ .sʜᴏʀᴛ
│ ▢ .ᴛʀᴛ
│ ▢ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]
│
│ ▢ .ғᴜʟʟᴇᴠᴀ 
│ ▢ .ᴀᴜᴛᴏʙɪᴏ
│ ▢ .ʙᴀɴ
│ ▢ .ᴀᴅᴅ
│ ▢ .ᴘʀᴏᴍᴏᴛᴇ
│ ▢ .ᴅᴇᴍᴏᴛᴇ
│ ▢ .ᴍᴜᴛᴇ
│ ▢ .ᴜɴᴍᴜᴛᴇ
│ ▢ .ɪɴᴠɪᴛᴇ
│ ▢ .sᴇᴛᴠᴀʀ
│ 
│
│   ❏ *Devil_sir* ❏
╰──────────────────╯
`}) 

}));
