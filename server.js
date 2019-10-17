require("dotenv").config();
const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")

const db = require("./models")

/* db.authenticate()
    .then(() => console.log("database connected"))
    .catch(err => console.log("Error: " + err)) */

const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require("./routes/htmlRoutes"))
app.use('/api', require("./routes/apiRoutes"))

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);


app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT <http://localhost:" + PORT);
    });
});