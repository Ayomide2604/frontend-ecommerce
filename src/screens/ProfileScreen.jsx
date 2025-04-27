import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";
import useAuthStore from "./../store/useAuthStore";
const ProfileScreen = () => {
	const { user } = useAuthStore();
	return (
		<>
			<div className="container">
				<h2>Profile Page</h2>
			</div>
			<div className="d-flex px-5">
				<ProfileCard user={user} />
				<ProfileForm />
			</div>
		</>
	);
};

export default ProfileScreen;
