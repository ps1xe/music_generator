import AudioPlayer from 'react-audio-player';

export interface SoundPlayerProps {
    name: string;
    genre: string;
    length: string;
    url: string;
}

const SoundPlayer = ({ name, genre, length, url }: SoundPlayerProps) => {

    return (
        <>
            <div className='audio-player'>
                <div style={{ background: "white", marginRight: "5px" }}>{name}</div>
                <div style={{ background: "white" }}>{genre}</div>
                <AudioPlayer style={{ marginBottom: "2%" }} src={url} controls />
                <div style={{ background: "white" }}>{length}</div>
            </div>
        </>
    );
}

export default SoundPlayer;