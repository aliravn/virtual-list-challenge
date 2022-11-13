export const priorityCodes = ['minor', 'major', 'critical', 'blocker'];
export const statusCodes = ['open', 'closed', 'in Progress', 'in Testing', 'in Rework'];

const getRandomValue = (source, min, max) => {
	const index = Math.floor(Math.random() * (max - min) + min);
	return source[index];
};

export const createTicket = id => {
	return {
		id,
		subject: `TicketNr-${id}`,
		priority: getRandomValue(priorityCodes, 0, priorityCodes.length),
		status: getRandomValue(statusCodes, 0, statusCodes.length),
		description:
			'Not really a description, some placeholder text here,  but will do for now :) Maybe will replace it with a lorem ipsum generator if I have time after the main requirements are fulfilled',
	};
};

export const createBacklog = ticketsRequired => {
	return [...Array(ticketsRequired).keys()].map(i => createTicket(i));
};
