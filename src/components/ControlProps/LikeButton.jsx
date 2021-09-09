import {useState} from 'react';

 const LikeButton = ({cb}) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => setLikes(cb(likes));

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="like">
        👍
      </span>
      {likes}
    </button>
  );
};

export default LikeButton;