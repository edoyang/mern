const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res) => {  
    console.log('url: ', req.originalUrl);
    console.log('method: ', req.method);
    res.json({name: "Edoyang", email:"edoyangz@gmail.com"});
})

router.get('/', (req, res) => {
    res.json({name: "Edoyang", email:"edoyangz@gmail.com"});
});

app.use('/', router);

app.listen(4000);
