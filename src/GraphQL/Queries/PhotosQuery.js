export const PHOTO_QUERY = `
query getPhotos( $categoryId : ID ){
  photos (categoryId : $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const SINGLE_PHOTO_QUERY = `
query getSinglePhoto( $id :ID! ){
  photo( id : $id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const GET_FAVS = `
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`
