import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({allErrors: true});
addFormats(ajv)
ajvErrors(ajv)

const validationLogin = ajv.compile({
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {type: 'string', format: 'email'},
        password: {type: 'string', minLength: 8}
    },
    additionalProperties: false,
    errorMessage: {
        _: "email or password wrong AJV",
        required: {
            email: 'Key your email',
            password: 'Key your password'
        }
    }
});

export function checkLogin(req, res, next) {
  if (!validationLogin(req.body)) {
    const msg = validationLogin.errors[0].message;
    return res.status(400).set({'HX-Retarget': "#ErrorMsg", 'HX-Reswap': "outerHTML"}).send(`<p id='ErrorMsg' class='errorbox'>${msg}</p>`);
  }

  next();
}
