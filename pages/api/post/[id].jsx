import prisma from '../../../lib/prisma';

export default async function getPost(req, res) {
	try {
		const id = req.params.id;
		const user = await prisma.post.delete({
			where: { id: id },
		});
	} catch (e) {
		res.status(400).send(e);
	}
}
