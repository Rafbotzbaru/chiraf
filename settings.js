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
global.owner = ['6281229979979'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6281229979979'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6281229979979' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Ernestoyoofi' //Owner Bots
global.botname = 'Ernestoyoofi' //Bot Name
global.footer = 'Ernestoyoofi' //Footer Text

//—————「 Set Kebutuhan Button & Kontak 」—————//
global.youtube = 'https://youtube.com/ernestoyoofi'
global.ig = 'http://instagram.com/yoofi.ernesto/'
global.mygc = 'https://chat.whatsapp.com/Bp3i42WNu80LsxYtQbRidz'
global.myweb = 'https://ernestoyoofi.github.io/'
global.email = 'info.ernestoyoofi@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Ernestoyoofi' //ubah jadi nama mu, note tanda ' gausah di hapus!

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
success: 'Berhasil',
admin: 'Hanya Admin 😅👆',
botAdmin: 'Jadiin Admin Lah 🥰',
owner: 'Hanya Owner Bot 🗿',
group: 'Hanya Digunakan Untuk Group',
private: 'Hanya Digunakan Untuk Private Chat',
bot: 'Khusus Pengguna Nomor Bot',
wait: 'Tunggu Sebentar...',
error: 'Fitur Sedang Error 📃',
endLimit: 'Limitmu Habis, Tunggu Jam 12',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
