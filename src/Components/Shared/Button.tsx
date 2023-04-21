import React, { useState } from 'react';
import styled from 'styled-components';
import Text, { types } from './Text';

function Button() {
	const [hover, setHover] = useState(false);
	return (
		<ButtonContainer
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<MainButton hover={hover}>
				<Text
					type={types.secondaryRegular}
					size='sm'
					color={hover ? 'background' : 'secondary'}
					text={`Let's Work Together`}
				/>
			</MainButton>
			<ButtonOutLine />
		</ButtonContainer>
	);
}

const ButtonContainer = styled.div`
	cursor: pointer;
	width: 100%;
	height: 80%;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	// Medium devices (tablets, 768px and up)
	@media (min-width: 768px) {
	}
`;
interface IMainButton {
	hover?: boolean;
}
const MainButton = styled.div<IMainButton>`
	width: 90%;
	height: 60%;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.secondary};
	background: ${(props) => props.theme.colors.background};
	z-index: 2;
	display: flex;
	flex-direction: column;
	background: ${(props) =>
		props.hover ? props.theme.colors.secondary : props.theme.colors.background};
	justify-content: center;
	align-items: center;
	margin: ${(props) => (props.hover ? '-0.2em 0px 0px -0.2em' : '0px')};
	transition: all 0.3s ease-in-out;
	@media (min-width: 992px) {
		width: 100%;
		height: min(80%, 4rem);
	}
`;
const ButtonOutLine = styled(MainButton)`
	position: absolute;
	margin: 0.7em 0px 0px 0.7em;
	background: ${(props) => props.theme.colors.background};
	z-index: 1;
	&:hover {
		margin: 0.7em 0px 0px 0.7em;
		background: ${(props) => props.theme.colors.background};
	}
`;

export default Button;
