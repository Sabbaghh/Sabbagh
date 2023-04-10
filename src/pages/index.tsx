import Layout from '@/Components/Layout';
import Profile from '@/Components/Profile';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
export default function Home() {
	return (
		<Layout>
			<Profile />
			<Projects />
			<Contact />
		</Layout>
	);
}
