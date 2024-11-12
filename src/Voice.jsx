import React, { useState, useRef } from 'react';
import { IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const VoiceNoteRecorder = ({ onVoiceNote }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioPlayerRef = useRef(null);
  const audioChunksRef = useRef([]);

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob); // Read as Data URL (Base64)
    });
  };

  const startRecording = async () => {
    setRecordedBlob(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      audioChunksRef.current = [];

      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioChunksRef.current.push(event.data);
      });

      mediaRecorder.addEventListener('stop', async () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/mpeg' });
        setRecordedBlob(blob);
        const audioUrl = URL.createObjectURL(blob);
        setAudioUrl(audioUrl);
        onVoiceNote && onVoiceNote(await blobToBase64(blob));
      });
    } catch (error) {
      console.error('Error accessing the microphone', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playRecording = () => {
    if (audioPlayerRef.current && audioUrl) {
      audioPlayerRef.current.play();
    }
  };

  return (
    <div>
      <IconButton onClick={isRecording ? stopRecording : startRecording} color="primary">
        {isRecording ? (
          <MicIcon className="recording-active" />
        ) : (
          <MicNoneIcon />
        )}
      </IconButton>
{/* 
      {recordedBlob && (
        <IconButton onClick={playRecording} color="success">
          <PlayCircleOutlineIcon />
        </IconButton>
      )} */}

      <audio ref={audioPlayerRef} style={{ display: 'none' }} src={audioUrl} controls />
    </div>
  );
};

export default VoiceNoteRecorder;
