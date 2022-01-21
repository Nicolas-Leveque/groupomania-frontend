import { useState, useEffect } from 'react';
import Post from '../../components/Post';
import Comment from '../../components/Comment';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

export default function DetailPost() {
	const router = useRouter();
	const { id } = router.query;
	const [postData, setPostData] = useState({});
	const [commentData, setCommentData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const myHeaders = new Headers({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		});
		fetch(`${process.env.NEXT_PUBLIC_BACKEND}/post/${id}`, {
			method: 'get',
			headers: myHeaders,
		})
			.then((response) => response.json())
			.then((json) => {
				setPostData(json);
			});
		fetch(`${process.env.NEXT_PUBLIC_BACKEND}/comment/post/${id}`, {
			method: 'get',
			headers: myHeaders,
		})
			.then((response) => response.json())
			.then((json) => {
				setCommentData(json);
				setIsLoading(false);
			});
	}, [id]);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	console.log(commentData);
	return (
		<div>
			<Header />
			<Post post={postData} />
			{commentData.map((data, idx) => (
				<Comment comment={data} key={idx} />
			))}
			<Footer />
		</div>
	);
}
