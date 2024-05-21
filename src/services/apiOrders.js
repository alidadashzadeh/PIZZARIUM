import supabase from "./supabase";

export async function getOrders() {
  let { data, error } = await supabase.from("orders").select("*");

  if (error) {
    console.log("error happened in orders");
  }
  return data;
}

export async function createOrder({ currentOrder, user }) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ description: currentOrder, userId: user.user.id }])
    .select();

  if (error) {
    console.log("error happened");
  }
  return data;
}
