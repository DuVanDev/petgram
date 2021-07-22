import styled from 'styled-components'

export const Form = styled.form`
	padding: 1.6rem 1rem;
`

export const Input = styled.input`
	border: .1rem solid #cccc;
	border-radius: .3rem;
	margin-bottom: 1rem; 
	padding: .8rem .4rem;
	display: block;
	width: 100%;
	
	&[disabled]{
		opacity: .3;
	}
`
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

export const Error = styled.p`
	margin: .5rem 0;
	color: #740000;
`
