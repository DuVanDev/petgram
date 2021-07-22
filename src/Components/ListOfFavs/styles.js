import styled from 'styled-components'

export const Grid = styled.section`
display: grid;
grid-template-columns: repeat( auto-fill , minmax(30% , auto) );
column-gap: 1rem;
margin-top: 1rem;
`

export const Fav = styled.img`
	width : 100%;
	height: 100%; 
	object-fit:cover;
	border-radius: .3rem;
	box-shadow: 0 1rem 1.4rem rgba(0 , 0 , 0, .2);
`
