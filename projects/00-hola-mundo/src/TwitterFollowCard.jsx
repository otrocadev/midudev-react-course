import { useState } from "react";

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Unfollow" : "Follow";

  const buttonClassName = isFollowing
    ? "mr-4 bg-slate-700 py-1 px-4  rounded-3xl text-white"
    : "mr-4 bg-slate-50 py-1 px-4  rounded-3xl text-black";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="flex w-80 items-center bg-gray-800 text-white">
      <img
        className="rounded-full w-12 m-2"
        src={`https://unavatar.io/${userName}`}
        alt="Otrocadev avatar"
      />
      <div className="w-36">
        <strong className="text-bold">{name}</strong>
        <p>@{userName}</p>
      </div>
      <button className={buttonClassName} onClick={handleClick}>
        <strong>{text}</strong>
      </button>
    </article>
  );
}
