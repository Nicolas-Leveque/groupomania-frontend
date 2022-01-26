import prisma from '../../../../lib/prisma';

export default async function modifyPost(req, res) {
	try {
		const id = req.params.id;
		const postObject = { ...req.body };
		const post = await prisma.post.update({
			where: { id: req.params.id },
		});
	} catch (e) {
		res.status(400).send(e);
	}
}
