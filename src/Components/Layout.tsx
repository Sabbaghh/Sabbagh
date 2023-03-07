import React, { ReactNode } from 'react';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/Primary';
import styled from 'styled-components';
interface Props {
	children?: ReactNode;
}
function Layout({ children }: Props) {
	return (
		<ThemeProvider theme={theme}>
			<StyledComponentsRegistry>
				<Container>{children}</Container>
			</StyledComponentsRegistry>
		</ThemeProvider>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
`;

export default Layout;
