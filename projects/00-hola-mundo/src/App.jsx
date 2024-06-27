import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="otrocadev"
        name="Ot Roca"
        initialIsFollowing
      />
      <TwitterFollowCard
        userName="midudev"
        name="Miguel Angel Durán"
        initialIsFollowing
      />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
    </>
  );
}
