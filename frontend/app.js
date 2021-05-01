var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/src/';

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path + "index.html");
});

app.use("/", router);

//static middleware
app.use(express.static(path));
//app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.listen(PORT, function() {
    console.log("App started.")
})