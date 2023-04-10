import React from 'react';
import Text, { types } from '../Text';
import styled from 'styled-components';
import { cardTypes, BodyProps } from './types';
function CardBody(props: BodyProps) {
	const { cardtype, description, title, subtitle } = props;
	switch (cardtype) {
		case cardTypes.project:
			return (
				<CardBodyStyled>
					<BodyItem>
						<Text
							text={description || ''}
							size='sm'
							type={types.primaryRegular}
						/>
					</BodyItem>
				</CardBodyStyled>
			);
		default:
			return (
				<CardBodyStyled>
					<BodyItem>
						<Text
							text={subtitle || ''}
							size='sm'
							type={types.secondaryRegular}
						/>
					</BodyItem>
					<BodyItem>
						<Text text={title || ''} size='lg' type={types.primaryBold} />
					</BodyItem>
					<BodyItem>
						<Text
							text={description || ''}
							size='sm'
							type={types.primaryRegular}
						/>
					</BodyItem>
				</CardBodyStyled>
			);
	}
}
const CardBodyStyled = styled.div`
	display: flex;
	flex: 2;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-top: 1em;
	@media (min-width: 768px) {
		display: none;
	}
`;

const BodyItem = styled.div`
	/* margin-bottom: 0.em; */
`;

export default CardBody;
