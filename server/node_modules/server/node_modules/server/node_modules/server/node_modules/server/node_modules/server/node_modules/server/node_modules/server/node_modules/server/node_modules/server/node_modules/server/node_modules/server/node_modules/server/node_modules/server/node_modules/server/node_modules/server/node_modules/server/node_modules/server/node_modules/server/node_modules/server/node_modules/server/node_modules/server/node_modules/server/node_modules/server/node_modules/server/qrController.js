const QRCode = require('qrcode');

exports.scanQrCode = (req, res) => {
    const url = req.body.url;

    if(url.length === 0) {
        res.status(400).send('URL is required');
    }

    QRCode.toDataURL(url, (err, src) => {
        console.log(url);
        if(err) {
            res.status(500).send('Internal Server Error');
        }
        res.send(url);
    })
}