import mongoose from "mongoose";

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect("mongodb+srv://root:admin@api-elgeladon.c8e0u.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(`Mongodb CONNECTED!`))
    .catch((error) =>
      console.log(`Error when connecting with MongoDB, Error: ${error}`)
    );
};

//local connection string
//mongodb://localhost:27017/paletas-db
