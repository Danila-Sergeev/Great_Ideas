import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import StandUp from './StandUp/StandUP';

function App() {
	const [activity, setActivity] = useState({});
	const activityUrl = 'http://www.boredapi.com/api/activity';
	async function getActivity(e) {
		e.preventDefault();
		return await fetch(activityUrl)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка ${res.status}`);
			})
			.then((activity) => setActivity(activity))
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<main>
				<StandUp
					activity={activity}
					getActivity={getActivity}
				></StandUp>
			</main>
		</div>
	);
}

export default App;
