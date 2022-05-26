import mongoose from "mongoose";

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect("mongodb://localhost:27017/paletas-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(`Mongodb CONNECTED!`))
    .catch((error) =>
      console.log(`Error when connecting with MongoDB, Error: ${error}`)
    );
};
