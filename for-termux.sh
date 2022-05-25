termux-setup-storage
pkg install ffmpeg
pkg install nodejs
pkg install git
pkg install npm
cd $PREFIX
mkdir git
cd git
git clone https://github.com/ernestoyoofi/chika-multi-device.git
cd chika-multi-device
npm install && npm init -y
npm run start