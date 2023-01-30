import React from 'react'
import { usePWAInstall } from 'react-use-pwa-install'

export const PwaIns = () => {
	const install = usePWAInstall()

	return (
		<header>
			<h1>My app</h1>
			{install && <button onClick={install}>Install</button>}
		</header>
	)
}

export default PwaIns;