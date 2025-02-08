import UseFetch from './UseFetch';

export default function FetchYogaData() {
	let url = 'https://api.npoint.io/4459a9a10e43812e1152';
	let [data] = UseFetch(url);
	console.log(data);
	return (
		<>
			<h1>Fetch Yoga Data</h1>
			<ul>
				{data
					? data.map((el, index) => {
							return (
								<>
									<li key={index}>{el.name}</li>
								</>
							);
					  })
					: ''}
			</ul>
		</>
	);
}
