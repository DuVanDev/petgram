export const LIKE_MUTATION = `
mutation likeAnonymousPhoto($input : LikePhoto!){
	likeAnonymousPhoto(input: $input) {
		id,
		liked,
		likes
	}
}
`
