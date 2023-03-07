import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Avatar from './Avatar';
import Content from './Content';
interface ProfileContent {
	Header: {
		title: string;
		tag: {
			name: string;
			uri: string;
		};
	};
	Avatar: {
		uri: string;
	};
	Content: {
		name: string;
		job_title: string;
		header: string;
		title: string;
		body: string;
	};
}

const elementRatio = {
	title: 1,
	avatar: 7,
	content: 5,
};
interface Props {
	mobileSize?: boolean;
	profileContent: ProfileContent;
}
function Card({ mobileSize = false, profileContent }: Props) {
	return (
		<Container>
			<CardStyled>
				<Header
					{...profileContent.Header}
					mobileSize={mobileSize}
					ratio={elementRatio.title}
				/>
				<Avatar {...profileContent.Avatar} ratio={elementRatio.avatar} />

				<Content
					{...profileContent.Content}
					ratio={elementRatio.content}
					name={profileContent.Content.name}
					job={profileContent.Content.job_title}
					mobileSize={mobileSize}
				/>
			</CardStyled>
			<CardOutline />
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	@media (min-width: 850px) {
		min-width: 438px;
		min-height: 657px;
		width: 60%;
		height: 95%;
		justify-content: center;
	}
`;

const CardStyled = styled.div`
	display: flex;
	width: 95%;
	height: 80%;
	z-index: 2;
	border: 2px solid;
	border-color: ${(props) => props.theme.colors.primary};
	background: ${(props) => props.theme.colors.background};
	flex-direction: column;
	z-index: 2;
`;
const CardOutline = styled(CardStyled)`
	margin-top: 40px;
	margin-left: 20px;
	position: absolute;
	z-index: 1;
	@media (min-width: 850px) {
		margin-top: 30px;
		margin-left: 30px;
	}
`;

export default Card;
