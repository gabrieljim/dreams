import React from "react";
import Main from "ui/Main";
import { Container } from "ui/Containers";
import { Title } from "ui/Texts";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "ui/Buttons";
import { useTranslation } from "react-i18next";
import { logout } from "redux/authSlice";

const MyProfileScreen = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	const publishedDreams = `${t("publishedDreams")} 50`;

	return (
		<Main style={{ justifyContent: "space-evenly" }}>
			<Container>
				<Title>{user.username}</Title>
			</Container>
			<Container style={{ justifyContent: "flex-start" }}>
				<Title>{publishedDreams}</Title>
				<Button
					title={t("seeAllDreams")}
				/>
				<Button title="Logout" pressHandler={() => dispatch(logout())} />
			</Container>
		</Main>
	);
};

//<DreamList userDreamsOnly={true} />

export default MyProfileScreen;
