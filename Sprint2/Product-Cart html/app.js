const express = require("express");
const app = express ();


app.use ("/static", express.static (__dirname + "/public"));
app.use ('/documents', express.static (__dirname + '/public/documents'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/views/productCart.html');

} );

app.listen(3000, () => {
    console.log("Servidor funcionando");
});
