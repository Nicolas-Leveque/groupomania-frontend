import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Header.module.css';

import logo from '../public/logos/icon-left-font-monochrome-white.svg';

export default function Header() {
	const router = useRouter();

	const handleLogout = () => {
		localStorage.clear();
		router.push('/');
	};
	return (
		<header className={styles.header}>
			<Link href="/frontpage">
				<a>
					<Image
						width={200}
						height={78}
						objectFit="logo"
						src={logo}
						alt="logo groupomania"
					/>
				</a>
			</Link>

			<div className={styles.headerRight}>
				<Link href="/profil">
					<a className={styles.link}>Profil</a>
				</Link>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</header>
	);
}
