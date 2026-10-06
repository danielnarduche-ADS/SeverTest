import bcrypt from 'bcrypt';
import { db } from "../../models/db"


export async function checkLoginResponse(req, res) {
    const {email, password} = req.body;

    const user = db.prepare('SELECT * FROM users WHERE email ?').get(email)
    if (!user) {
        return res.status(401).send("email or password wrong")
    }

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
        return res.status(401).send("email or password wrong")
    }

    res.send('logado!')
}