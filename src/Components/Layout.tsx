import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/Primary';
import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import Footer from './Footer/Footer';
interface Props {
	children?: ReactNode;
}
function Layout({ children }: Props) {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Navbar />
				{children}
				<Footer />
			</Container>
		</ThemeProvider>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export default Layout;
