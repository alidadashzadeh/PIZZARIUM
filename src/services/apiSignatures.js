import supabase from "./supabase";

export async function getPizzas() {
  const { data, error } = await supabase.from("signaturePizzas").select("*");

  if (error) {
    console.log("error happened");
  }
  return data;
}
export async function getPizza(id) {
  const { data, error } = await supabase
    .from("signaturePizzas")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("pizza not found");
  }

  return data;
}
