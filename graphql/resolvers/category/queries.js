const { findAllCategories, findCategoryById } = require("../../../repository/category");

const categoryQueries = {
    getCategories: async () => {
        return await findAllCategories();
    },
    getCategory: async (_root, { id }) => {
        return await findCategoryById(id);
    }
};

module.exports = categoryQueries;