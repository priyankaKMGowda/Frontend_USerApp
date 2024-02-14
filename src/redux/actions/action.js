// Action 1: FETCH POST
export const fetchUsers = users => ({
  type: "FETCH_USER",
  payload: users,
});

// Action 2: CREATE POST
export let createUser = user => ({
  type: "POST_USER",
  payload: user,
});
