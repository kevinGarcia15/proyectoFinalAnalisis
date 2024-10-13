const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15)

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.require()
})

const updateProductSchema = Joi.object({
    name: name,
    price: price
})

module.exports = {createProductSchema, updateProductSchema}