const fs = require('fs')
const assert = require('assert')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../src/app')

chai.use(chaiHttp)

describe('PasswordController', () => {
    describe('/validate/:password', () => {
        readFixtureJSONFile('invalid-passwords.json').forEach(password => {
            assertPasswordValidationRequest(password, false)
        })

        readFixtureJSONFile('valid-passwords.json').forEach(password => {
            assertPasswordValidationRequest(password, true)
        })
    })
})

function readFixtureJSONFile(file) {
    return JSON.parse(
        fs.readFileSync(`test/fixtures/${file}`)
    )
}

function assertPasswordValidationRequest(password, expect) {
    it(`it should return ${expect} for ${password}`, (done) => {
        chai
        .request(app)
        .get(`/validate/${password}`)
        .end((err, res) => {
            assert.equal(res.status, expect ? 200 : 400)
            assert.equal(res.body, expect)
            done()
        })
    })
}
