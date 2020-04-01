const fs = require('fs')
const assert = require('assert')
const PasswordModel = require('./../../src/models/PasswordModel')

describe('PasswordModel', function() {
    describe('validate', function() {
        readFixtureJSONFile('invalid-passwords.json').forEach(password => {
            assertPasswordValidateMethod(password, false)
        })

        readFixtureJSONFile('valid-passwords.json').forEach(password => {
            assertPasswordValidateMethod(password, true)
        })
    })
})

function readFixtureJSONFile(file) {
    return JSON.parse(
        fs.readFileSync(`test/fixtures/${file}`)
    )
}

function assertPasswordValidateMethod(password, expect) {
    it(`should return ${expect} for password ${password}`, function() {
        assert.equal(PasswordModel.validate(password), expect)
    })
}
