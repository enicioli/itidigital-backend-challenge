const PasswordModel = require('./../models/PasswordModel')

module.exports = {
    validate(request, response) {
        const { password } = request.params
        const isValid = PasswordModel.validate(password)
        
        return response.json(isValid, isValid ? 200 : 400)
    }
}
