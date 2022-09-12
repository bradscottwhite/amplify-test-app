import './App.css';

import Amplify, { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';

const myAPI = 'api42b83fea';
const path = '/cust/';

function App() {
	const [ input, setInput ] = useState('');
	const [ custs, setCusts ] = useState([]);

	function getCust(custId) {
		API.get(myAPI, path + custId)
			.then(res => {
				setCusts([ ...custs, res ]);
				setInput('');
			})
			.catch(err => {
				console.log(err);
			});
	}

	return (
		<div className="App">
			<h1>AWS Test App</h1>
			<div>
				<input placeholder='Customer ID:' value={input} onChange={e => setInput(e.target.value)} />
			</div>
			<br/>
			<button onClick={() => getCust(input)}>Get Customer From Backend</button>
			<h2 style={{ visibility: custs.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
			{
				custs.map((thisCust, index) => {
					return (
						<div key={thisCust.custId}>
							<span><b>Customer ID:</b> {thisCust.custId} . <b>Customer Name:</b> {thisCust.custName}</span>
						</div>
					)
				})
			}
		</div>
	);
}

export default App;
