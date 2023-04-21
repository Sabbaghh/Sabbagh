import React from 'react';
import Section from '../Shared/Section';
import styled from 'styled-components';
import Text, { types } from '../Shared/Text';
import Button from '../Shared/Button';

function Contact() {
	return (
		<ContactStyled>
			<ItemsContainer>
				<Text
					size='sm'
					type={types.secondaryRegular}
					color='secondary'
					text={`03 . What’s Next ?`}
				/>
				<Divider />
				<Text
					align='center'
					size='xlg'
					type={types.primaryBold}
					text={`Get in touch`}
				/>
				<Divider />
				<Text
					size='md'
					align='center'
					color='primaryLight'
					text={`Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!`}
				/>
				<ButtonContainer>
					<Button />
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
	padding-top: 20em;
	padding-bottom: 20em;
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
