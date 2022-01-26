import prisma from '../../../lib/prisma';
const bcrypt = require('bcrypt');

export default async function modifyUSer(req, res) {
	try {
		const userInfo = { ...req.body };
		if (userInfo.password) {
			const hashedPassword = await bcrypt.hash(userInfo.password, 10);
			userInfo.password = hashedPassword;
		}
		const user = await prisma.user.update({
			where: { id: req.user.id },
			data: { ...userInfo },
		});
	} catch (e) {
		res.status(500).send(e);
	}
}
