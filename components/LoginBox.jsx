import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/Login.module.css';

export default function LoginBox() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [isLoginOk, setIsLoginOk] = useState(true);

	const router = useRouter();

	const submitLogin = (e) => {
		e.preventDefault();
		const loginRequest = { email, password };
		const myHeaders = new Headers({ 'Content-Type': 'application/json' });
		fetch(`${process.env.NEXT_PUBLIC_BACKEND}/login`, {
			method: 'post',
			headers: myHeaders,
			body: JSON.stringify(loginRequest),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erreur de connexion');
				}
				return response.json();
			})
			.then((json) => {
				console.log(json);
				localStorage.setItem('token', json.token);
				localStorage.setItem('id', json.user.id);
				localStorage.setItem('admin', json.user.admin);
				router.push('/frontpage');
			})
			.catch((e) => {
				console.log(e);
				setIsLoginOk(false);
			});
	};

	return (
		<div className={styles.innerController}>
			<div className={styles.header}>Login</div>
			<form className={styles.box} onSubmit={submitLogin}>
				<div className={styles.inputGroup}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						className={styles.loginInput}
						placeholder="Email"
					/>
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						className={styles.loginInput}
						placeholder="Password"
					/>
				</div>
				{!isLoginOk && (
					<p className={styles.error}>
						Erreur de connexion, veuiller vérifier vos identifiants{' '}
					</p>
				)}
				<button type="submit" value="Submit" className={styles.loginBtn}>
					Login
				</button>
			</form>
		</div>
	);
}
