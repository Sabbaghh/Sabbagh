import styled from 'styled-components';

const Image = 'https://via.placeholder.com/500x500';
interface AvatarContainerProps {
	uri: string | undefined;
}
export default styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-position: bottom;
	background-image: url(${(props: AvatarContainerProps) => props.uri || Image});
`;
