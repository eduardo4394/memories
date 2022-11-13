const URL = "http://localhost:5000/posts";

const getPosts = () => {
  const res = fetch(URL);
  const data = res.json();
  console.log(data);
  return data;
};
