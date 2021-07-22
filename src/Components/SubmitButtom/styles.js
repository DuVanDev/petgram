import styled from 'styled-components'

export const Buttom = styled.input`
	background: linear-gradient(90deg, rgba(57,49,122,1) 0%, rgba(9,9,121,1) 32%, rgba(186,102,221,1) 100%);
	border: none; 
	padding: 1rem;
	width: 100%;
	display: block;
	color: #fff;
	border-radius: .4rem;
	font-weight: 500;
	font-size: 2rem;
&[disabled]{
		opacity: .3;
	}
`
