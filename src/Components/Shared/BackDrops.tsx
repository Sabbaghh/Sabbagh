import React from 'react';
import styled from 'styled-components';

interface Props {
	children?: React.ReactNode;
	open: boolean;
	onClose: () => void;
}
function BackDrop({ children, open, onClose }: Props) {
	return (
		<>
			<BackDropItem open={open} onClick={onClose} />
			<ChildrenContainer open={open}>{children}</ChildrenContainer>
		</>
	);
}

interface StyledProps {
	open?: boolean;
}
const Container = styled.div<StyledProps>`
	backdrop-filter: blur(25px);
	position: fixed;
	top: 0;
	left: 0;
	width: ${(props) => (props.open ? '100%' : '0')};
	height: 100vh;
	z-index: 120;
	transition: all 0.5s ease-in-out;
`;
const BackDropItem = styled.div<StyledProps>`
	background-color: rgba(0, 0, 0, 0.7);
	-webkit-backdrop-filter: blur(2em);
	backdrop-filter: blur(25px);
	position: fixed;
	top: 0;
	left: 0;
	width: ${(props) => (props.open ? '100%' : '0%')};
	opacity: ${(props) => (props.open ? '1' : '0')};
	height: 100vh;
	transition: all 0.5s ease-in-out;
	z-index: 120;
	:hover {
		cursor: pointer;
	}
`;

const ChildrenContainer = styled.div<StyledProps>`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	background: red;
	transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
	transition: all 0.5s ease-in-out;
	overflow: hidden;
	z-index: 200;
`;
export default BackDrop;
