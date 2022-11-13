import React from 'react';
import ScalableList from 'components/ScalableList/ScalableList.js';
import { createBacklog } from 'utils/dataFactory.js';
import Ticket from 'components/Ticket/Ticket.js';

const items = createBacklog(200);

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
							<Ticket data={items[index]} />
						</li>
					);
				}}
			/>
		</>
	);
};

export default Backlog;
