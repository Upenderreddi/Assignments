import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// GET: Fetch all users
async function getUsers() {
  try {
    const response = await axios.get(API_URL);
    console.log('GET Users:', response.data);
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
}

// POST: Create a new user
async function createUser() {
  try {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890'
    };
    const response = await axios.post(API_URL, newUser);
    console.log('POST Create User:', response.data);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

// PUT: Update entire user details (id = 1)
async function updateUser() {
  try {
    const updatedUser = {
      id: 1,
      name: 'Updated Name',
      email: 'updated@example.com',
      phone: '987-654-3210'
    };
    const response = await axios.put(`${API_URL}/1`, updatedUser);
    console.log('PUT Update User:', response.data);
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
}

// PATCH: Update partial details (id = 1)
async function patchUser() {
  try {
    const patchData = {
      email: 'patched@example.com'
    };
    const response = await axios.patch(`${API_URL}/1`, patchData);
    console.log('PATCH User:', response.data);
  } catch (error) {
    console.error('Error patching user:', error.message);
  }
}

// DELETE: Delete user (id = 1)
async function deleteUser() {
  try {
    const response = await axios.delete(`${API_URL}/1`);
    console.log('DELETE User:', response.status); // 200 means success
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
}

// Run all functions one after another
async function runAllMethods() {
  await getUsers();
  await createUser();
  await updateUser();
  await patchUser();
  await deleteUser();
}

runAllMethods();
