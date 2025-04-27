const Pagination = ({ page, totalPages, setPage, variant }) => {
	{
		<div className="d-flex justify-content-center align-items-center">
			<nav>
				<ul className="pagination">
					<a
						className=""
						disabled={page === 1}
						onClick={() => setPage(page - 1)}
					>
						Previous
					</a>

					<span className="page-link" href="#">
						<span>
							Page {page} of {totalPages}
						</span>
					</span>
					<a
						className=" "
						disabled={page === totalPages}
						onClick={() => setPage(page + 1)}
					>
						Next
					</a>
				</ul>
			</nav>
		</div>;
	}
	return (
		<nav>
			<ul className="pagination">
				<button
					className={
						variant
							? ` btn  btn-${variant} page-item`
							: " btn  btn-primary page-item"
					}
					disabled={page === 1}
					onClick={() => setPage(page - 1)}
				>
					Previous
				</button>

				<span
					className={variant ? ` page-link text-${variant}  ` : " page-link  "}
					href="#"
				>
					<span>
						Page {page} of {totalPages}
					</span>
				</span>
				<button
					className={
						variant
							? ` btn  btn-${variant} page-item`
							: " btn  btn-primary page-item"
					}
					disabled={page === totalPages}
					onClick={() => setPage(page + 1)}
				>
					Next
				</button>
			</ul>
		</nav>
	);
};

export default Pagination;
