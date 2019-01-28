users = [
  { id: 1, name: 'Moe' },
  {
    id: 2,
    name: 'Larry',
  },
  {
    id: 3,
    name: 'Curly',
  },
];

const list = () => {
  return [...users];
};

const find = id => {
  const user = users.find(user => user.id === +id);
  return { ...user }; // Again, we copy the post data before returning so the original information is safe.
};

module.exports = { list, find };
