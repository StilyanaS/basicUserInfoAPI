import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (res, req) => req.send('Hello from homepage'))

app.listen(PORT, () => console.log(`Server running on PORT http://localhost:${PORT}`));
