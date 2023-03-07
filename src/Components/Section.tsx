import styled from 'styled-components';
export default styled.section`
	background: ${(props) => props.theme.colors.background};
	height: 100vh;
	display: flex;
	align-items: center;
	position: relative;
	overflow-y: hidden;
	overflow-x: hidden;
	@media (min-width: 850px) {
		padding: ${(props) => props.theme.padding.xsm};
		width: 1700px;
	}
`;
