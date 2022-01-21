import styles from '../styles/ShareForm.module.css';

export default function ShareForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const dataObject = Object.fromEntries(formData);
		const myHeaders = new Headers({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		});
		fetch(`${process.env.NEXT_PUBLIC_BACKEND}/post`, {
			method: 'post',
			headers: myHeaders,
			body: JSON.stringify(dataObject),
		}).then((response) => console.log(response));
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.inputGroup}>
				<input type="text" name="titre" placeholder="Titre" required />
				<textarea type="text" name="contenu" rows="5" />
				<button className={styles.trigger}>Envoyer</button>
			</div>
		</form>
	);
}
