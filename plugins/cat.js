const {

    smd,

    tlang,

    prefix, 

    Config ,

    sleep,

    getBuffer, 

    smdJson,

    smdBuffer

     } = require('../lib')







smd({

    cmdname: "cat",

    desc: "Send Images of randome Cats!",

    type: "misc",

    filename: __filename,

  },

  async(m)=>{

  try{

    await m.send('https://cataas.com/cat',{caption:"*meyaoooooooooooooon!*"},"img",m)

  }catch(e){ m.error(`${e}\n\nCommand: cat`,e,false)}

  })

  

  
