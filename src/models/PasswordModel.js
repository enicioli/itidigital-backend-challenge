const MIN_LENGTH  = process.env.MIN_LENGTH  || 9
const MAX_LENGTH  = process.env.MAX_LENGTH  || 20
const MIN_DIGITS  = process.env.MIN_DIGITS  || 1
const MIN_UPPER   = process.env.MIN_UPPER   || 1
const MIN_LOWER   = process.env.MIN_LOWER   || 1
const MIN_SPECIAL = process.env.MIN_SPECIAL || 1

module.exports = {
    validate(password) {
        return [
            validateLength(password),
            validateDigits(password),
            validateUpper(password),
            validateLower(password),
            validateSpecial(password)
        ].reduce((result, r) => result && r, true)
    }
}

function validateLength(text) {
    const regexLength = new RegExp(`^.{${MIN_LENGTH},${MAX_LENGTH}}$`)
    return regexLength.test(text)
}

function validateDigits(text) {
    return validateRegexMinOccurrences(text, /[0-9]/g, MIN_DIGITS)
}

function validateUpper(text) {
    return validateRegexMinOccurrences(text, /[A-Z]/g, MIN_UPPER)
}

function validateLower(text) {
    return validateRegexMinOccurrences(text, /[a-z]/g, MIN_LOWER)
}

function validateSpecial(text) {
    return validateRegexMinOccurrences(text, /[^\w\*]/g, MIN_SPECIAL)
}

function validateRegexMinOccurrences(text, regex, min) {
    const matches = text.match(regex)
    return matches ? matches.length >= min : min == 0
}
