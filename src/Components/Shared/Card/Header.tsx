import React from 'react';
import Flex from '../Flex';
import Text from '../Text';
interface Props {
	ratio: number;
	title: string;
	tag: {
		name: string;
		uri: string;
	};
	mobileSize?: boolean;
}
function Header({ ratio, title, tag, mobileSize }: Props) {
	return (
		<Flex justify='space-between' direction='row' ratio={ratio}>
			<span style={{ width: '90%' }}>
				<Text
					type='primary'
					style='bold'
					size={mobileSize ? 'md' : 'lg'}
					text={'A. '}
				/>
				<Text type='secondary' size={mobileSize ? 'md' : 'lg'} text={title} />
			</span>
			<Text
				color='primaryLight'
				type='secondary'
				size={mobileSize ? 'sm' : 'md'}
				text={tag.name}
			/>
		</Flex>
	);
}

export default Header;
