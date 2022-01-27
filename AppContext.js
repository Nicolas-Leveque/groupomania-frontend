import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

export function AppWrapper({ children }) {
	const [reload, setReload] = useState();
	const handleSetReload = (reload) => {
		setReload(reload);
	};
	const contextProps = {
		reload,
		setReload,
	};

	return (
		<AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
	);
}

// export function useAppContext() {
// 	return useContext(AppContext);
// }
