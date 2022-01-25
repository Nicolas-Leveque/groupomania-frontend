import prisma from '../../lib/prisma';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default async function signup(req, res) {
	try {
		const userInfo = { ...req.body };
		if (userInfo.email === 'admin@groupomania.fr') {
			userInfo.admin = true;
		} else {
			userInfo = false;
		}
		const hashedPassword = await bcrypt.hash(userInfo.password, 10);
		userInfo.password = hashedPassword;
		const user = await prisma.user.create({
			data: { ...userInfo },
		});
		const token = jwt.sign({ id: user.id.toString() }, process.env.JWT_TOKEN, {
			expiresIn: 604800,
		});
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
}
