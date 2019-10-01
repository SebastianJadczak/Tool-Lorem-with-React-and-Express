const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs')

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(pino);

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

// Start Ipsum Page

app.get('/ipsumTaskList', (req, res) => {
    const data = fs.readFileSync('./src/database/database.json')
    const newData = JSON.parse(data)
    res.json({
        data: newData
    })
})


app.post(`/addTask/:input`, (req, res) => {
    const data = fs.readFileSync('./src/database/database.json')
    const newData = JSON.parse(data)

    const {
        input
    } = req.params;
    newData.push({
        id: newData.length + 1,
        content: input,
        status: "toDo"
    })
    const dataJSON = JSON.stringify(newData)

    fs.writeFileSync('./src/database/database.json', dataJSON)

    res.json({
        data: "Dodano zadanie"
    })
})

// End Ipsum Page
app.get('/DolorCanban', (req, res) => {
    const data = fs.readFileSync('./src/database/database.json')
    const newData = JSON.parse(data)
    res.json({
        data: newData
    })
})

//Start Dolor Page

//End Dolor Page

//Start SitAmet Page

app.get('/SitAmetProducts', (req, res) => {
    const products = JSON.parse(fs.readFileSync('./src/database/product.json'))
    res.json({
        prod: products
    })
})



let cart = []
// ${name}/${description}/${price}`
app.post(`/addProductToCart/:id/:name/:description/:price`, (req, res) => {
    const {
        id,
        name,
        description,
        price
    } = req.params;
    ///////////////////
    cart.push({
        productId: id,
        productName: name,
        productDescription: description,
        productPrice: price
    })


    // look products with this number id
    ///////////////////
    res.json({
        data: "Produkt dodano!",
        cartLength: cart.length,
        MyCart: cart
    })

})

//End SitAmet Page