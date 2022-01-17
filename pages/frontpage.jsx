import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import styles from '../styles/Post.module.css';

export default function Frontpage() {
	const [data, setData] = useState([]);
	useEffect(() => {
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
			});
	}, []);

	return (
		<div>
			<Header />

			{data.map((data, idx) => {
				return <Post post={data} key={idx} />;
			})}

			<Footer />
		</div>
	);
}
