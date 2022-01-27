import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/ShareForm.module.css';

export default function ShareForm() {
	const [showForm, setShowForm] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const router = useRouter();

	const handleShowShare = (e) => {
		e.preventDefault();
		setShowForm(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			title: title,
			contenu: content,
			authorId: parseInt(localStorage.getItem('id')),
		};
		fetch('api/post/create', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		}).then((response) => console.log(response));
		setShowForm(false);
		e.target.reset();
		router.reload();
	};

	return (
		<div className={styles.content}>
			<button className={styles.trigger} onClick={handleShowShare}>
				Partager
			</button>
			{showForm && (
				<form onSubmit={handleSubmit} onReset={(e) => setShowForm(false)}>
					<div className={styles.inputGroup}>
						<input
							type="text"
							name="titre"
							placeholder="Titre"
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<textarea
							type="text"
							name="contenu"
							rows="5"
							onChange={(e) => setContent(e.target.value)}
						/>
						<div className={styles.controls}>
							<button className={styles.trigger} type="reset">
								Annuler
							</button>
							<button className={styles.trigger} type="submit">
								Envoyer
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
}
