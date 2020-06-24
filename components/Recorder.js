import React, { useState, useEffect } from "react";
import Main from "ui/Main";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Button } from "react-native";
import RecorderButton from "./RecorderButton";
import { uploadAudio } from "services/dream";

const getPermissions = async () => {
	const permissions = await Audio.requestPermissionsAsync();
	return permissions.granted;
};

const Recorder = () => {
	const [duration, setDuration] = useState(0);
	const [recorder, setRecorder] = useState(new Audio.Recording());
	const [isRecording, setIsRecording] = useState(false);
	const [audio, setAudio] = useState(false);
	const [audioFinished, setAudioFinished] = useState(false);

	useEffect(() => {
		const stopAudio = async () => {
			if (audioFinished) {
				audio.sound.stopAsync();
			}
		};
		stopAudio();
	}, [audioFinished]);

	const postAudio = async () => {
		uploadAudio(audio);
	};

	useEffect(() => {
		if (isRecording) {
			const interval = setInterval(async () => {
				const currentState = await recorder.getStatusAsync();
				setDuration(currentState.durationMillis);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [isRecording]);

	const recordAudio = async () => {
		const hasPermission = await getPermissions();
		if (hasPermission) {
			try {
				await recorder.prepareToRecordAsync(
					Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
				);
				await recorder.startAsync();
				setIsRecording(true);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const stop = async () => {
		await recorder.stopAndUnloadAsync();
		const info = await FileSystem.getInfoAsync(recorder.getURI(), {
			size: true
		});
		console.log(`FILE INFO: ${JSON.stringify(info)}`);
		const newSound = await recorder.createNewLoadedSoundAsync(
			{},
			async status => {
				if (status.didJustFinish) {
					setAudioFinished(true);
				}
			}
		);
		newSound.uri = recorder._uri;
		setAudio(newSound);
		setRecorder(new Audio.Recording());
		setIsRecording(false);
		setDuration(0);
	};

	const play = async () => {
		await audio.sound.playFromPositionAsync(0);
	};

	const stopAudio = async () => {
		audio.sound.stopAsync();
	};

	const log = async () => {};

	return (
		<Main>
			<RecorderButton
				isRecording={isRecording}
				duration={duration}
				stop={stop}
				recordAudio={recordAudio}
			/>
			{audio && <Button title={"play"} onPress={play} />}
			{audio && <Button title={"stop"} onPress={stopAudio} />}
			{audio && <Button title={"post"} onPress={postAudio} />}
			{audio && <Button title={"log"} onPress={log} />}
		</Main>
	);
};

export default Recorder;
