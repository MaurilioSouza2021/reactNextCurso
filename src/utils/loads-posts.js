export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  const postsJason = await posts.json();
  const photosJason = await photos.json();

  const postsAndPhotos = postsJason.map((post, index) => {
    return { ...post, cover: photosJason[index].url };
  });

  return postsAndPhotos;
};
