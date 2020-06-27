import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Main from "ui/Main";
import DreamHeader from "./components/DreamHeader";
import Comments from "./components/Comments";
import { fetchComments } from "services/dream";

const DreamScreen = props => {
	const { dream } = props.route.params;
	const [comments, setComments] = useState(false);
	const theme = useSelector(state => state.theme);

	//Dream header (the dream itself) had to be put inside of Comments because of the way virtualized lists work
	
	const updateComments = async (dreamId) => {
		setComments(await fetchComments(dreamId));
	}

	useEffect(() => {
		updateComments(dream.id);
	}, []);

	return (
		<Main>
			<Comments
				theme={theme}
				comments={comments}
				DreamHeader={() => (
					<DreamHeader
						onComment={updateComments}
						theme={theme}
						dream={dream}
						comments={comments}
					/>
				)}
				dreamId={dream.id}
			/>
		</Main>
	);
};

export default DreamScreen;
