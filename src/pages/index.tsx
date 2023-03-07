import Layout from '@/Components/Layout';
import useWindowSize from '@/hooks/useWindowSize';
import Profile from '@/Components/Profile';
export default function Home() {
	const { mobileSize } = useWindowSize();
	return (
		<Layout>
			<Profile mobileSize={mobileSize} />
		</Layout>
	);
}
