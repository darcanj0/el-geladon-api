import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaletaSchema = new Schema(
  {
    sabor: {
      type: String,
      required: true,
      unique: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

//put the model into the correct collection
const Paletas = model("paletas", PaletaSchema);

export default Paletas;
