import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardAvatar from './CardAvatar';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { CardProps } from './types';
function Card(props: CardProps) {
	const {
		cardtype,
		social,
		tag,
		avatar,
		title,
		subtitle,
		description,
		name,
		def,
		meta,
	} = props;
	return (
		<CardContainer>
			<MainCard>
				<CardHeader
					cardtype={cardtype}
					title={title}
					social={social}
					tag={tag}
				/>
				<CardAvatar avatar={avatar} />
				<CardBody
					cardtype={cardtype}
					title={title}
					subtitle={subtitle}
					description={description}
				/>
				<CardFooter meta={meta} name={name} def={def} cardtype={cardtype} />
			</MainCard>
			<CardOutLine />
		</CardContainer>
	);
}

const CardContainer = styled.div`
	width: min(800px, 95%);
	height: max(600px, 65vh);
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		width: min(800px, 75%);
	}
`;

const MainCard = styled.div`
	width: 90%;
	height: 97.5%;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.primary};
	background: ${(props) => props.theme.colors.background};
	z-index: 2;
	display: flex;
	flex-direction: column;
	padding: ${(props) => props.theme.padding.xsm};
`;

const CardOutLine = styled(MainCard)`
	position: absolute;
	margin: 1.2em 0px 0px 1.2em;
	background: ${(props) => props.theme.colors.background};
	z-index: 1;
`;
export default Card;
