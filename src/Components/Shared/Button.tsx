import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import Flex from './Flex';

interface Props {
	text?: string;
	onClick?: () => void;
	size?: string;
}
function Button({ text, size = 'xsm', onClick }: Props) {
	return (
		<Container>
			<ButtonOutLine>
				<Text text={text} type='secondary' color='background' size={size} />
			</ButtonOutLine>
			<ButtonStyled>
				<Text text={text} type='secondary' color='secondary' size={size} />
			</ButtonStyled>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	position: relative;
`;
const ButtonStyled = styled.div`
	width: 95%;
	border: 2px solid;
	border-color: ${(props) => props.theme.colors.secondary};
	padding: 10px 20px;
	background-color: ${(props) => props.theme.colors.background};
	z-index: 10;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ButtonOutLine = styled(ButtonStyled)`
	z-index: 1;
	position: absolute;
	left: 15px;
	top: 15px;
`;

export default Button;
