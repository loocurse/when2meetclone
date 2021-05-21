const user = require("./Models/User");
user.findById("609e3c4ad28e682db55cd854", (err, result) => {
  consol.log(result);
});
