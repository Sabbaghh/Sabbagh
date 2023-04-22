import React, { useState, useEffect } from 'react';
import Section from '../Shared/Section';
import styled from 'styled-components';
import TabsComponent from './Components/Tabs';
import Header from './Components/Header';
import Content from './Components/Content';
import siteData from '../../content/site-data.json';
import { IDProp } from '../types/Global';

const { resume: Tabs }: any = siteData;
function Resume({ id }: IDProp) {
	const [selected, setSelected] = useState({
		category: '0',
		subCategory: '0',
	});
	const [content, setContent] = useState(Tabs[0].items[0]);
	// pagination = {current: 1, total: 10}
	const [pagination, setPagination] = useState({
		current: 0,
		total: Object.keys(Tabs).length - 1,
	});
	const onCategoryChange = (category: string): void => {
		setPagination({ ...pagination, current: parseInt(category) });
		if (category === selected.category) return; //prevent to click twice
		setSelected({ category, subCategory: '0' });
		setContent(Tabs[category].items['0']);
	};
	const onSubCategoryChange = (category: string, subCategory: string): void => {
		if (subCategory === selected.subCategory && category === selected.category)
			return; //prevent to click twice
		setSelected({ category, subCategory });
		setContent(Tabs[category].items[subCategory]);
	};
	const onPagination = (type: 'increment' | 'decrement') => {
		switch (type) {
			case 'increment':
				onCategoryChange(`${pagination.current + 1}`);
				break;
			case 'decrement':
				onCategoryChange(`${pagination.current - 1}`);
				break;
			default:
				return;
		}
	};
	return (
		<Container id={id}>
			<CardContainer>
				<ResumeCard>
					<Header />
					<ContentContainer>
						<Left>
							<TabsComponent
								selected={selected}
								onCategoryChange={onCategoryChange}
								onSubCategoryChange={onSubCategoryChange}
							/>
						</Left>
						<Right>
							<Content
								content={content}
								onPagination={onPagination}
								pagination={pagination}
							/>
						</Right>
					</ContentContainer>
				</ResumeCard>
				<Outline />
			</CardContainer>
		</Container>
	);
}
const Container = styled(Section)`
	justify-content: center;
	align-items: center;
	padding-top: 10em;
`;

const CardContainer = styled.div`
	width: 89%;
	height: max(600px, 50vh);
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
`;
const ResumeCard = styled.div`
	background: ${(props) => props.theme.colors.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 95%;
	height: 95%;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.primary};
	z-index: 2;
`;
const Outline = styled(ResumeCard)`
	position: absolute;
	z-index: 1;
	margin: 1em 0px 0px 1em;
`;

const ContentContainer = styled.div`
	flex: 9;
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Left = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		flex: 3;
	}
`;

const Right = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 4;
`;

export default Resume;
