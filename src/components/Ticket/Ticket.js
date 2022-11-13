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
	data: PropTypes.shape({
		id: PropTypes.number,
		subject: PropTypes.string,
		priority: PropTypes.oneOf(priorityCodes),
		status: PropTypes.oneOf(statusCodes),
		description: PropTypes.string,
	}).isRequired,
};

export default Ticket;
