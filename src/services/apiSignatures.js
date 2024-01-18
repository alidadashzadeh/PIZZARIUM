import supabase from "./supabase";

export async function getPizzas() {
	const { data, error } = await supabase.from("signaturePizzas").select("*");

	if (error) {
		console.log("error happened");
	}
	return data;
}
