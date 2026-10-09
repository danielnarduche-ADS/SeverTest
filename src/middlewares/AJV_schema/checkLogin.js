import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

const ajv = new Ajv({allErrors: true});
addFormats(ajv)
ajvErrors(ajv)

const validation = ajv.compile({
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {type: 'string', format: 'email'},
        password: {type: 'string', minLength: 8}
    },
    additionalProperties: false,
    errorMessage: {
        properties: {
            email: 'Invalid email',
            password: 'The passwords must contain no fewer than 8 characters'
        },
        required: {
            email: 'Key your email',
            password: 'Key your password'
        }
    }
})

export function checkLogin(req, res, next) {
  if (!validation(req.body)) {
    const msg = validation.errors[0].message;
    return res.status(400).send(`<p>${msg}</p>`);
  }
  next();
}
