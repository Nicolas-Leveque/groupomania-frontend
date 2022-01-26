import prisma from '../../../lib/prisma';

export default async function createPost(req, res) {
	try {
		const userPost = { ...req.body };
		const post = await prisma.post.create({
			...userPost,
			userId: req.user.id,
		});
		res.status(201).send({ message: 'Post created' });
	} catch (e) {
		res.status(400).send(e);
	}
}
