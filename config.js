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


global.SESSION_ID = process.env.SESSION_ID ||  "WILLIS;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RnMG5IRyszdEU3RDhZNDgyUjdXK2V0ak42RGR1MDFucHRrcGZCekswaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazZtZGJEbEZITUx0dW9KV25tMGJUT1BrMSs0TU1XNXNYY3ZOeUVlNXcxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RDJmeFpXQkl6UXI3OUV1eGVZZWVXSWhmTGY1eTJSdVdzMFFWb09HeUVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVMG5uUjRWc1Zwd3R2ZFlZSExyaGVxeVpDbVp4dkpmeWVtYXZrTWo4N1NFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCVzdodFlaS0Y2RklISVpOOU1xejNPSW55dUVobnF3WndpcWpUS0xXSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd4RTZqVk9nSFFCd2d2OHAxNTB5M2FlNlE5VEZYbXIzQ2V5cGs5T29UMU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQrNHd2aTU2Y1dOTFloS2ZCWmtUcDdRd2VRd0w2OE02YXZtMzB4MHNrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRm5BL1d6NmdLZHVlTm1hUEpxOHBNMjNhclIwTjA5aXB6M3I1dkNFUXIyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1aYkc4WVljTUFocStaVkU0U3M3Z0FGaUJtRytHbmNjVFd0UWhZKzJJTmQwVnp4R3NpRE01OTdyemZiclRRWGxXMkdIaVRGRyswUFpZUG1rUEhSUEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6ImNwZi9lOUNLOEtTYlFFc0c3Z0lBbys5QVgvRkx1Z0hkaU9GWUdnTEdSRE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFkWFBtejNmUnVhc3pObjQ1ODFZZ3ciLCJwaG9uZUlkIjoiNTg2ZWUzMzMtYWJmYy00YjgzLTk0ODYtMTUyZGUwMzVjMzcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM0RFcrRVZEM0JZRlRsenVVcnBubG1oTHZ0QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZkxsZGVTYnc4SGY0enpWS1VPdm82YlpRR2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRDg4WFA3NUIiLCJtZSI6eyJpZCI6IjI1NDEwMTA2MzIyNjoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNmg1TGdFRVBlUHQ3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHWE9aNGV0WUhQMXptODd3K04vcU1xZ0xoT0VldjFaNW00TE9wb2FCNEU0PSIsImFjY291bnRTaWduYXR1cmUiOiJ5VHk5VlhCZEhKTklUaXB4UWhnRHBTallnc2xEWDNaTnlsUGxVM3B2TXF1SUExVlZWeFo2L2F6RWJzbks4bld0UkZmOUM0T0VOTXJFd0FOTmZ4MElBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZjRZMEpCTHIrR2ZJYVZEb0hINkNwU1FEY25HRnFCREtyaVNxUlkyU2pwRHd3MDJYZFFzMk5PWHlJY0oxaC9ibGJOdmdLVEZkMTBhZDArQjQ4Rm9HREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMDEwNjMyMjY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbHptZUhyV0J6OWM1dk84UGpmNmpLb0M0VGhIcjlXZVp1Q3pxYUdnZUJPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NDcwNjYyfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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
