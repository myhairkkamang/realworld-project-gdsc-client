import { AuthContext } from "@/context/auth.context";
import { followUser, unfollowUser } from "@/services/profile/profile.service";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const FOLLOWING_CLASS = "btn btn-sm action-btn btn-secondary";
const NOT_FOLLOWING_CLASS = "btn btn-sm action-btn btn-outline-secondary";

interface Props {
  username: string;
  following: boolean;
  slug?: string;
}

export default function FollowButton({ username, following, slug }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    if (!user) {
      router.push("/register");
    }

    setIsLoading(true);

    if (following) {
      unfollowUser(user!.username);
    } else {
      followUser(user!.username);
    }

    setIsLoading(false);
  };

  return (
    <button
      className={following ? FOLLOWING_CLASS : NOT_FOLLOWING_CLASS}
      onClick={handleDelete}
      disabled={isLoading}
    ></button>
  );
}
