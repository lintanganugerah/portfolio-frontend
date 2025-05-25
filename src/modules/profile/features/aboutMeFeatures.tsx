import { useEffect } from "react";
import { Intro } from "../components/intro/intro";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchUser } from "../store/thunks/profileThunk";

export const AboutMeFeatures = ({ nameStyle }: { nameStyle?: string }) => {
  const dispatch = useAppDispatch();
  const { profile, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading === "pending") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!profile) return <p>No profile data available.</p>;

  return (
    <div>
      <Intro
        name={profile.name}
        description={profile.bio}
        nameStyle={nameStyle}
      />
    </div>
  );
};
