import React from 'react';
import styled from 'styled-components';
import Text, { types } from '../Text';
import Button from '../Button';
import { FooterProps, cardTypes } from './types';
import ProjectMeta from '../ProjectMeta';
function CardFooter(props: FooterProps) {
	const { cardtype = 'profile', name, def, meta } = props;
	switch (cardtype) {
		case cardTypes.project:
			return (
				<CardFooterStyled cardtype={cardtype}>
					<ProjectMeta meta={meta} />
				</CardFooterStyled>
			);
		default:
			return (
				<CardFooterStyled>
					<FooterItem hidesm={true}>
						<Text
							size='lg'
							color='primary'
							text={name || ''}
							type={types.primaryBold}
						/>
					</FooterItem>
					<FooterItem hidesm={true}>
						<Text
							size='md'
							color='primaryLight'
							text={def || ''}
							type={types.secondaryRegular}
						/>
					</FooterItem>
					<FooterItem hidelg={true}>
						<Button />
					</FooterItem>
				</CardFooterStyled>
			);
	}
}
const CardFooterStyled = styled.div<FooterProps>`
	flex: 1;
	display: flex;
	justify-content: center;
	@media (min-width: 768px) {
		flex-direction: column;
		flex: 2;
	}
	@media (min-width: 992px) {
		display: ${(props) =>
			props.cardtype === cardTypes.project ? 'none' : 'flex'};
	}
`;
interface FooterItemProps {
	hidesm?: boolean;
	hidelg?: boolean;
}
const FooterItem = styled.div<FooterItemProps>`
	display: ${(props) => (props.hidesm ? 'none' : 'flex')};
	justify-content: center;
	align-items: center;
	width: 100%;
	position: relative;
	@media (min-width: 768px) {
		display: ${(props) => (props.hidelg ? 'none' : 'flex')};
		justify-content: flex-start;
		align-items: center;
	}
	/* border: 1px solid; */
`;

export default CardFooter;
