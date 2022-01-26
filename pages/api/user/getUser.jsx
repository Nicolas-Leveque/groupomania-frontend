import prisma from '../../../lib/prisma';

export default async function getUser(req, res) {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.user.id },
		});
		if (!user) {
			res.status(404).send();
		}
		res.status(200).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
}
