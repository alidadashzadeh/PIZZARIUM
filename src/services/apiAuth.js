/* eslint-disable no-mixed-spaces-and-tabs */
import supabase from "./supabase";

export async function createUser({ email, password, fullName }) {
  // console.log(email, password, fullName);

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        phone: "",
        address: [],
        avatar: "",
      },
    },
  });

  if (error)
    throw new Error("there was some issue, new user did not get created");

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error)
    throw new Error("there was some issue, new user did not get created");

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user };
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error("issue logout");
}

export async function updateUser(updatedUser) {
  let avatarName;
  let avatarPath;

  if (updatedUser.data.image) {
    avatarName = `${Math.random()}-${updatedUser.data.image.name}`;
    avatarPath = `https://midjqwaobcnazwokoyvv.supabase.co/storage/v1/object/public/avatars/${avatarName}`;
  }

  const updateData = updatedUser.data.image
    ? {
        data: { ...updatedUser.data, avatar: avatarPath },
      }
    : {
        data: { ...updatedUser.data },
      };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!updatedUser.data.image) return data;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(avatarName, updatedUser.data.image);
  if (storageError) throw new Error(storageError.message);

  return data;
}

export async function changeUserPassword(newpassword) {
  const { error } = await supabase.auth.updateUser({ password: newpassword });

  if (error) throw new Error(error.message);
}

export async function addNewAddress(newAddress) {
  const { data, error } = await supabase.auth.updateUser({
    data: { address: [...newAddress] },
  });

  if (error) throw new Error(error.message);

  return data;
}
