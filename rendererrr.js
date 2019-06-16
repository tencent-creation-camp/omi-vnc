// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs');
console.log(fs);
// const RecordRTC = require('./libs/rtc');
// console.log(RecordRTC);
const recorderStream = (() => {
    return async (stream) => {
        let recorder = RecordRTC(stream, {
            type: 'video/mp4'
        });
        // recorder.startRecording();
        // // const sleep = m => new Promise(r => setTimeout(r, m));
        // // await sleep(120);
        // recorder.stopRecording(function () {
        //     let blob = recorder.getBlob();
        //     fs.writeFileSync('./blob.txt', blob);
        //     console.log(blob);
        //     // document.getElementById("my-player").src = URL.createObjectURL(blob);
        //     // document.getElementById("my-player").autoplay = "autoplay";
        //     // invokeSaveAsDialog(blob);
        // });
        // recorder.getDataURL((dataURL) => {
        //     console.log(dataURL);
        //     let video = document.getElementById("my-player");
        //     video.src = dataURL;
        //     video.load();
        //     video.play();
        //     document.getElementById("my-player").autoplay = "autoplay";
        //     let canvas = document.getElementById('my-canvas');
        //     var ctx = canvas.getContext('2d');//获取绘图环境
        //     let timer = setInterval(() => {
        //         ctx.drawImage(video, 0, 0, 200, 200);

        //     }, 0)
        //     setTimeout(() => {
        //         clearInterval(timer)
        //     }, 3100)
        //     fs.writeFileSync('./test.txt', dataURL);
        //     recorderStream(stream);
        // })
        // recorder.getBlob((blob) => {
        //     console.log(blob);
        // })
    }

})()
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
    // canvas: {
    //     width: 640,
    //     height: 480
    // },
}).then(function (stream) {
    recorderStream(stream);
});
