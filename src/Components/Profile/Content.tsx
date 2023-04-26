import React from 'react';
import styled from 'styled-components';
import Button from '../Shared/Button';
import Text, { types } from '../Shared/Text';
import AnimatedLogo from '../Shared/AnimatedLogo';
import onContactButtonPress from '../../Helpers/onContactButtonPress';
interface IProps {
	title: string;
	subtitle: string;
	description: string;
}
function Content(props: IProps) {
	const { title, subtitle, description } = props;
	return (
		<ContentContainer>
			<ContentHeader>
				<AnimatedLogo />
			</ContentHeader>
			<ContentBody>
				<Text text={subtitle} size='sm' type={types.secondaryRegular} />
				<Text as='h1' text={title} size='xxlg' type={types.primaryBold} />
				<Text
					as='p'
					color='primaryLight'
					text={description}
					size='md'
					type={types.primaryRegular}
				/>
			</ContentBody>
			<ContentFooter>
				<Button onClick={onContactButtonPress} />
			</ContentFooter>
		</ContentContainer>
	);
}

const ContentContainer = styled.div`
	width: min(900px, 85%);
	/* height: max(600px, 50vh); */
	height: max(600px, 65vh);
	/* height: 85vh; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* padding: ${(props) => props.theme.padding.sm}; */
`;

const ContentHeader = styled.div`
	flex: 6;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const ContentBody = styled.div`
	flex: 3;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-direction: column;
`;

const ContentFooter = styled.div`
	flex: 2;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: flex-end;
`;
export default Content;
