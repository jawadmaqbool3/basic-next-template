import mongoose from "mongoose";
import colors from "colors";


const connectionString = process.env.MONGOOSE_STRING;

const option = {};

async function initMongoos() {
  if (connectionString) {
    let mongooseConn = await mongoose.connect(connectionString, option);
    if (mongooseConn.connection) {
      console.log(colors.magenta("DB Connection established successfully 😍"));
    } else {
      console.log(colors.red("Unable to establish connection 😒"));
    }
  } else {
    console.log(colors.red("Connection string not provided ❌"));
  }
}

module.exports = {
  initMongoos,
};
