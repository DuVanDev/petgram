import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { fadeIn } from '../../Styles/animation'

export const Nav = styled.nav`
	position: fixed;
	display: flex;
	justify-content:space-around;
	align-items: center;
	margin-top: .5rem;
	background: #dedede;
	bottom: 0;
	width: 100%;
	height: 5rem;
`

export const Link = styled(NavLink)`
	display: inline-flex;
	justify-content: center;
	&[aria-current]{
		color: #111;

		&:after{
			${fadeIn({ time: '.7s' })};
			content : '.';
			color: #111;
			position: absolute;
			font-size: 2.5rem;
			bottom: 0;
			line-height: 2rem;
		}
	}
`
