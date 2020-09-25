import React from 'react'
import { homeObjOne, homeObjThree } from './Data'
import { InfoSection } from '../../components'

function Home() {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjThree} />
		</>
	)
}

export default Home
