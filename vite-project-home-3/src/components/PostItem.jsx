function PostItem({ post }) {
  return (
    <>
      <ul>
        <li>title: {post.title}</li>
        <li>body: {post.body}</li>
        <br />
      </ul>
    </>
  );
}

export default PostItem;
