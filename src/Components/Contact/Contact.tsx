import React from 'react';
import Section from '../Shared/Section';
import styled from 'styled-components';
import Text, { types } from '../Shared/Text';
import Button from '../Shared/Button';
import onContactButtonPress from '@/Helpers/onContactButtonPress';
import { IDProp } from '../types/Global';
function Contact({ id }: IDProp) {
	return (
		<ContactStyled id={id}>
			<ItemsContainer>
				<Text
					size='sm'
					type={types.secondaryRegular}
					color='secondary'
					text={`03 . What’s Next ?`}
				/>
				<Divider />
				<Text
					as='h1'
					align='center'
					size='xlg'
					type={types.primaryBold}
					text={`Get in touch`}
				/>
				<Divider />
				<Text
					as='p'
					size='md'
					align='center'
					color='primaryLight'
					text={`I'm excited to hear from you! Whether you're looking to build a new website, develop a mobile app, or just have a chat about a potential project, don't hesitate to get in touch.`}
				/>
				<ButtonContainer>
					<Button onClick={onContactButtonPress} />
				</ButtonContainer>
			</ItemsContainer>
		</ContactStyled>
	);
}

const ContactStyled = styled(Section)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	justify-self: center;
	align-self: center;
	height: 100%;
	/* padding-top: 20em;
	padding-bottom: 20em; */
`;

const ItemsContainer = styled.div`
	width: 90%;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		width: 40%;
	}
`;
const Divider = styled.div`
	width: 100%;
	height: 2rem;
`;

const ButtonContainer = styled.div`
	margin-top: 2em;
	height: 5em;
	width: 70%;
`;

export default Contact;
