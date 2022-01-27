import prisma from '../../../lib/prisma';

export default async function getComment(req, res) {
	try {
		console.log('comment', req.query.id);
		const result = await prisma.post.findMany({
			where: { postId: req.query.id },
		});
		console.log('after comment', result);
		res.status(200).send([...result]);
	} catch (e) {
		res.status(400).send(e);
	}
}
