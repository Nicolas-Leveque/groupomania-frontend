import { useState } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import styles from '../styles/Login.module.css';

export default function LoginRegister() {
	const [isLoginOpen, setIsLoginOpen] = useState(true);
	const [isRegisterOpen, setIsRegisterOpen] = useState(false);

	const showLoginBox = () => {
		setIsLoginOpen(true);
		setIsRegisterOpen(false);
	};
	const showRegisterBox = () => {
		setIsLoginOpen(false);
		setIsRegisterOpen(true);
	};
	return (
		<div className={styles.rootContainer}>
			<div className={styles.boxController}>
				<div
					className={'controller ' + (isLoginOpen ? 'selected-controller' : '')}
					onClick={showLoginBox}
				>
					Login
				</div>
				<div
					className={
						'controller ' + (isRegisterOpen ? 'selected-controller' : '')
					}
					onClick={showRegisterBox}
				>
					Register
				</div>
			</div>
			<div className={styles.boxContainer}>
				{isLoginOpen && <LoginBox />}
				{isRegisterOpen && <RegisterBox />}
			</div>
		</div>
	);
}
