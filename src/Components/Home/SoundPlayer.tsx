import { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux';
import { deleteSound, getSounds } from '../../redux/actions/sound.actions';
import './Home.css';

export interface SoundPlayerProps {
    id: string
    name: string;
    genre: string;
    length: string;
    url: string;
    loaded: boolean;
}

const SoundPlayer = ({ id, name, genre, length, url, loaded }: SoundPlayerProps) => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);


    const dispatch = useDispatch();


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("loadedmetadata", () => {
                if (audioRef.current) {
                    setDuration(audioRef.current.duration);
                    setCurrentTime(0);
                    setRemainingTime(audioRef.current.duration);
                }
            });
        }
    }, []);


    const onClickDelete = () => {
        dispatch(deleteSound(id));
        dispatch(getSounds(1));
    }


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", () => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                    setDuration(audioRef.current.duration);
                    setRemainingTime(Math.floor(audioRef.current.duration - audioRef.current.currentTime));
                }
            });
        }
    }, []);

    useEffect(() => {
        let interval: any;
        if (isPlaying && remainingTime > 0) {
            interval = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, remainingTime]);

    function formatTime(time: any) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    function handlePlayPause() {
        if (audioRef.current) {
            setIsPlaying(prevState => !prevState);
            if (!isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }

    function handleSeek(e: any) {
        const seekTime = e.target.value;
        if (audioRef.current) {
            audioRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    }

    return (
        <div style={loaded ? { borderColor: "rgba(142, 78, 252, 1)" } : { borderColor: "rgba(142, 78, 252, 0.5)" }} className="custom-audio-player">
            <div style={loaded ? { opacity: "1" } : { opacity: "0.5" }} className="player-info">
                <div className="player-info__name">{name}</div>
                <div className="player-info__genre">{genre}</div>
            </div>
            <audio ref={audioRef} src={url} preload="metadata" />
            <div className="player-controls">
                {loaded ?
                    <button className="player-controls__play-pause" onClick={handlePlayPause}>
                        {isPlaying ? <svg className='play_player' width="50" height="50" viewBox="0 0 50 50">
                            <defs>
                                <filter id="neon">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <circle cx="25" cy="25" r="20" fill="#a775fe" filter="url(#neon)" />
                            <rect x="17" y="16" width="4" height="19" fill="#fff" />
                            <rect x="29" y="16" width="4" height="19" fill="#fff" />
                        </svg> : <svg className='play_player' width="50" height="50" viewBox="0 0 50 50">
                            <defs>
                                <filter id="neon">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <circle cx="25" cy="25" r="20" fill="#a775fe" filter="url(#neon)" />
                            <path d="M19 16 L35 25 L19 35 Z" fill="#fff" />
                        </svg>}
                    </button>
                    :

                    <div style={{ opacity: "0.5" }} className="spinner">
                        <div className="blob top"></div>
                        <div className="blob bottom"></div>
                        <div className="blob left"></div>
                        <div className="blob move-blob"></div>
                    </div>

                }
                <input
                    style={loaded ? { opacity: "1" } : { opacity: "0.5" }}
                    className="player-controls__progress"
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                />
                <div style={loaded ? { opacity: "1" } : { opacity: "0.5" }} className="player-controls__remaining-time">{formatTime(remainingTime)}</div>
                <button onClick={onClickDelete} type="button" className="del-track-button">Удалить</button>
            </div>
        </div>
    );
}

export default SoundPlayer;