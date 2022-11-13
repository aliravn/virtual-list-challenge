import React, { useState } from 'react';
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

export default ScalableList;
