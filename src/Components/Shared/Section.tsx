import React from 'react';
import styled from 'styled-components';
import { IDProp } from '../types/Global';
interface Props extends IDProp {
	children?: React.ReactNode;
}
function Section({ children, id }: Props) {
	return <Container id={id}>{children}</Container>;
}

export default Section;

const Container = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: ${(props) => props.theme.padding.sm};
	padding-top: 5em;
	@media (min-width: 1850px) {
		padding: ${(props) => props.theme.padding.xlg};
		padding-top: 10em;
	}
`;
