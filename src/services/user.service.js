export const userService = {
  getUser,
}

const user = {
  name: 'David Maor',
  balance: 100,
  transactions: [],
}

function getUser() {
  return user
}
