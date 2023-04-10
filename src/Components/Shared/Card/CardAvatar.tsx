import React from 'react';
import styled from 'styled-components';
import ImageContainer from '../ImageContainer';
import { AvatarProps } from './types';
function CardAvatar({ avatar }: AvatarProps) {
	return (
		<CardAvatarStyled>
			<ImageContainer uri={avatar} />
		</CardAvatarStyled>
	);
}
const CardAvatarStyled = styled.div`
	flex: 6;
	@media (min-width: 768px) {
		flex: 9;
	}
`;
export default CardAvatar;
