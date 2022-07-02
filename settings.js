/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//Import Modules
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['6281946945315'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6281946945315'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6281946945315' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Asyraf 6Youu' //Owner Bots
global.botname = 'Raf Botz' //Bot Name
global.footer = 'Raf Botz' //Footer Text

//—————「 Set Kebutuhan Button & Kontak 」—————//
global.youtube = 'https://youtube.com/channel/UCY6WNM6jZlmfWULcG69rNbQ'
global.ig = 'https://instagram.com/asyrafsixyouu'
global.mygc = 'https://chat.whatsapp.com/CRrj0z3HgeX39XHNUt0M9V'
global.myweb = 'https://github.com/Rafbotzbaru'
global.email = 'rafbotzwhatsapp@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = 'Stickef By' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Raf Botz' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
global.sessionName = 'session'

//—————「 Set Limit 」—————//
global.limitawal = {
premium: "Infinity",
free: 30,
}

//—————「 Set Image 」—————//
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
global.BgWelcLeav = 'https://ernestoyoofi.github.io/assets/img/banner.png'

//—————「 Set Random Image Menu 」—————//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

/*—————「 Set Prefix 」—————*/
global.prefa = ['','!','.','🐦','🐤','🗿']

/*—————「 Set Simbol 」—————*/
global.sp = '»'

//—————「 Set Message 」—————//
global.mess = {
success: 'Gagal, Awowkwowk',
admin: 'Lu Cuman Member,Kasian Awowkowkwok',
botAdmin: 'Bot Admin Tolol',
owner: 'Aowkwowk Lu Cuman Pengguna, Bukan Owner',
group: 'Khusus Grup Kntl',
private: 'Khusus Chat Pribadi Tolol',
bot: 'Khusus Pengguna Nomor Bot',
wait: 'Loading...,Moga Gagal',
error: 'Eror Tolol',
endLimit: 'Limitlu Habis tolol, nunggu 1 abad lagi',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
