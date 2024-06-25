const Category = require('../models/Category');

const findAllCategories = async () => {
  try {
    return await Category.findAll();
  } catch (error) {
    console.log(error)
    throw new Error('Unable to fetch categories');
  }
};

const findCategoryById = async (id) => {
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  findAllCategories,
  findCategoryById
};