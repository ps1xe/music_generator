import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultNavbar from '../Header/DefaultNavbar';
import SoundPlayer from '../Home/SoundPlayer';
import './Main.css'

const Main = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const circles = Array(20).fill(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Не забудьте удалить обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const exampleSounds = [
        <div className='example-box' key={0}>
            <img className='example-img' src="https://www.kaunus.com/app/uploads/2021/05/M%C3%BAsica-cl%C3%A1sica-origen-hitos..-2.png" alt=''></img>
            <SoundPlayer
                key={"sound"}
                id={'dgdgdgd'}
                name={'Example_1'}
                genre={'Classical'}
                length={'sound.length'}
                url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                loaded={true}
            />
        </div>,
        <div className='example-box' key={1}>
            <img className='example-img' src="https://i.ytimg.com/vi/RreryzfxxxE/maxresdefault.jpg" alt=''></img>
            <SoundPlayer
                key={"sound1"}
                id={'dgdgdgd'}
                name={'Example_2'}
                genre={'8-bit music'}
                length={'sound.length'}
                url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                loaded={true}
            />
        </div>,
        <div className='example-box' key={2}>
            <img className='example-img' src="https://img3.goodfon.ru/wallpaper/nbig/f/a5/gitara-rok-muzhchina-muzyka.jpg" alt=''></img>
            <SoundPlayer
                key={"sound3"}
                id={'dgdgdgd'}
                name={'Example_3'}
                genre={'Rock'}
                length={'sound.length'}
                url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                loaded={true}
            />
        </div>,
    ];


    const handlePrevClick = () => {
        setActiveIndex((prevIndex: any) => (prevIndex === 0 ? exampleSounds.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex: any) => (prevIndex === exampleSounds.length - 1 ? 0 : prevIndex + 1));
    };
    
    return (
        <>
            <ul className="circles">
                {circles.map((circle, index) => (
                    <li key={index}></li>
                ))}

                <div style={{ display: "flex", flexDirection: "column" }}>

                    {windowWidth > 850 ? <DefaultNavbar theme={"dark"} />
                        : <DefaultNavbar theme={"white"} />
                    }

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

                            <div className='sound-example'>
                                <button onClick={handlePrevClick}>
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9583 15.2083L7.08333 10L12.9583 4.79167L11.5417 3.375L4.16667 10L11.5417 16.625L12.9583 15.2083Z" fill="black" />
                                    </svg>

                                </button>
                                {exampleSounds[activeIndex]}
                                <button onClick={handleNextClick}>
                                    <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.04167 15.2083L12.9167 10L7.04167 4.79167L8.45833 3.375L15.8333 10L8.45833 16.625L7.04167 15.2083Z" fill="black" />
                                    </svg>
                                </button>
                            </div>

                            {/* <img style={{ width: "60vh" }} src="https://www.kaunus.com/app/uploads/2021/05/M%C3%BAsica-cl%C3%A1sica-origen-hitos..-2.png" alt=''></img>
                        <SoundPlayer
                            key={"sound"}
                            id={'dgdgdgd'}
                            name={'Example_1'}
                            genre={'Classical'}
                            length={'sound.length'}
                            url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                            loaded={true}
                        />
                        <img style={{ width: "60vh", height: "263.52px" }} src="https://i.ytimg.com/vi/RreryzfxxxE/maxresdefault.jpg" alt=''></img>
                        <SoundPlayer
                            key={"sound1"}
                            id={'dgdgdgd'}
                            name={'Example_2'}
                            genre={'8-bit music'}
                            length={'sound.length'}
                            url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                            loaded={true}
                        />
                        <img style={{ width: "60vh", height: "263.52px" }} src="https://img3.goodfon.ru/wallpaper/nbig/f/a5/gitara-rok-muzhchina-muzyka.jpg" alt=''></img>
                        <SoundPlayer
                            key={"sound3"}
                            id={'dgdgdgd'}
                            name={'Example_3'}
                            genre={'Rock'}
                            length={'sound.length'}
                            url={'https://s1.busic.net/files/mp3/pislya_doschu_-_hochesh_busic.net_128.mp3'}
                            loaded={true}
                        /> */}
                        </div>

                    </div>
                </div>
            </ul>
        </>

    );
}
export default Main;