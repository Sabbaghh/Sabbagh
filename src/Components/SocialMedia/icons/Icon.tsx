import styled from 'styled-components';

const Icon = styled.svg`
	width: 1.2em;
	fill: ${(props) => props.theme.colors.primary};
	:hover {
		fill: ${(props) => props.theme.colors.secondary};
	}
	transition: fill 0.2s ease-in-out;
	cursor: pointer;
`;

export default Icon;
