module.exports = process.platform === 'win32' ? require('@logion/exiftool.exe') : require('@logion/exiftool.pl');
