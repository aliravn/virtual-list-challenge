import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ScalableList/ScalableList.module.scss';

const ScalableList = props => {
	const { itemsTotal, itemHeight, renderItem, listHeight } = props;
	const [scrollTop, setScrollTop] = useState(0);

	const innerHeight = itemsTotal * itemHeight;
	const startIndex = Math.floor(scrollTop / itemHeight);
	const endIndex = Math.ceil((scrollTop + listHeight) / itemHeight - 1);

	const items = [];
	for (let i = startIndex; i <= endIndex; i++) {
		items.push(
			renderItem({
				index: i,
				style: {
					position: 'absolute',
					top: `${i * itemHeight}px`,
					width: '100%',
					height: `${itemHeight}px`,
					padding: '2px',
				},
			})
		);
	}

	const handleScroll = e => setScrollTop(e.currentTarget.scrollTop);

	return (
		<div
			className={styles.visibleArea}
			style={{ height: `${listHeight}px` }}
			onScroll={handleScroll}
		>
			<ul style={{ position: 'relative', height: `${innerHeight}px` }}>{items}</ul>
		</div>
	);
};

ScalableList.propTypes = {
	/* total number of items in the list */
	itemsTotal: PropTypes.number,
	/* defines height of each row in the list */
	itemHeight: PropTypes.number,
	/* callback function to return an eleemnt to render in the list */
	renderItem: PropTypes.func,
	/* height of the list area that is visible to the user */
	listHeight: PropTypes.number,
};

ScalableList.defaultProps = {
	itemsTotal: 0,
	itemHeight: 40,
	renderItem: () => {},
	listHeight: 400,
};

export default ScalableList;
