import {v4 as uuidv4} from uuidv4;

export let ifLogged = (req, res, next) => {
    const id = req.cookies(['refreshToken', 'accessToken']);

    if (!id) {
        app.redirect('/login')
    }

    next()
}