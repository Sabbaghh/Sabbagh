import React from 'react';
import styled from 'styled-components';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import Whatsapp from './icons/Whatsapp';
let socialsLink = {
	github: 'https://github.com/Sabbaghh',
	linkedin: 'https://www.linkedin.com/in/sabbaghh/',
	whatsapp: 'https://wa.me/+971524732572',
};
function SocialMedia() {
	const onSocialClick = (url: string) => {
		window.open(url, '_blank');
	};
	return (
		<Container>
			<Github onClick={() => onSocialClick(socialsLink.github)} />
			<Linkedin onClick={() => onSocialClick(socialsLink.linkedin)} />
			<Whatsapp onClick={() => onSocialClick(socialsLink.whatsapp)} />
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
