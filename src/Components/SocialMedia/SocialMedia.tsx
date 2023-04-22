import React, { useState } from 'react';
import styled from 'styled-components';
import Github from './icons/github';
import Linkedin from './icons/Linkedin';
import Whatsapp from './icons/Whatsapp';

function SocialMedia() {
	return (
		<Container>
			<Github />

			<Linkedin />

			<Whatsapp />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export default SocialMedia;
