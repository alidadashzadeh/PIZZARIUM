import supabase from "./supabase";

export async function getOrders() {
	let { data, error } = await supabase.from("orders").select("*");

	if (error) {
		console.log("error happened");
	}
	return data;
}

export async function createOrder(order) {
	const { data, error } = await supabase
		.from("orders")
		.insert([{ description: order }])
		.select();

	if (error) {
		console.log("error happened");
	}
	return data;
}
