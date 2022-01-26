import prisma from '../../../../lib/prisma';

export default async function deletePost(req, res) {
	try {
		const deletedPost = await prisma.post.delete({
			where: {
				id: req.user.id,
			},
		});
		res.status(200).json({ message: 'Utilisateur supprimé' });
	} catch (e) {
		res.status(400).send(e);
	}
}
