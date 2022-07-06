const experss= require('express');
var path = require('path');
const __ = require('lodash')
const {ejs}=require('ejs');



const app = experss();
app.listen(3000);
app.set('view engine','ejs');

app.set('views', path.join(__dirname, 'views-ejs'))
app.get('/',(req, res)=>{

array = [
/*	{title: "babies clothes", productType:"babies"},
	{title: "women clothes", productType:"women"},
	{title: "men clothes", productType:"men"},*/
];

	res.render('index',{array});

});

app.get('/about',(req,res)=>{

	res.render('about')
});

app.get('/products/create',(req,res)=>{

	res.render('create')
});

app.use((req,res)=>{
	res.status(404).render('404');
})