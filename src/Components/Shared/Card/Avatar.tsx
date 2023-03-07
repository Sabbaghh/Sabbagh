import React from 'react';
import Flex from '../Flex';
import ImageContainer from '../ImageContainer';
interface Props {
	ratio: number;
	uri: string;
}
function Avatar({ ratio, uri }: Props) {
	return (
		<Flex ratio={ratio}>
			<ImageContainer uri={uri} />
		</Flex>
	);
}

export default Avatar;
