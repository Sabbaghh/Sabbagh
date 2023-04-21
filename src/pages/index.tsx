import Layout from '@/Components/Layout';
import Profile from '@/Components/Profile';
import Resume from '@/Components/Resume';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
export default function Home() {
	return (
		<Layout>
			<Profile />
			<Resume />
			<Projects />
			<Contact />
		</Layout>
	);
}
