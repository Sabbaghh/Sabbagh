import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardAvatar from './CardAvatar';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { CardProps } from './types';
function Card(props: CardProps) {
	const {
		type,
		social,
		tag,
		tagNumber,
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
					type={type}
					title={title}
					social={social}
					tag={tag}
					tagNumber={tagNumber}
				/>
				<CardAvatar avatar={avatar} />
				<CardBody
					type={type}
					title={title}
					subtitle={subtitle}
					description={description}
				/>
				<CardFooter meta={meta} name={name} def={def} type={type} />
			</MainCard>
			<CardOutLine />
		</CardContainer>
	);
}

const CardContainer = styled.div`
	width: min(800px, 95%);
	height: max(600px, 85%);
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
	margin: 1vmax 0px 0px 1vmax;
	background: ${(props) => props.theme.colors.background};
	z-index: 1;
`;
export default Card;
