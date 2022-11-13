import React from 'react';
import PropTypes from 'prop-types';
import { statusCodes, priorityCodes } from 'utils/dataFactory.js';
import classnames from 'classnames';
import styles from 'components/Ticket/Ticket.module.scss';

const Ticket = ({ data }) => {
	const { subject, priority, status, description } = data;
	return (
		<div className={classnames(styles.wrapper, styles.fontScaler)}>
			<div className={styles.priority}>{priority}</div>
			<div className={styles.subject}>{subject}</div>
			<div className={styles.status}>{status}</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};

Ticket.propTypes = {
	/* ticket attributes */
	data: PropTypes.shape({
		/* ticket id in the database */
		id: PropTypes.number,
		/* ticket subject, can be title or in this example - ticket number */
		subject: PropTypes.string,
		/* priority code of the ticket */
		priority: PropTypes.oneOf(priorityCodes),
		/* current status code of the ticket */
		status: PropTypes.oneOf(statusCodes),
		/* main ticket content describing the work item */
		description: PropTypes.string,
	}).isRequired,
};

export default Ticket;
