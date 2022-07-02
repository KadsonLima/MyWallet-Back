import joi from 'joi';

export const login = joi.object({


    email:joi.string().required().email(),

    password:joi.required()
})
