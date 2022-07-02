import joi from 'joi';

export const login = joi.object({


    email:joi.string().required().email(),

    password:joi.required()
})

export const cadastro = joi.object({
    name:joi.required(),

    email:joi.string().required().email(),

    password:joi.required(),

    repeat_password:joi.ref('password')

})


export const trade = joi.object({
    tipo:  joi.number().required(),

    descricao:  joi.string().required(),
    
    valor: joi.number().required()

})