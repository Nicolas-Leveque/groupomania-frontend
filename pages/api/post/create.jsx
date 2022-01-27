import prisma from '../../../lib/prisma';

export default async function createPost(req, res) {
	try {
		const userPost = { ...req.body };
		console.log(userPost);
		const post = await prisma.post.create({
			data: {
				...req.body,
			},
		});
		console.log('after post');
		res.status(201).send({ message: 'Post created', post });
	} catch (e) {
		res.status(400).send(e);
	}
}
