export const userService = {
  getUser,
}

const user = {
  name: 'David Maor',

  balance: 100,
  transactions: [],
  imageUrl: 'https://robohash.org/5a566402abb3146207bc4ec5.png?set=set5',
}

function getUser() {
  return user
}
