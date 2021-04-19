export const required = value => {
    if(value) return undefined
    return 'Error'
}

export const maxLength = max => value => {
    if(value.length > max) return `Max length is ${max}.`
    return undefined
}