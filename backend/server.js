const express = require("express");
const axios = require("axios");

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.use(express.json({extended:false}))

let apiKey = ""

app.post('/', (req, res) =>{
        apiKey = req.body.key
        res.send(apiKey)
    })
            
app.get('/articles', (req,res) => {
    axios.get("https://dev.to/api/articles/me/all?per_page=1000", {
        headers:{
            "api-key":apiKey
        }
    })
    .then((response) => {
        res.send(response.data)
    })
})

app.get('/followers', (req,res) => {
    let followers = 0
    for(let i=1; i<=11; i++){
        let url = `https://dev.to/api/followers/users?per_page=1000&page=2`
        axios.get(url, {
            headers:{
                "api-key":apiKey
            }
        })
        .then((response) => followers = followers + response.data.length )
    }
    res.send(followers)
})

const PORT = process.env.PORT || 8000

app.listen(8000, ()=> console.log(`Server started at ${PORT}`))