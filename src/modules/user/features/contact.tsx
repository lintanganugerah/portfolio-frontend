import { Contact } from "../components/contact";
import { useAppSelector } from "../store";

export const ContactFeatures = () => {
    const { profile, loading, error } = useAppSelector((state) => state.user);

    if (loading === "pending") return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!profile) return <p>No profile data available.</p>;

    return (
        <div>
            <Contact
                social={profile.social}
            />
        </div>
    );
};
