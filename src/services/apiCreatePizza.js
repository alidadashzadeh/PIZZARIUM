import supabase from "./supabase";

export async function getDoughs() {
	const { data, error } = await supabase.from("dough").select("*");

	if (error) {
		console.log("error happened");
	}

	return data;
}

export async function getCrusts() {
	const { data, error } = await supabase.from("crust").select("*");

	if (error) {
		console.log("error happened");
	}

	return data;
}

export async function getSauces() {
	const { data, error } = await supabase.from("baseSauce").select("*");

	if (error) {
		console.log("error happened");
	}

	return data;
}

export async function getCheeses() {
	const { data, error } = await supabase.from("baseCheese").select("*");

	if (error) {
		console.log("error happened");
	}

	return data;
}

export async function getToppings() {
	let { data, error } = await supabase.from("toppings").select("*");

	if (error) {
		console.log("error happened");
	}

	return data;
}
