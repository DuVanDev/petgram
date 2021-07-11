import styled, { css } from 'styled-components'

export const List = styled.ul`
	display : flex;
	overflow: scroll;
	width: 100%;
	list-style: none;
	${props => props.loading && css`
		ul{
			width : 7.5rem;
			height : 7.5rem;
			border-radius: 50%;
			background: #d0d0d0;
			padding: 0 .8rem;
		}
	`}
`

export const Item = styled.ul`
	padding: 0 .8rem;
`
