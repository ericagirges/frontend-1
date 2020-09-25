import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
	display: flex;
	width: 100%;
`

const StyledCard = styled.div`
	background: WHITESMOKE;
	border-radius: 2px;
	height: 125px;
	margin: 1rem;
	width: 20%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
	h2 {
		text-align: center;
		color: black;
		transition: all 0.5s ease-in-out;
		&:hover {
			color: darkblue;
			transition: all 0.5s ease-in-out;
		}
	}
`

const Cards = ({ onLocations }) => {
	console.log('data', onLocations)
	return (
		<StyledDiv>
			{onLocations.map((loc) => (
				<StyledCard className="card">
					<h2>{loc.locname}</h2>
				</StyledCard>
			))}
		</StyledDiv>
	)
}
export default Cards
