import React from 'react';
import Text, { types } from '../../Shared/Text';
import { tabsTypes } from '../types';
import styled from 'styled-components';
import Pagination from './Pagination';

interface props {
	content: any;
	onPagination: (type: 'increment' | 'decrement') => void;
	pagination: {
		current: number;
		total: number;
	};
}
function Content(props: props) {
	const { content, onPagination, pagination } = props;
	const { _type } = content;
	switch (_type) {
		case tabsTypes.descriptive:
			const date = `${content.start} - ${content.end}`;
			return (
				<Container>
					<Header>
						<HeaderItem>
							<Text
								as='h1'
								type={types.primaryBold}
								size='md'
								text={content.position}
							/>
						</HeaderItem>
						<HeaderItem>
							<Text as='h3' text={content.company} />
						</HeaderItem>
						<HeaderItem>
							<TimeLocationContainer>
								<Text
									as='span'
									size='xsm'
									type={types.secondaryRegular}
									color='secondary'
									text={date}
								/>
								<Text
									as='span'
									size='xsm'
									type={types.secondaryRegular}
									color='secondary'
									text={content.location}
								/>
							</TimeLocationContainer>
						</HeaderItem>
					</Header>
					<ContentContainer>
						{content.description.map((item: any, i: number) => {
							return (
								<ContentItem key={i}>
									<Text
										as='span'
										type={types.primaryRegular}
										color='secondary'
										text={'>'}
									/>
									<Text as='p' size='sm' text={item} />
								</ContentItem>
							);
						})}
					</ContentContainer>
					{/* <Footer>
						<Pagination pagination={pagination} onPagination={onPagination} />
					</Footer> */}
				</Container>
			);
		case tabsTypes.bulletPoints:
			return (
				<Container>
					<BulletPointsContainer>
						{Object.keys(content.points).map((key: string, i: number) => {
							return (
								<BulletPointItem key={i}>
									<Text
										type={types.primaryRegular}
										color='secondary'
										text={'>'}
									/>
									<Text
										as='p'
										size='sm'
										type={types.secondaryRegular}
										text={content.points[key]}
									/>
								</BulletPointItem>
							);
						})}
					</BulletPointsContainer>
					{/* <Footer>
						<Pagination pagination={pagination} onPagination={onPagination} />
					</Footer> */}
				</Container>
			);
		default:
			return <></>;
	}
}

const Container = styled.div`
	display: flex;
	width: 100%;
	height: min(75%, 25em);
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	flex: 2;
	padding: 0 1em;
	@media (min-width: 768px) {
		padding: ${(props) => props.theme.padding.sm};
	}
`;
const HeaderItem = styled.div`
	width: 100%;
`;
const TimeLocationContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100%;
`;

const ContentContainer = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 0 1em;
	padding-top: 2em;
	@media (min-width: 768px) {
		padding: ${(props) => props.theme.padding.sm};
		padding-top: 2.5em;
	}
`;
const ContentItem = styled.div`
	display: flex;
	gap: 1em;
	align-items: center;
`;

const Footer = styled.div`
	display: flex;
	flex: 1;
	padding: ${(props) => props.theme.padding.sm};
	justify-content: center;
	align-items: center;
`;

const BulletPointsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex: 5;
	margin-bottom: 1em;
`;

const BulletPointItem = styled.div`
	width: 45%;
	display: flex;
	gap: 1em;
	align-items: center;
`;

export default Content;
