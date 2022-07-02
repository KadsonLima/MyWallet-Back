import joi from 'joi';


export const cadastro = joi.object({
    name:joi.required(),

    email:joi.string().required().email(),

    password:joi.required(),

    repeat_password:joi.ref('password')

})

