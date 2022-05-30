import mongoose from "mongoose";

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect(process.env.URI_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(`Mongodb Atlas CONNECTED!`))
    .catch((error) =>
      console.log(`Error when connecting with MongoDB, Error: ${error}`)
    );
};

//local connection string
//mongodb://localhost:27017/paletas-db
