var express = require("express");
var config = require("./config.js");
var routes = require("./routes");
var app = express();

app.use(express.static("./public"));

app.listen(config.APP_PORT, function(err) {
    if(err)
        console.log(err);

    console.log("the server listen on port " + config.APP_PORT);
})

app.get("/", function(req, res) {
    res.sendFile("./public/index.html");
})
fff

routes(app);