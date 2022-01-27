import '../styles/globals.css';
import { useState } from 'react';
import { AppWrapper } from '../AppContext';

function MyApp({ Component, pageProps }) {
	const [reload, setReload] = useState(false);
	// const [token, setToken] = useState('');
	const [userId, setUserId] = useState('');
	const [isAdmin, setIsAdmin] = useState();
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default MyApp;
