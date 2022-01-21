import Link from 'next/link';
import styles from '../styles/Post.module.css';

export default function Post({ post }) {
	const tempDate = new Date(post.createdAt);
	post.createdAt = tempDate.toDateString();
	const userAvatar = localStorage.getItem('avatar');

	return (
		<article className={styles.postContainer}>
			<div className={styles.userInfo}>
				<div className={styles.infoPartage}>
					<p>
						{post.user.firstName} {post.user.lastName}
					</p>
					<p>{post.createdAt}</p>
				</div>
			</div>
			<div className={styles.postInfo}>
				<Link className={styles.post} href={`/post/${post.id}`} passHref>
					<a>
						<h3>{post.titre}</h3>
						<p>{post.contenu}</p>
						<p>{post.comments.length} Commentaires</p>
					</a>
				</Link>
			</div>
		</article>
	);
}
