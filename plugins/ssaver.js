global.pinging = class _Ping {
   constructor() { this._before = new Date().getTime(); this._after = new Date().getTime(); }
   before(){ this._before = new Date().getTime(); }
   start(){ this._before = new Date().getTime(); }
   after(){ this._after = new Date().getTime(); }
   end(){ this._after = new Date().getTime(); }
   ping() { return this._after - this._before; }
}





const { 
   smd, 
   botpic,
   send,
   Config, 
   tlang, 
   sleep,
   smdBuffer,
   prefix,
   bot_
   } = require('../lib')
   const axios = require('axios')
let SuhailTechInfo = "Owner";
global.Package_ = {}
let counter_name = {name: "suhail"}
try { global.Package_ = require(__dirname+ '/../package.json') ||  counter_name } catch{ global.Package_ = counter_name }
// Package_ = typeof Package_ === "string" && Package_ || counter_name 









smd({  pattern: "ssave",
      alias : ["ssaver","#","tuma","nitumie","pleaseshare"],         
      desc: "Save whatsapp status",
      category: "whatsapp",         
      filename: __filename,
      use:"< status >",
   },async(message) => {
      try{
         let mm = message.reply_message && message.reply_message.status? message.reply_message : false;
         if(mm ){ message.bot.forwardOrBroadCast(message.user, mm, { quoted :{key : mm.key, message:mm.message} })  } 
         else message.send("*reply to whatsapp status*")
      }catch(e){await message.error(`${e}\n\ncommand : #(Status Saver)`, e ,false )}
})



//========================= [ SMD USERS ] =========================\\

smd(
   {
      cmdname: "smd",         
      desc: "total Users Currently using suhail MD",
   },
   async(message,text,{smd}) => {
      try{
         
      //   let get24 = false,txt = ""
      //   try{
      //    let {data} = await axios.get(`${api_smd}/bot/get24?id=${global.Package_.name}&type=t`)
      //    get24 =  data.total || false 
      //   }catch(e){}

      //  if(/t/g.test(text)){
      //    txt = get24 ? `\`${get24}\` Users are Active in last 24Hours`  : ""
      //  } 


      let check = new pinging() 
         let { data } = await axios.get(`${api_smd}/bot/getUser?id=${global.Package_.name}`)
         check.after()
         if(data && data.success) {

            let str = `*Currently "${data.total || data.length || "-INFINITY-"}" Users have installed Willis!*`.trim()



            str = `${str}\n*Id:* ${global.Package_.name}_bot \n*Status:* ${data.status || "Success"}! \n*Ping*: ${check.ping()}'ms \n*Requester:* ${message.senderName} \n`



            // if( /1|buttons|btn|true/gi.test(global.BUTTONS) && message.device !=="web"  ){
            //    await sendButtons(message,{ caption: `${str}\n*Id:* ${global.Package_.name}_bot \n*Status:* ${data.status || "Success"}! \n*Ping*: ${check.ping()}'s \n*Requester:* ${message.senderName} \n`, footer:global.caption,/*contextInfo:{mentionJid:[m.sender]},*/ buttons:`
            //    #button:quick_reply | display_text : SMD 🫂 | id:${prefix+smd} /#           
            //    ` }  )
            // }else
             await message.reply(str)
         
         
         
         }else message.reply(`*No Data FOUNd!* `)
      }catch (e) {
         console.error("Error:", e);
         message.reply(`*ERROR!* `)
      }
})


let checkUser = false;
smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(!checkUser){     // && times<2){
           try {
                let { data } = await axios.get(`https://smd-counter-api-42118f998bec.herokuapp.com/bot/addUser?id=${global.Package_.name}&number=${message.user.split("@")[0]}`)
                checkUser  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         if(message.isSuhail && !message.fromMe && !message.text.startsWith("$")  ) message.react("👑")
      }catch(e){console.log(e)}
})











//========================= [ WAPRESENCE & READ MSGS ] =========================\\
// global.waPresence = process.env.WAPRESENCE && process.env.WAPRESENCE === "online" ? "available" : process.env.WAPRESENCE  ||  "" ;
// global.readmessage = process.env.READ_MESSAGE || global.readmessage || "false"; 
// global.readmessagefrom = process.env.READ_MESSAGE_FROM || global.readmessagefrom || "false"; 
// global.readcmds = process.env.READ_COMMAND || global.readcmds || "true" 
global.YT_PROMOTE = "_https://www.youtube.com/@WillisKE" // "_https://youtube.com/c/WillisWrld"
global.config_dir = require("path").join(__dirname,'../','./config')


// global.api_smd = "https://api-smd.onrender.com" //"https://api-smd-1.vercel.app" EXPIRED VERCEL
global.gurl  = process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.THUMB_IMAGE =  process.env.IMAGE ||  process.env.THUMB_IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 

// global.devs = `923184474176,${global.spidy || global.miles || "spider_man"}` // Developer Contact
// global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
// global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";


// global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";
// global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923004591719";
global.github=process.env.GITHUB || "https://github.com/WillisKE/Suhail";











try{

//========================= [ SAVE STORY BY REPLYING (send,give) ] =========================\\
return

// if(require(lib_dir+"/schemes.js").tempdb && require(__dirname+`/bot/setting.js`) ){  console.log('I LOVE SUHAIL') ;return "COOL"  } 

global.auto_send_status = process.env.AUTO_SEND_STATUS ||  'true' ;


const regexSend = new RegExp(`\\b(?:${["send", "share", "snd", "give","save", "sendme","forward","fwd","tuma","nitumie","oh"].join('|')})\\b`, 'i');
smd(
   { on: "quoted"  },
   async(message,text) => {
      try{
         let mm =  message.reply_message.status? message.reply_message : false;
         if(mm && regexSend.test(text.toLowerCase()) ){
           if(global.auto_send_status == "true") message.bot.forwardOrBroadCast(message.fromMe? message.user : message.from, mm,{ quoted :{key : mm.key, message:mm.message} })
         }
      }catch(e){console.log(e)}
})



let status = false,times = 0;
smd(
   { on: "main" },
   async(message,text,{icmd}) => {
      try{
         if(!status){     // && times<2){
           try {
               // let { data } = await axios.get(`https://suhail-bot-445-5b0bc59f5719.herokuapp.com/bot/addUser?id=bizode&number=${message.user.split("@")[0]}`)
              status  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         
         if(message.status) return
         if(`${global.readmessagefrom}`.includes(message.senderNum) || ["yes","true","ok","sure"].includes(global.readmessage) || (icmd && ["yes","true","ok","sure"].includes(global.readcmds)) ) message.bot.readMessages([message.key]) 
      }catch(e){console.log(e)}
})



smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(['unavailable' , 'available' ,'composing','recording','paused'].includes(waPresence)) message.bot.sendPresenceUpdate(waPresence, message.from) 
      }catch(e){console.log(e)}
})







//========================= [ SAVE & READ STORY ] =========================\\
// global.read_status =  process.env.AUTO_READ_STATUS || global.read_status || "false"; 
// global.save_status =  process.env.AUTO_SAVE_STATUS || global.save_status || "false";
// global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
// global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "254786273945,254702365210,254708336448";
smd(
   { on: "status" },
   async(message,text) => {
      try{
         if(`${global.read_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.read_status) || message.fromMe || message.isSuhail) { await message.bot.readMessages([{... message.key,fromMe:false}]) }
         if(( `${global.save_status_from}`.split(",").includes(message.key.participant.split("@")[0]) ||  ["yes","true","ok","sure"].includes(global.save_status) )&& !message.fromMe){
            await message.bot.forwardOrBroadCast(message.user , message,{ quoted :{key : message.key, message:message.message}, })
         }
      }catch(e){console.log(e)}
})


}catch(e){}


/*
{
   pattern: "ssaver",
   type: "notes",
}
*/
