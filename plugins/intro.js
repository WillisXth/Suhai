const { smd, Config,smdBuffer,  prefix } = require('../lib')





var surl = 'https://www.youtube.com/c/WillisWrld' // Source URL

const number = '254786273945'

var name = 'ᴡɪʟʟɪꜱ'

var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'

var image = 'https://telegra.ph/file/cd250759ecb35a39a9951.jpg'

let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       〃ᴡɪʟʟɪꜱ〃
│ *Name*     : ᴡɪʟʟɪꜱ
│ *Place*    : ᴋɪꜱᴜᴍᴜ/ᴋᴇɴʏᴀ
│ *Gender*   :  ᴍ
│ *Age*      : 18
│ *Phone*    : +254786273945

│ *Support*  : M-Pesa BuyGoodsTill - *9657729*

│ *YouTube*  :↷
│ https://www.youtube.com/c/WillisWrld
│ *InstaGram* :↷
│ • https://www.instagram.com/Officialwilis
│ *FaceBook*  :↷
│ • https://www.facebook.com/Officialwilis
│ *GitHub*    :↷
│ • https://github.com/WillisKE  
│ Status      : ᴘʀᴏꜰᴇꜱꜱɪᴏɴᴀʟ ᴅᴇᴠᴇʟᴏᴘᴇʀ 
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`







 //---------------------------------------------------------------------------

 smd({

             pattern: "intro",

             alias: ["willis","will","winspertech"],

             desc: "Show intro of user",

             category: "whatsapp",

             filename: __filename,

             use: '<group link.>',

         },

         async(message) => {

    try{

          let media ;try{ media = await smdBuffer(image) }catch{media = log0}

           const q =await message.bot.fakeMessage("contact",{},name) 

           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}

           await message.send(text, {contextInfo : contextInfo },"suhail",  q )

    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}





 })
