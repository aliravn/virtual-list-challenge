import React from 'react';
import Ticket from 'components/Ticket/Ticket.js';
import styles from './App.module.scss';

const tickets = [...Array(10).keys()].map(i => {
	return { id: i };
});

function App() {
	return (
		<div className={styles.app}>
			{tickets.map(item => (
				<Ticket />
			))}
		</div>
	);
}

export default App;
