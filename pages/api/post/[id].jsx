import prisma from '../../../lib/prisma';

export default async function getOnePost(req, res) {
	try {
		console.log(req.query.id);
		const post = await prisma.post.findUnique({
			where: {
				id: req.query.id,
			},
			include: {
				author: true,
				Comment: true,
			},
		});
		console.log('after getOne', post);
		res.status(200).send(post);
	} catch (e) {
		res.status(400).send(e);
	}
}
