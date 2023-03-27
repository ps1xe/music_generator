import AudioPlayer from 'react-audio-player';
import './Home.css';


export interface SoundPlayerLoadingProps {
    name: string;
    genre: string;
    length: string;

}

const SoundPlayerLoading = ({ name, genre, length }: SoundPlayerLoadingProps) => {

    return (
        <>
            <div className='audio-player loading'>
                <div style={{ background: "white", marginRight: "5px" }}>{name}</div>
                <div style={{ background: "white" }}>{genre}</div>
                <AudioPlayer style={{ marginBottom: "2%" }} src={""} controls />
                <div style={{ background: "white" }}>{length}</div>
            </div>
        </>
    );
}

export default SoundPlayerLoading;