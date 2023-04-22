import React, { useState } from 'react';
import styled from 'styled-components';
import Github from './icons/github';
import Linkedin from './icons/Linkedin';
import Whatsapp from './icons/Whatsapp';

function SocialMedia() {
	return (
		<Container>
			<IconContainer>
				<Github />
			</IconContainer>
			<IconContainer>
				<Linkedin />
			</IconContainer>
			<IconContainer>
				<Whatsapp />
			</IconContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.2em;
`;
export default SocialMedia;
