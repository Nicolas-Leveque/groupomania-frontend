import Image from 'next/image';
import styles from '../styles/Profil.module.css';

export default function UserProfil({ user }) {
	return (
		<div className={styles.userProfil}>
			<h2>{user.fullName}</h2>
			<p>Inscrit depuis le {user.createdAt}</p>
			<div className={styles.userContainer}>
				<div className={styles.profilPhoto}>
					<Image
						width={100}
						height={100}
						objectFit="profil photo"
						src={`http://localhost:3001/${user.imageUrl}`}
						alt="photo de profil"
					/>
					{user.imageUrl}
					<br />
					<button>Choisir une photo</button>
				</div>
			</div>
		</div>
	);
}
