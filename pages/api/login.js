import prisma from '../../lib/prisma';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default async function login(req, res) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: req.body.email,
			},
		});
		if (!user) {
			throw new Error('Erreur de connexion');
		}
		const isMatch = await bcrypt.compare(req.body.password, user.password);
		if (!isMatch) {
			throw new Error('Erreur de connexion');
		}
		const token = jwt.sign({ id: user.id.toString() }, process.env.JWT_TOKEN, {
			expiresIn: 604800,
		});
		res.status(200).send({ user, token });
	} catch (e) {}
}
