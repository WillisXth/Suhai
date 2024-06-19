const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Winspertech.100@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Willis254:d5_!LpGM#i_w.U!@cluster0.hhbfqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/WillisKE/Suhail";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" 


global.devs = "254786273945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" //"text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254786273945,254702365210,254708336448,254762508828";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://sessionpair.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05DdlprZURuVFNFZngzaFRKRDR2YVhhR3hnUThRQ3VLYXVUSGhoZWpsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VYdHlwb1R3NTZ5WUl4ZE5Tc3VrUWZjcTlEMVN0MjFkbHNnVWxVelBuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUGRrVXltVkl0SmY0NXpZWk1Qb0VsYlNSWmxnR3R3a1JkL0ZaelR1dkZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQ044Z0pPMm9NeDN6THFFUTF2NUZZckI1RWgxREE3QjMxV3Y1RFpDb1U4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNdUJpOEtLYllTRERGaHNlMHZiQjhZWU0rb3N0OFRuc3Z6WUdCS0VwVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdWa0ttOGJWM0dzQWlMSHVjV0Z1dk92Ni8ySUk1VS8yNUg3anBTYUg0RzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEN2UlJTMXB0WG9URWIvcE5PYUxUc2ZiZExEaVBRS3FEQnhKRUlqUlQzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielo1UXJ3VUUxSEIzdVdSMkh2d0w4ZHZmcWtXNWljbDNTOEZTMU4rZ3hIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpoS09oVnF1cTdRb1hyK1B2T3VGdkZpTHJiTWExR3NtcFhiOG9qdUVESFR4U1dZWlc3V1F3YURJbGRYa2RzQTBNZklMRjA2T3FPMXRyNEVxVWZlV0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IjRLOWNGZGFYNlRUV2EzOEV4bE9lV2JRdVJYZ2gyT2loZXNtcHFpZU1VR2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlYwVVl4TkVyVC1lUUppd1VZVkV3dmciLCJwaG9uZUlkIjoiMjU0ZDY0YjktNTNmOC00NjRlLWFmZmYtMWNjMjJlYjc1ZDZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVwOUZyZ2hqamQ1cHRUOE1HYWZaVno5VEptWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtcFpRYkVNTUxXTmhtT0l2OEUyMnIzcGpqOXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkdFSzczMk0iLCJtZSI6eyJpZCI6IjI1NDc4NjI3Mzk0NTo1MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVB1bTVvQkVMYjR1N01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMTRrUUEyWkh6c05qOHNnSmh4cTRnSVpaNFJBUGxkbi90YVJUbkk0NWVHST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN1orYWRlTndRZUY3MzZoRmFSL1oxTHBnVW9hYU5VekIrY0lnSCs4Nm9nSndEOXYzZXE2RE9WaHIxM0RGMnhiZ1J1YzRBMi9iaG5jYUlZTWRGVHFpRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InBoK0dxS0VPS0NsL1JHM0RvYUlYcVhmVW9MNk5uRG0xSTdHK0F5ZW1oNktzZWtxcHJhbnhYWmZlUGVYOFJMQ2Zyd09hd1p2ZnVKQVkzME9uQzlGYkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzg2MjczOTQ1OjUxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRlSkVBTm1SODdEWS9MSUNZY2F1SUNHV2VFUUQ1WFovN1drVTV5T09YaGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg1NDk1NzF9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〃Willis",
  packname: process.env.PACK_NAME || "〃",
  botname : process.env.BOT_NAME  || "ᴡɪʟʟɪꜱ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "≛ Willis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "bb60b12577e6c25424883cc9f72ffe88";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
