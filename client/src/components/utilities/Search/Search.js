import { useState, useNavigate } from 'react';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import data from './SearchData';

const options = {
	keys: ['section', 'keywords'],
	minMatchCharLength: 3,
	threshold: 0.5,
};

const Search = ({ className, homeSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState([]);

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearchTerm(value);

		const fuse = new Fuse(data, options);
		const result = fuse.search(value);
		console.log(result);
		setResults(result);
	};

	return (
		<div className={className} onMouseLeave={(e) => setResults([])}>
			<div className="search-bar">
				<FaSearch size={20} />
				<input type="text" value={searchTerm} onChange={handleSearch} />
			</div>

			{results.length > 0 ? (
				<ul>
					{results.map(({ item }) => {
						return (
							<li key={item.section}>
								<a href={item.link} style={{ color: `${item.color}` }}>
									{item.section};
									<b>
										{item.keywords
											.filter((word) => word.includes(searchTerm))
											.map((val, ind, filter) => {
												if (filter.length === 1) return ` (${val})`;
												else if (ind === 0) return ` (${val},`;
												else if (ind === filter.length - 1) return ` ${val})`;
												else return ` ${val},`;
											})}
									</b>
								</a>
							</li>
						);
					})}
				</ul>
			) : (
				<></>
			)}
		</div>
	);
};

const SearchBar = styled(Search)`
	background: black;
	position: absolute;
	top: ${(props) => props.display};
	z-index: 20;
	width: 100%;
	height: 8vh;
	transition: top 0.3s ease-in-out;

	.search-bar {
		display: flex;
		justify-content: center;
		height: 100%;
		width: 60%;
		margin: 0 auto;
	}

	& svg {
		display: block;
		margin: auto 5px;
		color: white;
	}
	& input {
		height: 5vh;
		width: 90%;
		margin: auto 10px;
		border-radius: 1em;
	}

	& ul {
		padding: 0;
		background: lightgrey;
		width: 50%;
		margin: auto;
		list-style: none;
		font-size: larger;
		font-weight: bold;
		border: solid black;
		border-radius: 1rem;

		& li {
			border-top: solid black 1px;
			border-bottom: solid black 1px;
			padding: 10px;
			& a {
				text-decoration: none;
				text-shadow: 0.5px 0.3px 1px black;
			}
		}
	}
`;

export default SearchBar;
