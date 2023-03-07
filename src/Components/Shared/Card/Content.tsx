import React from 'react';
import Flex from '../Flex';
import Text from '../Text';
import styled from 'styled-components';
import Button from '../Button';
interface Props {
	ratio: number;
	header?: string;
	title?: string;
	body?: string;
	name: string;
	job: string;
	mobileSize?: boolean;
}
function Content({ ratio, header, title, body, name, job, mobileSize }: Props) {
	return (
		<>
			{!mobileSize ? (
				<Flex align='flex-start'>
					<Text
						type='primary'
						style='bold'
						size='lg'
						text={name.toUpperCase()}
					/>
					<Text type='secondary' size='md' text={job} color='primaryLight' />
				</Flex>
			) : (
				<Container ratio={ratio}>
					<Text type='secondary' color='primary' text={header} size='xsm' />
					<Text style='bold' color='primary' text={title} size='lg' />
					<Text size='sm' color='primaryLight' text={body} />
					<Button text={`Let's work together`} />
				</Container>
			)}
		</>
	);
}

const Container = styled(Flex)`
	/* padding: ${(props) => props.theme.padding.sm}; */
	align-items: flex-start;
	gap: 5px;
`;

export default Content;
