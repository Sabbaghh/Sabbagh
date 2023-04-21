import React from 'react';
import styled from 'styled-components';
import Text, { types } from '../Shared/Text';
import ProjectMeta from '../Shared/ProjectMeta';
interface IProps {
	tag: string;
	title: string;
	description: string;
	subtitle: string;
	tech: string[];
	meta: {
		downloads: string;
		appstore: string;
		playstore: string;
	};
}
function Content(props: IProps) {
	const { tag, title, description, subtitle, tech, meta } = props;
	return (
		<ContentContainer>
			<ContentHeader>
				<Text
					size='xxxlg'
					type={types.primaryBold}
					color='primaryLight'
					text={tag}
				/>
			</ContentHeader>
			<ContentBody>
				<Text
					text={subtitle}
					size='sm'
					type={types.secondaryRegular}
					color='secondary'
				/>
				<Text text={title} size='xxlg' type={types.primaryBold} />
				<Text
					color='primaryLight'
					text={description}
					size='sm'
					type={types.primaryRegular}
				/>
				<TechContainer>
					{tech.map((tech, i) => {
						return (
							<Tech key={i}>
								<Text text={tech} size='xsm' type={types.secondaryRegular} />
							</Tech>
						);
					})}
				</TechContainer>
			</ContentBody>
			<ContentFooter>
				<FooterItem>
					<ProjectMeta meta={meta} />
				</FooterItem>
			</ContentFooter>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	width: min(900px, 85%);
	height: max(600px, 85%);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

const ContentHeader = styled.div`
	opacity: 0.8;
	flex: 3;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const ContentBody = styled.div`
	flex: 2;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-direction: column;
	gap: 1em;
`;

const ContentFooter = styled.div`
	flex: 1;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const FooterItem = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	width: 100%;
`;
const TechContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
const Tech = styled.div`
	display: block;
	padding-right: 2rem;
`;

export default Content;
