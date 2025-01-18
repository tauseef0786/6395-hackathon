const DishModel = require("../models/dish.model");

const createDish = async (req, res) => {
  const { dishName, items, calories , image , ingredients , nutrients } = req.body;
  if (!dishName || !items) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const dishdata = await DishModel.create({ dishName, calories, items , image , ingredients , nutrients });
  res.status(201).json({ message: "Dish created successfully", dishdata });
};

const getDish = async (req, res) => {
  const dishdata = await DishModel.find();
  res.status(200).json({ dishdata });
};

const updateDish = async (req, res) => {
  const id = req.params.id;

  const data = await DishModel.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json({
    message: "Data Updated Sucessfully",
    data
  });
};

const deleteDish = async (req, res) => {
    
    const id = req.params.id 

    await DishModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Data Deleted Succesfully"
    })


}

module.exports = { createDish, getDish , updateDish , deleteDish };
