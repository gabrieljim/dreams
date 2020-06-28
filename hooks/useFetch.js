import { useState, useEffect } from "react";

const useFetch = (fetchingFunction) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		const doFetch = async () => {
			setLoading(true);
			try {
				const res = await fetchingFunction();
				if (!signal.aborted) {
					setResponse(res);
				}
			} catch (e) {
				if (!signal.aborted) {
					setError(e);
				}
			} finally {
				if (!signal.aborted) {
					setLoading(false);
				}
			}
		};
		doFetch();
		return () => {
			abortController.abort();
		};
	}, []);

	return [response, loading, error];
};

export default useFetch;
