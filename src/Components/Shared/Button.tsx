import React from 'react';
import styled from 'styled-components';
import Text, { types } from './Text';

function Button() {
	return (
		<ButtonContainer>
			<MainButton>
				<Text
					type={types.secondaryRegular}
					size='sm'
					color='secondary'
					text={`Let's Work Together`}
				/>
			</MainButton>
			<ButtonOutLine />
		</ButtonContainer>
	);
}

const ButtonContainer = styled.div`
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

const MainButton = styled.div`
	width: 90%;
	height: 60%;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.secondary};
	background: ${(props) => props.theme.colors.background};
	z-index: 2;
	display: flex;
	flex-direction: column;
	padding: ${(props) => props.theme.padding.xsm};
	justify-content: center;
	align-items: center;
	@media (min-width: 992px) {
		width: 100%;
		height: min(80%, 4rem);
	}
`;
const ButtonOutLine = styled(MainButton)`
	position: absolute;
	margin: 1vmax 0px 0px 1vmax;
	background: ${(props) => props.theme.colors.background};
	z-index: 1;
`;

export default Button;
