import React from "react";
import { useSelector } from "react-redux";

import Main from "ui/Main";
import Loading from "ui/Loading";

import useFetch from "hooks/useFetch";
import { fetchDream } from "services/dream";
import DreamHeader from "./components/DreamHeader";
import Comments from "./components/Comments";

const DreamScreen = props => {
	const { dreamId } = props.route.params;
	const [dream, loading] = useFetch(() => fetchDream(dreamId));
	const theme = useSelector(state => state.theme);

	//Dream header (the dream itself) had to be put inside of Comments because of the way virtualized lists work

	if (loading) {
		return (
			<Main>
				<Loading />
			</Main>
		);
	}

	return (
		<Main>
			<Comments
				theme={theme}
				comments={dream.comments}
				DreamHeader={() => (
					<DreamHeader
						theme={theme}
						dream={dream}
					/>
				)}
			/>
		</Main>
	);
};

export default DreamScreen;
