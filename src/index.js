import express from 'express';
import cookieParser from 'cookie-parser';
import { router as loginRoute} from './routes/loginRoute.js';


const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(loginRoute)
app.use(cookieParser());

app.listen(port, '0.0.0.0', () => {})
