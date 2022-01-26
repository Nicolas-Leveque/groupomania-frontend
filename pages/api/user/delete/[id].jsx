import prisma from '../../lib/prisma';

export default async function deleteUser(req, res) {
	try {
		const deleteUser = await prisma.user.delete({
			where: {
				id: req.user.id,
			},
		});
		res.status(200).json({ message: 'Utilisateur supprimé' });
	} catch (e) {
		res.status(400).send(e);
	}
}
