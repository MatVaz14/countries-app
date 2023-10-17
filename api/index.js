const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  uploadDb,
} = require("./src/controllers/countrieController/controller.js");
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3002, () => {
    uploadDb();
    console.log("Listening at 3002"); // eslint-disable-line no-console
  });
});
