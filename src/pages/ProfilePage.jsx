import useAuthStore from "../store/useAuthStore";
import ProfileForm from "../components/ProfileForm";
const ProfilePage = () => {
	const { user } = useAuthStore();
	return (
		<>
			<ProfileForm />
		</>
	);
};

export default ProfilePage;
