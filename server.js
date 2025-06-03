const sequelize = require('./config/db');
require('dotenv').config();

require('./models/customer');
require('./models/order');
require('./models/campaign');
require('./models/communicationLog');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ MySQL connected & synced');
    require('./app').listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('❌ DB connection error:', err));
