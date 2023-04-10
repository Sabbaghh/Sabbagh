import React from 'react';
import styled from 'styled-components';
import Section from '../Shared/Section';
import Card from '../Shared/Card';
import { cardTypes } from '../Shared/Card/types';
import Content from './Content';
import data from '../../content/site-data.json';
function Projects() {
	return (
		<>
			{data.projects.map((project, i) => {
				const {
					title,
					description,
					avatar,
					social,
					tag,
					subtitle,
					tech,
					meta,
				} = project;

				return (
					<Section key={i}>
						{i % 2 === 0 ? (
							<>
								<Left>
									<Card
										title={title}
										description={description}
										social={social}
										meta={meta}
										avatar={avatar}
										cardtype={cardTypes.project}
									/>
								</Left>
								<Right hidesm={true}>
									<Content
										subtitle={subtitle}
										tag={tag}
										title={title}
										description={description}
										tech={tech}
										meta={meta}
									/>
								</Right>
							</>
						) : (
							<>
								<Left hidesm={true}>
									<Content
										subtitle={subtitle}
										tag={tag}
										title={title}
										description={description}
										tech={tech}
										meta={meta}
									/>
								</Left>

								<Right>
									<Card
										title={title}
										description={description}
										social={social}
										meta={meta}
										avatar={avatar}
										cardtype={cardTypes.project}
									/>
								</Right>
							</>
						)}
					</Section>
				);
			})}
		</>
	);
}
interface IProps {
	hidesm?: boolean;
}
const Left = styled.div<IProps>`
	display: ${(props) => (props.hidesm ? 'none' : 'flex')};
	justify-content: ${(props) => (props.hidesm ? 'flex-end' : 'center')};
	flex: 4;
	align-items: center;
	@media (min-width: 992px) {
		display: flex;
	}
`;
const Right = styled.div<IProps>`
	display: ${(props) => (props.hidesm ? 'none' : 'flex')};
	justify-content: ${(props) => (props.hidesm ? 'flex-start' : 'center')};
	flex: 4;
	@media (min-width: 992px) {
		flex: 1;
		display: flex;
		align-items: center;
		flex: 4;
	}
`;

export default Projects;
