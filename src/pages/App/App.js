import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Backlog from 'pages/Backlog/Backlog.js';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Router>
				<nav className={styles.navigation}>
					<ul className={styles.navigationList}>
						<li>
							<Link to={'/backlog'} className={styles.navigationLink}>
								Tickets List
							</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path='/backlog'>
						<Backlog />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
