const express = require('express')
const router = express.Router()
const theTemplate = require('../models/CentralModel')
const {entryChecks} = require('../entryValidation')

router.post('/create',  (request, response) =>{
    /*
    const {error} = entryChecks(request.body)
    if(error) {
        return response.status(400).send(error.details[0].message)
    }

    const existingEmail = await theTemplate.findOne({email : request.body.email})
    if (existingEmail) {
        return response.status(400).send('Email already exists')
    }

    const existingPhoneNumber = await theTemplate.findOne({phoneNumber : request.body.phoneNumber})
    if (existingPhoneNumber) {
        return response.status(400).send('Phone Number already exists')
    }

    const existingNin = await theTemplate.findOne({nin : request.body.nin})
    if (existingNin) {
        return response.status(400).send('NIN already exists')
    }

    const existingBvn = await theTemplate.findOne({bvn : request.body.bvn})
    if (existingBvn) {
        return response.status(400).send('BVN already exists')
    }
    */
    const legitNigerian = new theTemplate({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNumber:request.body.phoneNumber,
        nin:request.body.nin,
        bvn:request.body.bvn,
        
    }) 
    
    legitNigerian.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router