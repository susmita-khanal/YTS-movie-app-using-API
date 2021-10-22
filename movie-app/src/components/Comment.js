import React from "react";

const Comment = () => {
  const [newData, setNewData] = useState({});
  const [comment, setComment] = useState([]);

  const getBlog = async;
  useEffect(() => {
    getBlog();
  });
  const getComment = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
  };
  return <></>;
};

export default Comment;
