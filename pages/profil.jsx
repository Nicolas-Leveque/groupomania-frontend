import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfil from '../components/UserProfil';

export default function Profil() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const myHeaders = new Headers({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		});
		fetch(`api/user/getUser`, {
			method: 'get',
			headers: myHeaders,
		})
			.then((response) => response.json())
			.then((json) => {
				const tempDate = new Date(json.createdAt);
				json.createdAt = tempDate.toDateString();
				setData(json);
			});
	}, []);

	return (
		<div>
			<Head>
				<title>Groupomania</title>
				<meta name="description" content="Page de profil" />
				<link rel="icon" href="/public/icon.png" />
			</Head>
			<Header />
			<UserProfil user={data} />
			<Footer />
		</div>
	);
}
