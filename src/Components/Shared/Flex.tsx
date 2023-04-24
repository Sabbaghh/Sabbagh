import styled from 'styled-components';
interface ContainerProps {
	ratio?: number;
	justify?: string;
	align?: string;
	direction?: string;
}
export default styled.div<ContainerProps>`
	display: flex;
	flex: ${(props) => props.ratio || 1};
	padding: ${(props) => props.theme.padding.xsm};
	justify-content: ${(props) => props.justify || 'center'};
	align-items: ${(props) => props.align || 'center'};
	flex-direction: ${(props) => props.direction || 'column'};
`;
