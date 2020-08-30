const joi = require('@hapi/joi')


const entryChecks = (data) =>{
    const validationSchema = joi.object({
        fullName: joi.string().min(4).required(),
        email:joi.string().min(4).required().email(),
        phoneNumber:joi.number().min(8).required(),
        nin:joi.number().min(5).required(),
        bvn:joi.number().min(5).required()
    })
    return validationSchema.validate(data)
}

module.exports.entryChecks = entryChecks