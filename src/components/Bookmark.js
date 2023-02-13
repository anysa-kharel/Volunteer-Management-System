import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useState } from "react";

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };
  return (
    <>
      <div className="bookmark" onClick={() => toggleBookmark()}>
        {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </div>
    </>
  );
};

export default Bookmark;