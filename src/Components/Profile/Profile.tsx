import React from 'react';
import styled from 'styled-components';
import Section from '../Shared/Section';
import Card from '../Shared/Card';
import Content from './Content';
import data from '../../content/site-data.json';
function Profile() {
	const { title, subtitle, name, def, description, avatar, tag, social } =
		data.profile;
	return (
		<Section>
			<Left>
				<Content title={title} subtitle={subtitle} description={description} />
			</Left>
			<Right>
				<Card
					title={title}
					subtitle={subtitle}
					name={name}
					def={def}
					description={description}
					avatar={avatar}
					tag={tag}
					social={social}
				/>
			</Right>
		</Section>
	);
}

const Left = styled.div`
	display: none;
	@media (min-width: 992px) {
		display: flex;
		flex: 4;
		justify-content: flex-end;
		align-items: center;
	}
`;
const Right = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 4;
`;

export default Profile;
