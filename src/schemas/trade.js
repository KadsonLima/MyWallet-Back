import joi from 'joi';

export const trade = joi.object({
    tipo:  joi.number().required(),

    descricao:  joi.string().required(),
    
    valor: joi.number().required()

})