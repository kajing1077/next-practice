import OrderListTable from '../components/order/orderlist';
import { createClient } from "../utils/supabase/server";

export default async function OrderList() {
  
  const supabase = createClient();

  async function fetchOrders() {
    const { data, error } = await supabase.from("orders").select();

    return { data, error };
  }

  const { data, error } = await fetchOrders();


  if (error) {
    console.error('Failed to fetch orders', error);
    return;
  }


  return (
    <div>
      <OrderListTable orders={data}/>
    </div>
  );
}