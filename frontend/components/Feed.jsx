import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import { FeedCard } from "./FeedCard";

export const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed && feed.length > 0) return;

    try {
      const res = await axios.get("http://localhost:7777/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.error("Error while fetching feed", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
  <div className="flex justify-center items-center mt-10">
    {feed.map((users)=><FeedCard user={users} key={users._id}/> )}
  </div>
);
};
