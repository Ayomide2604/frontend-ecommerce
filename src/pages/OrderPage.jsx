import OrderTable from "../components/OrderTable";
import useOrderStore from "../store/useOrderStore";
const OrderPage = () => {
	const { orders, ordersLoad, ordersError } = useOrderStore();

	return (
		<>
			<OrderTable />
		</>
	);
};

export default OrderPage;
