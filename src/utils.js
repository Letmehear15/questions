export const validateInput = (value) => {
    if(value.length < 10) return false
    return true
}