import { Link } from 'react-router-dom';
import DefaultNavbar from '../Header/DefaultNavbar';
import SoundPlayer from '../Home/SoundPlayer';
import './Main.css'

const Main = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <DefaultNavbar />

                <div className="main-box">
                    <div className='left-side'>
                        <div className='left-side-info'>
                            <div className='left-side-info__small-description'>LED NEON LAMPS WITH A UNIQUE DESIGN</div>
                            <div className='left-side-info__beckoning_text'>ГЕНЕРИРУЙ МУЗЫКУ ПРЯМО СЕЙЧАС</div>
                            <div className='left-side-info__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam eum rem ut alias ipsa numquam reiciendis beatae voluptatibus, aperiam commodi, cumque maiores sint iure odit similique eveniet enim sunt!</div>
                            <div className='left-side-info__buttons'>
                                <Link to="/login" className='login_button'>Войти</Link>
                                <Link to="/reg" className='reg_button'>Регистрация</Link>
                            </div>
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='right-side-description'>Примеры сгенерированных мелодий</div>
                        <SoundPlayer
                            key={"sound"}
                            id={'dgdgdgd'}
                            name={'Example_1'}
                            genre={'Classical'}
                            length={'sound.length'}
                            url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                            loaded={true}
                        />
                        <SoundPlayer
                            key={"sound1"}
                            id={'dgdgdgd'}
                            name={'Example_2'}
                            genre={'8-bit music'}
                            length={'sound.length'}
                            url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                            loaded={true}
                        />
                        <SoundPlayer
                            key={"sound3"}
                            id={'dgdgdgd'}
                            name={'Example_3'}
                            genre={'Rock'}
                            length={'sound.length'}
                            url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                            loaded={true}
                        />
                    </div>

                </div>
            </div>
        </>
    );
}
export default Main;