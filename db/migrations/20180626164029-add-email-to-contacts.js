'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn({
      tableName: 'Contacts',
      schema: 'public'
    },
      'email',
      Sequelize.STRING
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn({
      tableName: 'Contacts',
      schema: 'public'
    }, 'email');
  }
};
