import React from "react";
import Main from "ui/Main";
import { useDispatch } from "react-redux";
import { Button } from "ui/Buttons";
import { logout } from "redux/authSlice";

import DreamList from "components/DreamList";

const MyProfileScreen = () => {
	const dispatch = useDispatch();

	return (
		<Main>
			<Button title="Logout" pressHandler={() => dispatch(logout())} />
			<DreamList
				userDreamsOnly={true}
			/>
		</Main>
	);
};

export default MyProfileScreen;
