import Joi from 'joi';

const signUpFormValidator = Joi.object({
    username: Joi.string().required().min(1).max(20).messages({
        'string.empty': 'Поле \'username\' є обов\'язковим',
        'string.max': '\'username\' повинен бути менше 20 символів!',
        'string.min': '\'username\' повинен бути більше 1 символа!',
    }),
    email: Joi.string().required().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).messages({
        'string.empty': 'Поле \'email\' є обов\'язковим',
        'string.pattern.base': 'Введіть правильний email!',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Поле \'password\' є обов\'язковим',
    })
})

export {
    signUpFormValidator,
}