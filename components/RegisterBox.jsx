import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/Login.module.css';

export default function RegisterBox() {
	const [email, setEmail] = useState();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [password, setPassword] = useState();
	const [passwordCheck, setPasswordCheck] = useState();
	const [isRegisterOk, setIsRegisterOk] = useState(true);

	const router = useRouter();

	const submitRegister = (e) => {
		e.preventDefault();
		const registerRequest = {
			email,
			firstName,
			lastName,
			password,
		};
		console.log(registerRequest);
		const myHeaders = new Headers({ 'Content-Type': 'application/json' });

		if (password === passwordCheck) {
			fetch(`${process.env.NEXT_PUBLIC_BACKEND}/signup`, {
				method: 'post',
				headers: myHeaders,
				body: JSON.stringify(registerRequest),
			})
				.then((response) => response.json())
				.then((json) => {
					localStorage.setItem('token', json.token);
					localStorage.setItem('id', json.user.id);
					localStorage.setItem('admin', json.user.admin);
					router.push('/frontpage');
				});
		} else {
			setIsRegisterOk(false);
		}
	};

	return (
		<div>
			<div className={styles.innerContainer}>
				<div className={styles.header}>Register</div>
				<form className={styles.box} onSubmit={submitRegister}>
					<div className={styles.inputGroup}>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							className={styles.loginInput}
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="firstname">Prénom</label>
						<input
							type="text"
							name="firstname"
							className={styles.loginInput}
							placeholder="Prénom"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="lastname">Nom</label>
						<input
							type="text"
							name="lastname"
							className={styles.loginInput}
							placeholder="Nom"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="password">Mot de passe</label>
						<input
							type="password"
							name="password"
							className={styles.loginInput}
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="password-check">Verifier Mot de passe</label>
						<input
							type="password"
							name="password-check"
							className={styles.loginInput}
							placeholder="Password"
							onChange={(e) => setPasswordCheck(e.target.value)}
						/>
					</div>
					{!isRegisterOk && (
						<p>Les mots ne correspondent pas, veuillez essayer à nouveau</p>
					)}
					<button type="submit" className={styles.loginBtn}>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
