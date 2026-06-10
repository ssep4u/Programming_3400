import { useEffect, useRef, useState } from 'react'

import backgroundMusic1 from '../assets/BackgroundMusic/background-music-1.mp3'
import backgroundMusic2 from '../assets/BackgroundMusic/background-music-2.mp3'
import backgroundMusic3 from '../assets/BackgroundMusic/background-music-3.mp3'
import backgroundMusic4 from '../assets/BackgroundMusic/background-music-4.mp3'

const musicTracks = [
    backgroundMusic1,
    backgroundMusic2,
    backgroundMusic3,
    backgroundMusic4,
]

export default function BackgroundMusic() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [trackIndex, setTrackIndex] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio || !isPlaying) {
            return;
        }

        audio.play().catch(() => {
            setIsPlaying(false);
        });
    }, [isPlaying, trackIndex]);

    function playMusic() {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.play().then(() => {
            setIsPlaying(true);
        }).catch(() => {
            setIsPlaying(false);
        });
    }

    function stopMusic() {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.pause();
        setIsPlaying(false);
    }

    function changeTrack(nextIndex) {
        const audio = audioRef.current;

        if (audio) {
            audio.currentTime = 0;
        }

        setTrackIndex(nextIndex);
    }

    function playNextTrack() {
        changeTrack((trackIndex + 1) % musicTracks.length);
    }

    function playPreviousTrack() {
        changeTrack((trackIndex - 1 + musicTracks.length) % musicTracks.length);
    }

    return (
        <div className="background-music">
            <audio
                ref={audioRef}
                src={musicTracks[trackIndex]}
                onEnded={playNextTrack}
            >
                Your browser does not support the audio element.
            </audio>
            <button
                className="music-button music-button--previous"
                type="button"
                onClick={playPreviousTrack}
            >
                &#xC774;&#xC804;
            </button>
            <button
                className="music-button music-button--play"
                type="button"
                onClick={playMusic}
                disabled={isPlaying}
            >
                &#xC7AC;&#xC0DD;
            </button>
            <button
                className="music-button music-button--stop"
                type="button"
                onClick={stopMusic}
                disabled={!isPlaying}
            >
                &#xC2A4;&#xD0D1;
            </button>
            <button
                className="music-button music-button--next"
                type="button"
                onClick={playNextTrack}
            >
                &#xB2E4;&#xC74C;
            </button>
        </div>
    )
}
