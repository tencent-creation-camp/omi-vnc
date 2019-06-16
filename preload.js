// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// window.addEventListener('DOMContentLoaded', () => {
//   for (const versionType of ['chrome', 'electron', 'node']) {
//     document.getElementById(`${versionType}-version`).innerText = process.versions[versionType]
//   }
// })

const fs = require('fs');
// const RecordRTC = require('./libs/rtc');
console.log(fs)
// console.log(RecordRTC)

// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true,
// }).then(async function (stream) {
//     let recorder = RecordRTC(stream, {
//         type: 'video/mp4'
//     });
//     recorder.startRecording();

//     const sleep = m => new Promise(r => setTimeout(r, m));
//     await sleep(3000);

//     recorder.stopRecording(function () {
//         let blob = recorder.getBlob();
//         console.log(blob);
//         fs.writeFileAsync('./test.txt', blob);
//         // invokeSaveAsDialog(blob);
//     });
//     recorder.getDataURL((dataURL) => {
//         console.log(dataURL);
//     })
// });