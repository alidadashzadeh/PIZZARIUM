import supabase from "./supabase";

export async function getOrders(userId) {
  let { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("userId", userId);
  if (error) {
    console.log("error happened in orders");
  }
  return data;
}

export async function getOrder(orderId) {
  let { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (error) {
    console.log("error happened in orders");
  }
  return data;
}

export async function createOrder({ order, user, selectedAddress, cardInfo }) {
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        orderNumber: Date.now(),
        details: order,
        userId: user.user.id,
        deliveryAddress: selectedAddress,
        cardInformation: cardInfo,
        status: "preparing",
      },
    ])
    .select()
    .single();
  if (error) {
    console.log("error happened");
  }
  return data;
}
