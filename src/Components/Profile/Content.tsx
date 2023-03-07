import React from 'react';
import Text from '../Shared/Text';
import styled from 'styled-components';
import Button from '../Shared/Button';
interface Props {
	header?: string;
	title?: string;
	body?: string;
}
function Content({ header, title, body }: Props) {
	return (
		<Container>
			<CardStyled>
				<ItemContainer ratio={7} style={{ justifyContent: 'flex-end' }}>
					<img src='/img/logo/Logo.png' alt='LOGO' style={{ width: '100%' }} />
				</ItemContainer>
				<ItemContainer
					ratio={2}
					style={{
						justifyContent: 'flex-end',
					}}
				>
					<Text type='secondary' color='primary' text={header} size='md' />
					<Text style='bold' color='primary' text={title} size='xlg' />
					<Text size='md' color='primaryLight' text={body} />
				</ItemContainer>
				<ItemContainer ratio={1}>
					<Button text={`Let's work together`} size='md' />
				</ItemContainer>
			</CardStyled>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 95%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	justify-content: center;
	min-height: 657px;
`;
const CardStyled = styled.div`
	display: flex;
	width: 70%;
	height: 80%;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
`;

const ItemContainer = styled.div`
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	flex: ${(props: { ratio: number }) => props.ratio};
`;

export default Content;
