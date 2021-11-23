export const resolvers = {
    Query: {
      user: (id: number) => "Hello World",
      users: () => "Hello World",
      post: () => 'post',
      posts: () => 'posts'
    }
};