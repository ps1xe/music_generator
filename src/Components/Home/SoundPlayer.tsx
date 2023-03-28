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

    const dispatch = useDispatch();

    const onClickDelete = () => {
        dispatch(deleteSound(id));
        dispatch(getSounds(1));
    }


    return (
        <>
            <div className={loaded ? 'audio-player' : 'audio-player loading'}>
                <div style={{ background: "white", marginRight: "5px" }}>{name}</div>
                <div style={{ background: "white" }}>{genre}</div>
                <AudioPlayer style={{ marginBottom: "2%" }} src={url} controls />
                <div style={{ background: "white" }}>{length}</div>
                <button onClick={onClickDelete} type="button" className="btn btn-danger">Del</button>
            </div>
        </>
    );
}

export default SoundPlayer;