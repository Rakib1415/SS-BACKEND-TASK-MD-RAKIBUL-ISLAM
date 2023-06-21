require('dotenv').config();
const app = require('./app/app');
const connectDb = require('./db');

const PORT = process.env.PORT || 8000;

(async () => {
    try {
        console.log('Database connected!');
        await connectDb(process.env.DB_CONNECTION_STRING);
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
})();
