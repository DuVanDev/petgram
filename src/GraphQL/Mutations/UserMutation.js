export const REGISTER_MUTATION = `
mutation signup($input : UserCredentials!){
	signup(input : $input)
}
`

export const LOGIN_MUTATION = `
mutation login($input : UserCredentials!){
	login(input: $input)
}
`
