import React from 'react';
import styled from 'styled-components';
import Text, { types } from '../Text';
import { HeaderProps } from './types';
function CardHeader(props: HeaderProps) {
	const { social, tag, tagNumber, title, type } = props;
	return (
		<CardHeaderStyled>
			<HeaderItem flex='3'>
				{type === 'project' ? (
					<Text text={title || ' '} size='lg' type={types.primaryRegular} />
				) : (
					<span>
						<Text text={tag} size='lg' type={types.primaryRegular} />
					</span>
				)}
			</HeaderItem>
			<HeaderItem justify='flex-end'>
				<Text
					color='primaryLight'
					text={social?.name}
					size='sm'
					type={types.secondaryRegular}
				/>
			</HeaderItem>
		</CardHeaderStyled>
	);
}
const CardHeaderStyled = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
`;
interface HeaderItemProps {
	justify?: string;
	flex?: string;
}
const HeaderItem = styled.div<HeaderItemProps>`
	flex: ${(props) => props.flex || '1'};
	display: flex;
	align-items: center;
	justify-content: ${(props) => props.justify || 'flex-start'};
`;

export default CardHeader;
