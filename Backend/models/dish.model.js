const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const dishSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  image: {
      type: String,
      required : true
  },
  ingredients: {
    type: [String], 
    required: true,
  },
  nutrients: {
    type: String,
    enum: ["Protein", "Fats", "Carbohydrates", "Fiber"],
    required: true,
  },
  items: {
    type: [itemSchema],
    required: true,
  },
});

const DishModel = mongoose.model("Dish", dishSchema);
module.exports = DishModel;
