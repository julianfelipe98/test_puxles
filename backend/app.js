const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');
const sequelize = require("./database/db");                       

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  User.findAll().then(users=> res.json(users))
});
/* -------------------------------------------------------------------------- */
/*                                 MIDDLEWARE                                 */
/* -------------------------------------------------------------------------- */
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors({ origin:true, credentials:true}));

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  RUNSERVER                                 */
/* -------------------------------------------------------------------------- */

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);

  sequelize
    .sync({force:false})
    .then(() => {
      console.log("nos hemos conectado a la base de datos");
    })
    .catch((err) => {
      console.log("se ha producido un error", err);
    });
});
