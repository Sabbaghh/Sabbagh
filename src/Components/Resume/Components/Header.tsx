import React from 'react';
import Text, { types } from '../../Shared/Text';
import styled from 'styled-components';
import Button from '@/Components/Shared/Button';
function HeaderComponent() {
	return (
		<Header>
			<HeaderItem>
				<Text size='md' type={types.primaryRegular} text='Resume' />
			</HeaderItem>
			<HeaderItem>
				<Text
					hover
					color='secondary'
					type={types.secondaryRegular}
					text='>'
					size='xsm'
				/>
				<Text
					hover
					color='primaryLight'
					type={types.secondaryRegular}
					text='PDF VERSION'
					size='xsm'
				/>
			</HeaderItem>
		</Header>
	);
}

export default HeaderComponent;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1;
	@media (min-width: 768px) {
		flex: 2;
	}
`;

const HeaderItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1em;
	gap: 0.5em;
	@media (min-width: 768px) {
		padding: ${(props) => props.theme.padding.sm};
	}
`;
