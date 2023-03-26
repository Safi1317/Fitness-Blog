const { Activity } = require('../models');

const activitydata = [
    {
        name: 'Cardio',
        benefit: 'Cardio exercises can benefit brain and joint health. It can increase blood flow and improve memory and thinking ability',

    },
    {
        name: 'Strength Training',
        benefit: 'provide benefit',

    },
    {
        name: 'Yogo',
        benefit: 'provide benefit',

    },
    {
        name: 'Plyometrics',
        benefit: 'provide benefit',

    },
];

const seedActivity = () => Activity.bulkCreate(activitydata);

module.exports = seedActivity;
