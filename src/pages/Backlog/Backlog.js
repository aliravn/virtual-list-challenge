import React from 'react';
import ScalableList from 'components/ScalableList/ScalableList.js';
import { createBacklog } from 'utils/dataFactory.js';
import Ticket from 'components/Ticket/Ticket.js';
import styles from 'pages/Backlog/Backlog.module.scss';

const items = createBacklog(12000);

const Backlog = () => {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.heading}>Ticket Backlog</h1>
				<ScalableList
					itemsTotal={items.length}
					itemHeight={40}
					listHeight={600}
					renderItem={({ index, style }) => {
						return (
							<li key={index} style={style}>
								<Ticket data={items[index]} />
							</li>
						);
					}}
				/>
			</div>
		</>
	);
};

export default Backlog;
