import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'node:path'
import { router as loginRoute} from './routes/loginRoute.js';


const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/assets', express.static(path.join(import.meta.dirname, '..', 'public', 'assets')))

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: path.join(import.meta.dirname, '..', 'public')})
})

app.get('/login', (req, res) => {
    res.sendFile('/index.html', {root: path.join(import.meta.dirname, '..', 'public')});
})

app.use(loginRoute)

app.listen(port, '0.0.0.0', () => {})

