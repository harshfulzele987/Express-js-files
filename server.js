const  express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mainRouter = require('./routes/index');



app.use(express.static('public'));

app.set('view engine', 'ejs' );

app.use(mainRouter);
//console.log(app.get('views'));

app.listen(port, () => console.log(`Example app listening on port port!`));

