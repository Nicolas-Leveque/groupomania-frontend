import prisma from '../../../lib/prisma';

export default async function getAllPost(req, res) {
	try {
		const posts = await prisma.post.findMany({
			include: {
				author: true,
				Comment: true,
			},
		});
		res.status(200).send([...posts]);
	} catch (e) {
		res.status(400).send(e);
	}
}
