import Joi from "joi";

const SignInFormValidator = Joi.object({
    email: Joi.string().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.empty': 'Поле \'email\' є обов\'язковим',
        'string.pattern.base': 'Введіть правильний email!',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Поле \'password\' є обов\'язковим',
    }),
})

export {
    SignInFormValidator,
}