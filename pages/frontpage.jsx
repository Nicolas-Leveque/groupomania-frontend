import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShareForm from '../components/ShareForm';
import Footer from '../components/Footer';
import Post from '../components/Post';
import styles from '../styles/frontpage.module.css';

export default function Frontpage() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const myHeaders = new Headers({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		});
		fetch(`${process.env.NEXT_PUBLIC_BACKEND}/post`, {
			method: 'get',
			headers: myHeaders,
		})
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<Header />
			<div className={styles.content}>
				<ShareForm />
				<div className={styles.posts}>
					{data.map((data, idx) => {
						return <Post post={data} key={idx} />;
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
