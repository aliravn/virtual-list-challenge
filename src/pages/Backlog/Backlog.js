import React from 'react';
import Ticket from 'components/Ticket/Ticket.js';

const tickets = [...Array(20).keys()].map(i => {
	return { id: i };
});

const Backlog = () => {
	return (
		<div>
			<h1>Backlog</h1>
			<ul>
				{tickets.map(item => (
					<li key={item.id}>
						<Ticket content={item} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Backlog;
