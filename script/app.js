const express = require('express')
const fileUpload = require('express-fileupload');


const app = express()
app.use(fileUpload({}));
app.use(express.static('public'));
const port = 3000


// const pgp = require("pg-promise")(/*options*/);
// const db = pgp("postgres://username:password@host:port/database");

// db.one("SELECT $1 AS value", 123)
//     .then(function (data) {
//         console.log("DATA:", data.value);
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });

app.post('/loadimg', (req, res) => {
    console.log(req.files);
    req.files.photo.mv('../public/img/denialOfService/'+req.files.photo.name);
//     let test = 'my value';
//     let content = {
//         'important': 'value'
//     }
//   res.header('content-type', 'text/json').send(JSON.stringify(content))
    res.header('content-type', 'text/json').send(JSON.stringify(""))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})