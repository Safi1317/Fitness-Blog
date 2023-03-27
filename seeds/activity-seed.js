const { Activity } = require("../models");

const activitydata = [

    {
        name: 'Cardio',
        benefit: 'Cardio exercises can benefit brain and joint health. It can increase blood flow and improve memory and thinking ability',
        filename: 'cardio.jpg'

    },
    {
        name: 'Strength Training',
        benefit: 'provide benefit',
        filename: 'strength_training.jpg'

    },
    {
        name: 'Yoga',
        benefit: 'provide benefit',
        filename: 'yoga.jpg'

    },
    {
        name: 'Plyometrics',
        benefit: 'provide benefit',
        filename: 'polymetrics.jpg'

    },
];

const seedActivity = () => Activity.bulkCreate(activitydata);

module.exports = seedActivity;
