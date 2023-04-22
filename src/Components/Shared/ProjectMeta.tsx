import React from 'react';
import styled from 'styled-components';
import AppStore from './storeButtons/AppStore';
import GooglePlay from './storeButtons/GooglePlay';
import Text, { types } from './Text';
import { meta as metaTypes } from './Card/types';
interface IProps {
	meta: metaTypes;
}
function ProjectMeta(props: IProps) {
	const { downloads, appstore, playstore } = props.meta;
	return (
		<MetaContainer>
			<MetaStoreContainer>
				{appstore ? (
					<Tab>
						<AppStore />
					</Tab>
				) : null}
				{playstore ? (
					<Tab>
						<GooglePlay />
					</Tab>
				) : null}
			</MetaStoreContainer>
			<MetaDownloadsContainer>
				<Text text={`${downloads}+` || ''} size='md' type={types.primaryBold} />
				<Text text='Downloads' size='sm' type={types.secondaryRegular} />
			</MetaDownloadsContainer>
		</MetaContainer>
	);
}

const MetaContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: space-between;
`;

const MetaDownloadsContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-direction: column;
	padding-right: 1em;
`;

const MetaStoreContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 2.9em;
	/* width: 20%; */
	width: min(20%, 100px);
	@media (min-width: 768px) {
		width: 25%;
		margin-right: 2.2em;
		width: min(20%, 3em);
	}
`;

export default ProjectMeta;
