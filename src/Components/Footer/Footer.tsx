import React, { useState } from 'react';
import styled from 'styled-components';
import Text, { types } from '../Shared/Text';
import SocialMedia from '../SocialMedia';

function Footer() {
	return (
		<Container>
			<SocialMediaContainer>
				<SocialMedia />
			</SocialMediaContainer>
			<FooterItemContainer>
				<Text
					hover
					size='xsm'
					text='Designed & Built by Abdallah Sabbagh'
					type={types.primaryRegular}
				/>
			</FooterItemContainer>
		</Container>
	);
}

const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Container = styled(Flex)`
	border-top: 1px solid #eaeaea;
	margin-top: 2em;
	background-color: ${(props) => props.theme.colors.background};
`;

const FooterItemContainer = styled(Flex)`
	padding: 1em;
	width: 100%;
`;

const SocialMediaContainer = styled(Flex)`
	padding: 1em;
	width: max(15%, 10em);
`;
export default Footer;
