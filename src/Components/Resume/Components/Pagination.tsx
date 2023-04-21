import React from 'react';
import styled from 'styled-components';
import Text, { types } from '@/Components/Shared/Text';
interface props {
	onPagination: (type: 'increment' | 'decrement') => void;
	pagination: {
		current: number;
		total: number;
	};
}
function Pagination(props: props) {
	const { onPagination, pagination } = props;
	return (
		<Container>
			<PaginationItem
				onClick={() => onPagination('decrement')}
				pointer
				flex={3}
				hide={pagination.current === 0}
			>
				<Text hover size='lg' type={types.primaryRegular} text='←' />
			</PaginationItem>
			<PaginationItem flex={1} hide={false}>
				<Text
					color='secondary'
					size='xsm'
					type={types.secondaryRegular}
					text={(pagination.current + 1).toString()}
				/>
			</PaginationItem>
			<PaginationItem flex={1} hide={false}>
				<Text size='xsm' type={types.secondaryRegular} text='/' />
			</PaginationItem>
			<PaginationItem flex={1} hide={false}>
				<Text
					size='xsm'
					type={types.secondaryRegular}
					text={(pagination.total + 1).toString()}
				/>
			</PaginationItem>
			<PaginationItem
				onClick={() => onPagination('increment')}
				pointer
				flex={3}
				hide={pagination.current === pagination.total}
			>
				<Text hover size='lg' type={types.primaryRegular} text='→' />
			</PaginationItem>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	width: 60%;
`;

interface PaginationItemProps {
	flex: number;
	hide?: boolean;
	pointer?: boolean;
}
const PaginationItem = styled.div`
	flex: ${(props: PaginationItemProps) => props.flex || 1};
	display: flex;
	visibility: ${(props: PaginationItemProps) =>
		props.hide ? 'hidden' : 'visible'};
	justify-content: center;
	align-items: center;
	cursor: ${(props: PaginationItemProps) =>
		props.pointer ? 'pointer' : 'default'};
`;

export default Pagination;
