import styled from 'styled-components';
export default styled.section`
	/* width: 100%; */
	/* height: 100vh; */
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	/* margin-top: 3em; */
	/* padding-top: 5em; */
	/* overflow: hidden; */
	padding-top: 5em;
	@media (min-width: 1400px) {
		padding: ${(props) => props.theme.padding.xlg};
		padding-top: 10em;
	}
`;
