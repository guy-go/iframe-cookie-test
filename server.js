const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
}));

app.post('/set-cookie', (req, res) => {
    res.cookie('mycoooo', "cooookiee data", {
        sameSite: "none",
        maxAge: 1000 * 60 * 5, // 5 mins
    });
    res.json({ result: 'yay'});
});

app.get('/cookie-needed', (req, res) => {
    console.log('cooockie', req.cookies);

    res.send(req.cookies.length ? 'cookies sent' : "cookies not sent");
});
app.use(express.static('public'));
app.listen(3002, () => {
    console.log('app listens on 3002');
});