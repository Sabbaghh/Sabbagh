import styled from 'styled-components';

const Button = styled.svg`
	width: 90%;
	fill: ${(props) => props.theme.colors.primary};
	:hover {
		fill: ${(props) => props.theme.colors.secondary};
	}
	transition: fill 0.2s ease-in-out;
	cursor: pointer;
`;

export default Button;
