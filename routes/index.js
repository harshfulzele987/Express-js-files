const router = require('express').Router();
const path = require('path');




router.get('/', (req, res) =>{ res.render('index', {

    title : 'My home page'
}) });


router.get('/about', (req, res) => {res.render('about')});



router.get ('/downlode' , (req, res) => {
    res.download('./public/noob.jpg');

});
router.get('/api/products',(req,res) =>{
    res.json([
        {
        id : '123',
        name : 'crome'
        },
        {
            id : '124',
            name: 'firefox'
            
        }
    ])
});

module.exports= router;