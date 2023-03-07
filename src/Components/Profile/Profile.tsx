import React from 'react';
import Section from '../Section';
import Flex from '../Shared/Flex';
import Card from '../Shared/Card';
import profileContent from '../../content/profile.json';
import Content from './Content';
import styled from 'styled-components';
interface Props {
	mobileSize?: boolean;
}
function Profile({ mobileSize }: Props) {
	const {
		Content: { header, title, body },
	} = profileContent;
	return (
		<Section>
			{!mobileSize ? (
				<Flex>
					<Content header={header} title={title} body={body} />
				</Flex>
			) : null}
			<Flex>
				<Card profileContent={profileContent} mobileSize={mobileSize} />
			</Flex>
		</Section>
	);
}

export default Profile;
