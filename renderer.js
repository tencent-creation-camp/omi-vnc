var app = require('http').createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin','*')
});
var clientCanvas = document.querySelectorAll('canvas')[0];
var clientContext = clientCanvas.getContext('2d');
var io = require('socket.io')(app);
app.listen(8899);
io.on('connection', function (socket) {
    socket.on('recordScreen', function (data) {
        console.log(data);
        io.sockets.emit("recordScreen", data);
        drawImgAtCanvas(data.dataUrl);
    });
});
// img转canvas
function drawImgAtCanvas(dataUrl) {
    let img = new Image();
    img.onload = function () {
        clientContext.drawImage(img, 0, 0, 1680, 1050);
    };
    img.src = dataUrl;
}