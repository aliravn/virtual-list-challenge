import React from 'react';
import ScalableList from 'components/ScalableList/ScalableList.js';
import Ticket from 'components/Ticket/Ticket.js';

const items = [...Array(200).keys()].map(i => ({ id: i, subject: `Item ${i}` }));

const Backlog = () => {
	return (
		<>
			<h1>Ticket Backlog</h1>
			<ScalableList
				itemsTotal={items.length}
				itemHeight={40}
				listHeight={800}
				renderItem={({ index, style }) => {
					return (
						<li key={index} style={style}>
							<Ticket />
						</li>
					);
				}}
			/>
		</>
	);
};

export default Backlog;
