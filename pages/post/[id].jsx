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

		fetch(`/api/post/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setPostData(json);
				console.log(postData);
				// setIsLoading(false);
			});
		// fetch(`/api/comment/${id}`, {
		// 	method: 'get',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// })
		// 	.then((response) => response.json())
		// 	.then((json) => {
		// 		setCommentData(json);
		// 		setIsLoading(false);
		// 	});
	}, []);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	console.log(commentData);
	return (
		<div>
			<Header />
			<Post post={postData} />
			{/* {commentData && (
				<div>
					{commentData.map((data, idx) => (
						<Comment comment={data} key={idx} />
					))}
				</div>
			)} */}

			<Footer />
		</div>
	);
}
