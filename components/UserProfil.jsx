import styles from '../styles/Profil.module.css';

export default function UserProfil({ user }) {
	return (
		<div className={styles.userProfil}>
			<h2>{user.fullName}</h2>
			<p>Inscrit depuis le {user.createdAt}</p>
			<div className={styles.userContainer}></div>
		</div>
	);
}
