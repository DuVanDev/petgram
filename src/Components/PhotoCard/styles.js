import styled from 'styled-components'
import { fadeIn } from '../../Styles/animation'

export const ImgWrapper = styled.div`
	border-radius: 1rem;
	display: block;
	height: 0;
	overflow: hidden;
	padding: 56.25% 0 0 0;
	position: relative;
	width: 100%;
`

export const Img = styled.img`
	${fadeIn()}
	box-shadow: 0 1rem 1.4rem rgba(0 , 0 , 0, .2);
	height:100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%; 
`

export const Buttom = styled.button`
	padding-top: .8rem;
	display: flex;
	align-items: center;

	& svg{
		margin-right: .4rem;
	}
`
