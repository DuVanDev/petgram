export const LIKE_MUTATION = `
mutation likePhoto($input : LikePhoto!){
	likePhoto(input: $input) {
		id,
		liked,
		likes
	}
}
`

export const LIKE_ANONYMOUS_MUTATION = `
mutation likeAnonymousPhoto($input : LikePhoto!){
	likeAnonymousPhoto(input: $input) {
		id,
		liked,
		likes
	}
}
`