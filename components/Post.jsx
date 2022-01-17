import Image from 'next/image';
import styles from '../styles/Post.module.css';

export default function Post({ post }) {
	const tempDate = new Date(post.createdAt);
	post.createdAt = tempDate.toDateString();
	console.log(post);
	return (
		<article className={styles.postContainer}>
			<div className={styles.userInfo}>
				<div className={styles.photoProfil}>
					<Image
						width={70}
						height={70}
						objectFit="cover"
						src={`http://localhost:3001/${post.user.imageUrl}`}
						alt="Photo de profil"
					/>
				</div>
				<div className={styles.infoPartage}>
					<p>
						{post.user.firstName} {post.user.lastName}
					</p>
					<p>{post.createdAt}</p>
				</div>
			</div>
			<div className={styles.postInfo}>
				<div className={styles.post}>
					<h3>{post.titre}</h3>
					{post.imageUrl && (
						<Image
							className={styles.imagePost}
							width={350}
							height={350}
							objectFit="cover"
							src={post.imageUrl}
							alt=""
						/>
					)}
					<p>{post.contenu}</p>
					<p>{post.comments.length} Commentaires</p>
				</div>
			</div>
		</article>
	);
}
