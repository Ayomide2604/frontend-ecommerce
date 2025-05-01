const ProductFilters = ({ limit, setLimit, sort, setSort }) => {
	const handleLimitChange = (e) => {
		setLimit(parseInt(e.target.value));
		setPage(1);
	};

	const handleSortChange = (e) => {
		setSort(e.target.value);
	};

	return (
		<div className="d-flex justify-content-end">
			<div className="btn  ms-2">
				<label>Page Size:</label>
				<select className="h-100" value={limit} onChange={handleLimitChange}>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
				</select>
			</div>

			<div className="btn ms-2">
				<label>Sort By:</label>
				<select className="h-100" value={sort} onChange={handleSortChange}>
					<option value="-createdAt">Newest</option>
					<option value="price">Price Low to High</option>
					<option value="-price">Price High to Low</option>
					<option value="name">Name A-Z</option>
					<option value="-name">Name Z-A</option>
				</select>
			</div>
		</div>
	);
};

export default ProductFilters;
