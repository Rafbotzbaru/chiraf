/*
› Modified By @Ernestoyoofi
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Klok Ada Bug Bilang Ya Tolol, Tapi G Bakalan Peduli Kok`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo ${pushname} Anak Yatim, Pilih Menu Disini Tolol`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📚 List Menu : ${botname}*

  ┏━「 Group Menu 」
  ┃ » ${prefix}linkgroup
  ┃ » ${prefix}ephemeral [option]
  ┃ » ${prefix}setppgc
  ┃ » ${prefix}setname 
  ┃ » ${prefix}setdesc 
  ┃ » ${prefix}group [option]
  ┃ » ${prefix}editinfo [option]
  ┃ » ${prefix}add @user
  ┃ » ${prefix}kick @user
  ┃ » ${prefix}hidetag 
  ┃ » ${prefix}tagall 
  ┃ » ${prefix}antilink [on/off]
  ┃ » ${prefix}mute [on/off]
  ┃ » ${prefix}promote @user
  ┃ » ${prefix}demote @user
  ┃ » ${prefix}vote 
  ┃ » ${prefix}devote
  ┃ » ${prefix}upvote
  ┃ » ${prefix}cekvote
  ┃ » ${prefix}hapusvote
  ┗━━━
  
  ┏━「 Downloader Menu 」
  ┃ » ${prefix}tiktoknowm 
  ┃ » ${prefix}tiktokwm 
  ┃ » ${prefix}tiktokmp3 
  ┃ » ${prefix}instagram 
  ┃ » ${prefix}twitter 
  ┃ » ${prefix}twittermp3 
  ┃ » ${prefix}facebook 
  ┃ » ${prefix}pinterestdl 
  ┃ » ${prefix}ytmp3 
  ┃ » ${prefix}ytmp4 
  ┃ » ${prefix}getmusic 
  ┃ » ${prefix}getvideo 
  ┃ » ${prefix}umma 
  ┃ » ${prefix}joox 
  ┃ » ${prefix}soundcloud
  ┗━━━
  
  ┏━「 Search Menu 」 
  ┃ » ${prefix}play 
  ┃ » ${prefix}yts 
  ┃ » ${prefix}google 
  ┃ » ${prefix}gimage 
  ┃ » ${prefix}pinterest 
  ┃ » ${prefix}wikimedia 
  ┃ » ${prefix}ytsearch 
  ┃ » ${prefix}ringtone 
  ┃ » ${prefix}stalk [option] 
  ┃ » ${prefix}webtoons 
  ┃ » ${prefix}drakor 
  ┃ » ${prefix}animesearch 
  ┃ » ${prefix}character 
  ┃ » ${prefix}manga 
  ┃ » ${prefix}playstore 
  ┃ » ${prefix}gsmarena 
  ┃ » ${prefix}jadwalbioskop 
  ┃ » ${prefix}nowplayingbioskop 
  ┃ » ${prefix}aminio 
  ┃ » ${prefix}wattpad 
  ┃ » ${prefix}webtoons 
  ┃ » ${prefix}drakor
  ┗━━━
  
  ┏━「 Tele Stick Menu 」
  ┃ » ${prefix}gurastick
  ┃ » ${prefix}dogestick
  ┃ » ${prefix}bucinstick
  ┃ » ${prefix}patrick
  ┗━━━
  
  ┏━「 Random Menu 」
  ┃ » ${prefix}coffe
  ┃ » ${prefix}quotesanime
  ┃ » ${prefix}couple
  ┃ » ${prefix}darkjokes
  ┗━━━
  
  ┏━「 Random Anime 」
  ┃ » ${prefix}loli
  ┃ » ${prefix}neko
  ┃ » ${prefix}waifu
  ┃ » ${prefix}shinobu
  ┃ » ${prefix}megumin
  ┃ » ${prefix}bully
  ┃ » ${prefix}cuddle
  ┃ » ${prefix}cry
  ┃ » ${prefix}hug
  ┃ » ${prefix}awoo
  ┃ » ${prefix}kiss
  ┃ » ${prefix}lick
  ┃ » ${prefix}pat
  ┃ » ${prefix}smug
  ┃ » ${prefix}bonk
  ┃ » ${prefix}yeet
  ┃ » ${prefix}blush
  ┃ » ${prefix}smile
  ┃ » ${prefix}wave
  ┃ » ${prefix}highfive
  ┃ » ${prefix}handhold
  ┃ » ${prefix}nom
  ┃ » ${prefix}bite
  ┃ » ${prefix}glomp
  ┃ » ${prefix}slap
  ┃ » ${prefix}kill
  ┃ » ${prefix}happy
  ┃ » ${prefix}wink
  ┃ » ${prefix}poke
  ┃ » ${prefix}dance
  ┃ » ${prefix}cringe
  ┃ » ${prefix}anime
  ┃ » ${prefix}waifu
  ┃ » ${prefix}husbu
  ┃ » ${prefix}neko
  ┃ » ${prefix}shinobu
  ┃ » ${prefix}waifus 
  ┃ » ${prefix}nekos 
  ┃ » ${prefix}trap 
  ┃ » ${prefix}blowjob 
  ┗━━━
  
  ┏━「 Text Pro 」
  ┃ » ${prefix}3dchristmas
  ┃ » ${prefix}3ddeepsea
  ┃ » ${prefix}americanflag
  ┃ » ${prefix}3dscifi
  ┃ » ${prefix}3drainbow
  ┃ » ${prefix}3dwaterpipe
  ┃ » ${prefix}halloweenskeleton
  ┃ » ${prefix}sketch
  ┃ » ${prefix}bluecircuit
  ┃ » ${prefix}space
  ┃ » ${prefix}metallic
  ┃ » ${prefix}fiction
  ┃ » ${prefix}greenhorror
  ┃ » ${prefix}transformer
  ┃ » ${prefix}berry
  ┃ » ${prefix}thunder
  ┃ » ${prefix}magma
  ┃ » ${prefix}3dcrackedstone
  ┃ » ${prefix}3dneonlight
  ┃ » ${prefix}impressiveglitch
  ┃ » ${prefix}naturalleaves
  ┃ » ${prefix}fireworksparkle
  ┃ » ${prefix}matrix
  ┃ » ${prefix}dropwater
  ┃ » ${prefix}harrypotter
  ┃ » ${prefix}foggywindow
  ┃ » ${prefix}neondevils
  ┃ » ${prefix}christmasholiday
  ┃ » ${prefix}3dgradient
  ┃ » ${prefix}blackpink
  ┃ » ${prefix}gluetext
  ┗━━━
  
  ┏━「 Photo Oxy Menu 」
  ┃ » ${prefix}shadow
  ┃ » ${prefix}romantic
  ┃ » ${prefix}smoke
  ┃ » ${prefix}burnpapper
  ┃ » ${prefix}naruto
  ┃ » ${prefix}lovemsg
  ┃ » ${prefix}grassmsg
  ┃ » ${prefix}lovetext
  ┃ » ${prefix}coffecup
  ┃ » ${prefix}butterfly
  ┃ » ${prefix}harrypotter
  ┃ » ${prefix}retrolol
  ┗━━━
  
  ┏━「 Ephoto Menu 」
  ┃ » ${prefix}ffcover
  ┃ » ${prefix}crossfire
  ┃ » ${prefix}galaxy
  ┃ » ${prefix}glass
  ┃ » ${prefix}neon
  ┃ » ${prefix}beach
  ┃ » ${prefix}blackpink
  ┃ » ${prefix}igcertificate
  ┃ » ${prefix}ytcertificate
  ┗━━━
  
  ┏━「 Game And Fun Menu 」
  ┃ » ${prefix}simih
  ┃ » ${prefix}bagaimanakah
  ┃ » ${prefix}kapankah
  ┃ » ${prefix}apakah
  ┃ » ${prefix}bisakah
  ┃ » ${prefix}rate
  ┃ » ${prefix}wangy
  ┃ » ${prefix}gantengcek
  ┃ » ${prefix}cekganteng
  ┃ » ${prefix}cantikcek
  ┃ » ${prefix}cekcantik
  ┃ » ${prefix}sangecek
  ┃ » ${prefix}ceksange
  ┃ » ${prefix}gaycek
  ┃ » ${prefix}cekgay
  ┃ » ${prefix}lesbicek
  ┃ » ${prefix}halah
  ┃ » ${prefix}hilih
  ┃ » ${prefix}huluh
  ┃ » ${prefix}heleh
  ┃ » ${prefix}holoh
  ┃ » ${prefix}jadian
  ┃ » ${prefix}jodohku
  ┃ » ${prefix}tictactoe
  ┃ » ${prefix}delttt
  ┃ » ${prefix}family100
  ┃ » ${prefix}tebak [option]
  ┃ » ${prefix}math [mode]
  ┃ » ${prefix}suitpvp [@tag]
  ┗━━━

  ┏━「 Primbon 」
  ┃ » ${prefix}nomorhoki
  ┃ » ${prefix}artimimpi
  ┃ » ${prefix}artinama
  ┃ » ${prefix}ramaljodoh
  ┃ » ${prefix}ramaljodohbali
  ┃ » ${prefix}suamiistri
  ┃ » ${prefix}ramalcinta
  ┃ » ${prefix}cocoknama
  ┃ » ${prefix}pasangan
  ┃ » ${prefix}jadiannikah
  ┃ » ${prefix}sifatusaha
  ┃ » ${prefix}rezeki
  ┃ » ${prefix}pekerjaan
  ┃ » ${prefix}nasib
  ┃ » ${prefix}penyakit
  ┃ » ${prefix}tarot
  ┃ » ${prefix}fengshui
  ┃ » ${prefix}haribaik
  ┃ » ${prefix}harisangar
  ┃ » ${prefix}harisial
  ┃ » ${prefix}nagahari
  ┃ » ${prefix}arahrezeki
  ┃ » ${prefix}peruntungan
  ┃ » ${prefix}weton
  ┃ » ${prefix}karakter
  ┃ » ${prefix}keberuntungan
  ┃ » ${prefix}memancing
  ┃ » ${prefix}masasubur
  ┃ » ${prefix}zodiak
  ┃ » ${prefix}shio
  ┗━━━

  ┏━「 Cerpen 」
  ┃ » ${prefix}cerpen anak
  ┃ » ${prefix}cerpen bahasa daerah
  ┃ » ${prefix}cerpen bahasa inggris
  ┃ » ${prefix}cerpen bahasa jawa
  ┃ » ${prefix}cerpen bahasa sunda
  ┃ » ${prefix}cerpen budaya
  ┃ » ${prefix}cerpen cinta
  ┃ » ${prefix}cerpen cinta islami
  ┃ » ${prefix}cerpen cinta pertama
  ┃ » ${prefix}cerpen cinta romantis
  ┃ » ${prefix}cerpen cinta sedih
  ┃ » ${prefix}cerpen cinta segitiga
  ┃ » ${prefix}cerpen cinta sejati
  ┃ » ${prefix}cerpen galau
  ┃ » ${prefix}cerpen gokil
  ┃ » ${prefix}cerpen inspiratif
  ┃ » ${prefix}cerpen jepang
  ┃ » ${prefix}cerpen kehidupan
  ┃ » ${prefix}cerpen keluarga
  ┃ » ${prefix}cerpen kisah nyata
  ┃ » ${prefix}cerpen korea
  ┃ » ${prefix}cerpen kristen
  ┃ » ${prefix}cerpen liburan
  ┃ » ${prefix}cerpen lingkungan
  ┃ » ${prefix}cerpen lucu
  ┃ » ${prefix}cerpen malaysia
  ┃ » ${prefix}cerpen mengharukan
  ┃ » ${prefix}cerpen misteri
  ┃ » ${prefix}cerpen motivasi
  ┃ » ${prefix}cerpen nasihat
  ┃ » ${prefix}cerpen nasionalisme
  ┃ » ${prefix}cerpen olahraga
  ┃ » ${prefix}cerpen patah hati
  ┃ » ${prefix}cerpen penantian
  ┃ » ${prefix}cerpen pendidikan
  ┃ » ${prefix}cerpen pengalaman pribadi
  ┃ » ${prefix}cerpen pengorbanan
  ┃ » ${prefix}cerpen penyesalan
  ┃ » ${prefix}cerpen perjuangan
  ┃ » ${prefix}cerpen perpisahan
  ┃ » ${prefix}cerpen persahabatan
  ┃ » ${prefix}cerpen petualangan
  ┃ » ${prefix}cerpen ramadhan
  ┃ » ${prefix}cerpen remaja
  ┃ » ${prefix}cerpen renungan
  ┃ » ${prefix}cerpen rindu
  ┃ » ${prefix}cerpen rohani
  ┃ » ${prefix}cerpen romantis
  ┃ » ${prefix}cerpen sastra
  ┃ » ${prefix}cerpen sedih
  ┃ » ${prefix}cerpen sejarah
  ┃ » ${prefix}cerpen slice of life
  ┃ » ${prefix}cerpen terjemahan
  ┃ » ${prefix}cerpen thriller
  ┗━━━
  
  ┏━「 Convert Menu 」
  ┃ » ${prefix}toimage
  ┃ » ${prefix}removebg
  ┃ » ${prefix}sticker
  ┃ » ${prefix}emojimix
  ┃ » ${prefix}tovideo
  ┃ » ${prefix}togif
  ┃ » ${prefix}tourl
  ┃ » ${prefix}tovn
  ┃ » ${prefix}tomp3
  ┃ » ${prefix}toaudio
  ┃ » ${prefix}ebinary
  ┃ » ${prefix}dbinary
  ┃ » ${prefix}styletext
  ┃ » ${prefix}smeme
  ┗━━━

  ┏━「 Information 」
  ┃ » ${prefix}merdeka-news 
  ┃ » ${prefix}kontan-news 
  ┃ » ${prefix}cnbc-news 
  ┃ » ${prefix}tribun-news 
  ┃ » ${prefix}indozone-news 
  ┃ » ${prefix}kompas-news 
  ┃ » ${prefix}detik-news 
  ┃ » ${prefix}daily-news 
  ┃ » ${prefix}inews-news 
  ┃ » ${prefix}okezone-news 
  ┃ » ${prefix}sindo-news 
  ┃ » ${prefix}tempo-news 
  ┃ » ${prefix}antara-news 
  ┃ » ${prefix}cnn-news 
  ┃ » ${prefix}fajar-news
  ┗━━━
  
  ┏━「 Main Menu 」
  ┃ » ${prefix}script
  ┃ » ${prefix}ping
  ┃ » ${prefix}runtime
  ┃ » ${prefix}speed
  ┃ » ${prefix}owner
  ┃ » ${prefix}menu
  ┃ » ${prefix}delete
  ┃ » ${prefix}infochat
  ┃ » ${prefix}quoted
  ┃ » ${prefix}listpc
  ┃ » ${prefix}listgc
  ┃ » ${prefix}listonline
  ┗━━━
  
  ┏━「 Database 」
  ┃ » ${prefix}setcmd
  ┃ » ${prefix}listcmd
  ┃ » ${prefix}delcmd
  ┃ » ${prefix}lockcmd
  ┃ » ${prefix}addmsg
  ┃ » ${prefix}listmsg
  ┃ » ${prefix}getmsg
  ┃ » ${prefix}delmsg
  ┗━━━
  
  ┏━「 Anonymous 」
  ┃ » ${prefix}anonymous
  ┃ » ${prefix}start
  ┃ » ${prefix}next
  ┃ » ${prefix}keluar
  ┃ » ${prefix}sendkontak
  ┗━━━
  
  ┏━「 Islamic Menu 」
  ┃ » ${prefix}iqra
  ┃ » ${prefix}hadist
  ┃ » ${prefix}alquran
  ┃ » ${prefix}juzamma
  ┃ » ${prefix}tafsirsurah
  ┗━━━
  
  ┏━「 Voice Changer 」
  ┃ » ${prefix}bass
  ┃ » ${prefix}blown
  ┃ » ${prefix}deep
  ┃ » ${prefix}earrape
  ┃ » ${prefix}fast
  ┃ » ${prefix}fat
  ┃ » ${prefix}nightcore
  ┃ » ${prefix}reverse
  ┃ » ${prefix}robot
  ┃ » ${prefix}slow
  ┃ » ${prefix}tupai
  ┗━━━
  
  ┏━「 Owner Menu 」
  ┃ » ${prefix}react [emoji]
  ┃ » ${prefix}chat [option]
  ┃ » ${prefix}join [link]
  ┃ » ${prefix}leave
  ┃ » ${prefix}block @user
  ┃ » ${prefix}unblock @user
  ┃ » ${prefix}bcgroup 
  ┃ » ${prefix}bcall 
  ┃ » ${prefix}setppbot  
  ┃ » ${prefix}setexif
  ┃ » ${prefix}setmenu
  ┃ » ${prefix}setallmenu
  ┗━━━
  
  ┏━「 Thanks To 」
  ┃ » Allah Swt
  ┃ » Ortuku
  ┃ » Subscriber
  ┃ » Pengguna
  ┃ » Pendonasi
  ┃ » Yang Sewabot
  ┃ » Dan Para Suppoter Lainnya
  ┗━━━
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Selamat Datang Tolol
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Yah Kok Kak😢,Padahl Aku Masih Kuat 24Jam Loh 😙
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`https://rafsy.home.blog`
}

//—————List Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  ┏━「 Group 」
  ┃ » ${prefix}linkgroup
  ┃ » ${prefix}ephemeral [option]
  ┃ » ${prefix}setppgc  
  ┃ » ${prefix}setname 
  ┃ » ${prefix}setdesc 
  ┃ » ${prefix}group [option]
  ┃ » ${prefix}editinfo [option]
  ┃ » ${prefix}add @user
  ┃ » ${prefix}kick @user
  ┃ » ${prefix}hidetag 
  ┃ » ${prefix}tagall 
  ┃ » ${prefix}antilink [on/off]
  ┃ » ${prefix}mute [on/off]
  ┃ » ${prefix}promote @user
  ┃ » ${prefix}demote @user
  ┃ » ${prefix}vote 
  ┃ » ${prefix}devote
  ┃ » ${prefix}upvote
  ┃ » ${prefix}cekvote
  ┃ » ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  ┏━「 Downloader 」
  ┃ » ${prefix}tiktoknowm 
  ┃ » ${prefix}tiktokwm 
  ┃ » ${prefix}tiktokmp3 
  ┃ » ${prefix}instagram 
  ┃ » ${prefix}twitter 
  ┃ » ${prefix}twittermp3 
  ┃ » ${prefix}facebook 
  ┃ » ${prefix}pinterestdl 
  ┃ » ${prefix}ytmp3 
  ┃ » ${prefix}ytmp4 
  ┃ » ${prefix}getmusic 
  ┃ » ${prefix}getvideo 
  ┃ » ${prefix}umma 
  ┃ » ${prefix}joox 
  ┃ » ${prefix}soundcloud 
  `
}

exports.searchmenu = (prefix) => {
	return`
  ┏━「 Search Menu 」
  ┃ » ${prefix}play 
  ┃ » ${prefix}yts 
  ┃ » ${prefix}google 
  ┃ » ${prefix}gimage 
  ┃ » ${prefix}pinterest 
  ┃ » ${prefix}wikimedia 
  ┃ » ${prefix}ytsearch 
  ┃ » ${prefix}ringtone 
  ┃ » ${prefix}stalk [option] 
  ┃ » ${prefix}webtoons 
  ┃ » ${prefix}drakor 
  ┃ » ${prefix}animesearch 
  ┃ » ${prefix}character 
  ┃ » ${prefix}manga 
  ┃ » ${prefix}playstore 
  ┃ » ${prefix}gsmarena 
  ┃ » ${prefix}jadwalbioskop 
  ┃ » ${prefix}nowplayingbioskop 
  ┃ » ${prefix}aminio 
  ┃ » ${prefix}wattpad 
  ┃ » ${prefix}webtoons 
  ┃ » ${prefix}drakor 
  `
}

exports.telestickmenu = (prefix) => {
	return`
  ┏━「 Telestickmenu 」
  ┃ » ${prefix}gurastick
  ┃ » ${prefix}dogestick
  ┃ » ${prefix}bucinstick
  ┃ » ${prefix}patrick
`
}

exports.randommenu = (prefix) => {
	return`
  ┏━「 Random Menu 」
  ┃ » ${prefix}coffe
  ┃ » ${prefix}quotesanime
  ┃ » ${prefix}couple
  ┃ » ${prefix}darkjokes
  `
}

exports.randomanimemenu = (prefix) => {
	return`
  ┏━「 Random Anime 」
  ┃ » ${prefix}loli
  ┃ » ${prefix}neko
  ┃ » ${prefix}waifu
  ┃ » ${prefix}shinobu
  ┃ » ${prefix}megumin
  ┃ » ${prefix}bully
  ┃ » ${prefix}cuddle
  ┃ » ${prefix}cry
  ┃ » ${prefix}hug
  ┃ » ${prefix}awoo
  ┃ » ${prefix}kiss
  ┃ » ${prefix}lick
  ┃ » ${prefix}pat
  ┃ » ${prefix}smug
  ┃ » ${prefix}bonk
  ┃ » ${prefix}yeet
  ┃ » ${prefix}blush
  ┃ » ${prefix}smile
  ┃ » ${prefix}wave
  ┃ » ${prefix}highfive
  ┃ » ${prefix}handhold
  ┃ » ${prefix}nom
  ┃ » ${prefix}bite
  ┃ » ${prefix}glomp
  ┃ » ${prefix}slap
  ┃ » ${prefix}kill
  ┃ » ${prefix}happy
  ┃ » ${prefix}wink
  ┃ » ${prefix}poke
  ┃ » ${prefix}dance
  ┃ » ${prefix}cringe
  ┃ » ${prefix}anime
  ┃ » ${prefix}waifu
  ┃ » ${prefix}husbu
  ┃ » ${prefix}neko
  ┃ » ${prefix}shinobu
  ┃ » ${prefix}waifus 
  ┃ » ${prefix}nekos 
  ┃ » ${prefix}trap 
  ┃ » ${prefix}blowjob 
  `
}

exports.textpromenu = (prefix) => {
	return`
  ┏━「 Text Pro Menu 」
  ┃ » ${prefix}3dchristmas
  ┃ » ${prefix}3ddeepsea
  ┃ » ${prefix}americanflag
  ┃ » ${prefix}3dscifi
  ┃ » ${prefix}3drainbow
  ┃ » ${prefix}3dwaterpipe
  ┃ » ${prefix}halloweenskeleton
  ┃ » ${prefix}sketch
  ┃ » ${prefix}bluecircuit
  ┃ » ${prefix}space
  ┃ » ${prefix}metallic
  ┃ » ${prefix}fiction
  ┃ » ${prefix}greenhorror
  ┃ » ${prefix}transformer
  ┃ » ${prefix}berry
  ┃ » ${prefix}thunder
  ┃ » ${prefix}magma
  ┃ » ${prefix}3dcrackedstone
  ┃ » ${prefix}3dneonlight
  ┃ » ${prefix}impressiveglitch
  ┃ » ${prefix}naturalleaves
  ┃ » ${prefix}fireworksparkle
  ┃ » ${prefix}matrix
  ┃ » ${prefix}dropwater
  ┃ » ${prefix}harrypotter
  ┃ » ${prefix}foggywindow
  ┃ » ${prefix}neondevils
  ┃ » ${prefix}christmasholiday
  ┃ » ${prefix}3dgradient
  ┃ » ${prefix}blackpink
  ┃ » ${prefix}gluetext
  `
}

exports.photooxymenu = (prefix) => {
	return`
  ┏━「 Photooxy 」
  ┃ » ${prefix}shadow
  ┃ » ${prefix}romantic
  ┃ » ${prefix}smoke
  ┃ » ${prefix}burnpapper
  ┃ » ${prefix}naruto
  ┃ » ${prefix}lovemsg
  ┃ » ${prefix}grassmsg
  ┃ » ${prefix}lovetext
  ┃ » ${prefix}coffecup
  ┃ » ${prefix}butterfly
  ┃ » ${prefix}harrypotter
  ┃ » ${prefix}retrolol
  `
}

exports.ephotomenu = (prefix) => {
	return`
  ┏━「 Ephoto Menu 」
  ┃ » ${prefix}ffcover
  ┃ » ${prefix}crossfire
  ┃ » ${prefix}galaxy
  ┃ » ${prefix}glass
  ┃ » ${prefix}neon
  ┃ » ${prefix}beach
  ┃ » ${prefix}blackpink
  ┃ » ${prefix}igcertificate
  ┃ » ${prefix}ytcertificate
  `
}

exports.funmenu = (prefix) => {
	return`
  ┏━「 Game And Fun Menu 」
  ┃ » ${prefix}simih
  ┃ » ${prefix}bagaimanakah
  ┃ » ${prefix}kapankah
  ┃ » ${prefix}apakah
  ┃ » ${prefix}bisakah
  ┃ » ${prefix}rate
  ┃ » ${prefix}wangy
  ┃ » ${prefix}gantengcek
  ┃ » ${prefix}cekganteng
  ┃ » ${prefix}cantikcek
  ┃ » ${prefix}cekcantik
  ┃ » ${prefix}sangecek
  ┃ » ${prefix}ceksange
  ┃ » ${prefix}gaycek
  ┃ » ${prefix}cekgay
  ┃ » ${prefix}lesbicek
  ┃ » ${prefix}halah
  ┃ » ${prefix}hilih
  ┃ » ${prefix}huluh
  ┃ » ${prefix}heleh
  ┃ » ${prefix}holoh
  ┃ » ${prefix}jadian
  ┃ » ${prefix}jodohku
  ┃ » ${prefix}tictactoe
  ┃ » ${prefix}delttt
  ┃ » ${prefix}family100
  ┃ » ${prefix}tebak
  ┃ » ${prefix}math
  ┃ » ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  ┏━「 Primbon 」
  ┃ » ${prefix}nomorhoki
  ┃ » ${prefix}artimimpi
  ┃ » ${prefix}artinama
  ┃ » ${prefix}ramaljodoh
  ┃ » ${prefix}ramaljodohbali
  ┃ » ${prefix}suamiistri
  ┃ » ${prefix}ramalcinta
  ┃ » ${prefix}cocoknama
  ┃ » ${prefix}pasangan
  ┃ » ${prefix}jadiannikah
  ┃ » ${prefix}sifatusaha
  ┃ » ${prefix}rezeki
  ┃ » ${prefix}pekerjaan
  ┃ » ${prefix}nasib
  ┃ » ${prefix}penyakit
  ┃ » ${prefix}tarot
  ┃ » ${prefix}fengshui
  ┃ » ${prefix}haribaik
  ┃ » ${prefix}harisangar
  ┃ » ${prefix}harisial
  ┃ » ${prefix}nagahari
  ┃ » ${prefix}arahrezeki
  ┃ » ${prefix}peruntungan
  ┃ » ${prefix}weton
  ┃ » ${prefix}karakter
  ┃ » ${prefix}keberuntungan
  ┃ » ${prefix}memancing
  ┃ » ${prefix}masasubur
  ┃ » ${prefix}zodiak
  ┃ » ${prefix}shio
  `
}

exports.cerpenmenu = (prefix) => {
	return`
  ┏━「 Cerpen 」
  ┃ » ${prefix}cerpen anak
  ┃ » ${prefix}cerpen bahasa daerah
  ┃ » ${prefix}cerpen bahasa inggris
  ┃ » ${prefix}cerpen bahasa jawa
  ┃ » ${prefix}cerpen bahasa sunda
  ┃ » ${prefix}cerpen budaya
  ┃ » ${prefix}cerpen cinta
  ┃ » ${prefix}cerpen cinta islami
  ┃ » ${prefix}cerpen cinta pertama
  ┃ » ${prefix}cerpen cinta romantis
  ┃ » ${prefix}cerpen cinta sedih
  ┃ » ${prefix}cerpen cinta segitiga
  ┃ » ${prefix}cerpen cinta sejati
  ┃ » ${prefix}cerpen galau
  ┃ » ${prefix}cerpen gokil
  ┃ » ${prefix}cerpen inspiratif
  ┃ » ${prefix}cerpen jepang
  ┃ » ${prefix}cerpen kehidupan
  ┃ » ${prefix}cerpen keluarga
  ┃ » ${prefix}cerpen kisah nyata
  ┃ » ${prefix}cerpen korea
  ┃ » ${prefix}cerpen kristen
  ┃ » ${prefix}cerpen liburan
  ┃ » ${prefix}cerpen lingkungan
  ┃ » ${prefix}cerpen lucu
  ┃ » ${prefix}cerpen malaysia
  ┃ » ${prefix}cerpen mengharukan
  ┃ » ${prefix}cerpen misteri
  ┃ » ${prefix}cerpen motivasi
  ┃ » ${prefix}cerpen nasihat
  ┃ » ${prefix}cerpen nasionalisme
  ┃ » ${prefix}cerpen olahraga
  ┃ » ${prefix}cerpen patah hati
  ┃ » ${prefix}cerpen penantian
  ┃ » ${prefix}cerpen pendidikan
  ┃ » ${prefix}cerpen pengalaman pribadi
  ┃ » ${prefix}cerpen pengorbanan
  ┃ » ${prefix}cerpen penyesalan
  ┃ » ${prefix}cerpen perjuangan
  ┃ » ${prefix}cerpen perpisahan
  ┃ » ${prefix}cerpen persahabatan
  ┃ » ${prefix}cerpen petualangan
  ┃ » ${prefix}cerpen ramadhan
  ┃ » ${prefix}cerpen remaja
  ┃ » ${prefix}cerpen renungan
  ┃ » ${prefix}cerpen rindu
  ┃ » ${prefix}cerpen rohani
  ┃ » ${prefix}cerpen romantis
  ┃ » ${prefix}cerpen sastra
  ┃ » ${prefix}cerpen sedih
  ┃ » ${prefix}cerpen sejarah
  ┃ » ${prefix}cerpen slice of life
  ┃ » ${prefix}cerpen terjemahan
  ┃ » ${prefix}cerpen thriller
`
}

exports.convertmenu = (prefix) => {
	return`
  ┏━「 Convert Menu 」
  ┃ » ${prefix}toimage
  ┃ » ${prefix}removebg
  ┃ » ${prefix}sticker
  ┃ » ${prefix}emojimix
  ┃ » ${prefix}tovideo
  ┃ » ${prefix}togif
  ┃ » ${prefix}tourl
  ┃ » ${prefix}tovn
  ┃ » ${prefix}tomp3
  ┃ » ${prefix}toaudio
  ┃ » ${prefix}ebinary
  ┃ » ${prefix}dbinary
  ┃ » ${prefix}styletext
  `
}

exports.informationmenu = (prefix) => {
	return`
  ┏━「 Information 」
  ┃ » ${prefix}merdeka-news 
  ┃ » ${prefix}kontan-news 
  ┃ » ${prefix}cnbc-news 
  ┃ » ${prefix}tribun-news 
  ┃ » ${prefix}indozone-news 
  ┃ » ${prefix}kompas-news 
  ┃ » ${prefix}detik-news 
  ┃ » ${prefix}daily-news 
  ┃ » ${prefix}inews-news 
  ┃ » ${prefix}okezone-news 
  ┃ » ${prefix}sindo-news 
  ┃ » ${prefix}tempo-news 
  ┃ » ${prefix}antara-news 
  ┃ » ${prefix}cnn-news 
  ┃ » ${prefix}fajar-news
`
}

exports.mainmenu = (prefix) => {
	return`
  ┏━「 Main Menu 」
  ┃ » ${prefix}script
  ┃ » ${prefix}ping
  ┃ » ${prefix}runtime
  ┃ » ${prefix}speed
  ┃ » ${prefix}owner
  ┃ » ${prefix}menu
  ┃ » ${prefix}delete
  ┃ » ${prefix}infochat
  ┃ » ${prefix}quoted
  ┃ » ${prefix}listpc
  ┃ » ${prefix}listgc
  ┃ » ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  ┏━「 Database 」
  ┃ » ${prefix}setcmd
  ┃ » ${prefix}listcmd
  ┃ » ${prefix}delcmd
  ┃ » ${prefix}lockcmd
  ┃ » ${prefix}addmsg
  ┃ » ${prefix}listmsg
  ┃ » ${prefix}getmsg
  ┃ » ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  ┏━「 Anonymous Chat 」
  ┃ » ${prefix}anonymous
  ┃ » ${prefix}start
  ┃ » ${prefix}next
  ┃ » ${prefix}keluar
  ┃ » ${prefix}sendkontak
  `
}

exports.islamicmenu = (prefix) => {
	return`
  ┏━「 Islam Menu 」
  ┃ » ${prefix}iqra
  ┃ » ${prefix}hadist
  ┃ » ${prefix}alquran
  ┃ » ${prefix}juzamma
  ┃ » ${prefix}tafsirsurah
  `
}

exports.voicechargermenu = (prefix) => {
	return`
  ┏━「 Voice Changer 」 
  ┃ » ${prefix}bass
  ┃ » ${prefix}blown
  ┃ » ${prefix}deep
  ┃ » ${prefix}earrape
  ┃ » ${prefix}fast
  ┃ » ${prefix}fat
  ┃ » ${prefix}nightcore
  ┃ » ${prefix}reverse
  ┃ » ${prefix}robot
  ┃ » ${prefix}slow
  ┃ » ${prefix}tupai
  `
}

exports.ownermenu = (prefix) => {
	return`
  ┏━「 Owner Menu 」
  ┃ » ${prefix}react
  ┃ » ${prefix}chat
  ┃ » ${prefix}join
  ┃ » ${prefix}leave
  ┃ » ${prefix}block @user
  ┃ » ${prefix}unblock @user
  ┃ » ${prefix}bcgroup 
  ┃ » ${prefix}bcall 
  ┃ » ${prefix}setppbot
  ┃ » ${prefix}setexif
  ┃ » ${prefix}setmenu 
  ┃ » ${prefix}setallmenu 
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
  ┏━「 Thanks To 」
  ┃ » Allah
  ┃ » Ortuku
  ┃ » Subscriber
  ┃ » User
  ┃ » Dan Pengguna Lainnya
`
}
