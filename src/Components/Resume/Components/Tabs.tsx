import React, { useState } from 'react';
import Text, { types } from '@/Components/Shared/Text';
import styled from 'styled-components';
import siteData from '../../../content/site-data.json';
const { resume: Tabs }: any = siteData;
interface props {
	selected: {
		category: string;
		subCategory: string;
	};
	onSubCategoryChange: (category: string, subCategory: string) => void;
	onCategoryChange: (category: string) => void;
}
function TabsComponent(props: props) {
	const { onSubCategoryChange, onCategoryChange, selected } = props;
	return (
		<TabsContainer>
			{Object.keys(Tabs).map((tabIndex, i) => {
				let isCategorySelected = selected.category === tabIndex;
				return (
					<Tab key={i} selected={isCategorySelected}>
						<TabHeader onClick={() => onCategoryChange(tabIndex)}>
							<Text
								hover
								size='sm'
								text={Tabs[tabIndex]._tab || ''}
								type={types.primaryRegular}
								color={isCategorySelected ? 'secondary' : 'primary'}
							/>
						</TabHeader>
						{Object.keys(Tabs[tabIndex].items).map((itemIndex, i) => {
							let isSubCategorySelected = selected.subCategory === itemIndex;
							return (
								<TabItem
									onClick={() => onSubCategoryChange(tabIndex, itemIndex)}
									key={i}
								>
									<Text
										hover
										color={
											isCategorySelected && isSubCategorySelected
												? 'secondary'
												: 'primary'
										}
										text={
											`0${i + 1}. ${Tabs[tabIndex].items[itemIndex]._name}` ||
											''
										}
										type={types.secondaryRegular}
										size='xsm'
									/>
								</TabItem>
							);
						})}
					</Tab>
				);
			})}
		</TabsContainer>
	);
}

export default TabsComponent;

const TabsContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media (min-width: 768px) {
		height: 90%;
		flex-direction: column;
	}
`;

interface TabsTypes {
	selected: boolean;
}
const Tab = styled.div<TabsTypes>`
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	border-bottom: 1px solid;
	padding-left: 0.5em;
	padding-right: 0.5em;
	border-color: ${(props) =>
		!props.selected
			? props.theme.colors.primary
			: props.theme.colors.secondary};
	transition: border ease-in-out 0.5s;

	@media (min-width: 768px) {
		border-left: 1px solid;
		border-bottom: 0px;
		padding-left: 1.3em;
		padding-right: 0;
	}
`;
const TabHeader = styled.div`
	margin-bottom: 1em;
`;
const TabItem = styled.div`
	margin-bottom: 0.8em;
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;
