import { useFetch } from "@/hooks/useFetch";

export default function UserProfile() {
    const { data, loading, error } = useFetch("/api/user/profile");
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading profile.</p>;
    if (!data) return <p>No profile data found.</p>;
    else return (
        <div>
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <p className="text-gray-600 mb-2">Welcome back, {data.name}!</p>
            <p className="text-gray-600 mb-2">Email: {data.email}</p>
            <p className="text-gray-600 mb-2">Member since: {new Date(data.createdAt).toLocaleDateString()}</p>
        </div>
    );
}