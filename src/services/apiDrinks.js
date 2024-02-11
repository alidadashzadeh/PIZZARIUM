import supabase from "./supabase";

export async function getDrinks() {
	let { data, error } = await supabase.from("drinks").select("*");

	if (error) {
		console.log("error happened");
	}
	return data;
}
