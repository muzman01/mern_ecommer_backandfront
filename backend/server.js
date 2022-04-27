const express = require('express')
const products = require('./data/products')
const app = express()
app.get('/',(req,res)=>{
    res.send("api çalışıyor")
})
app.get('/api/product',(req,res)=>{
    res.json(products)
})
app.get('/api/product/:id',(req,res)=>{
    const product = products.find(p =>p._id === req.params.id)
    res.json(product)
})
app.listen(5000,console.log("app 5000 de çalışıyor"))