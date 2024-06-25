'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { 
        category: 'soup', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'pasta', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'sweet', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'bread', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'chicken', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'beef', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'rice', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'bakes', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'breakfast', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'lunch', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      { 
        category: 'dinner', 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'), 
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};