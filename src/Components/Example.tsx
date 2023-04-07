import React from 'react';
import "./Example.css"

const HomePage = () => {
    return (
        <div className="music-generator">
            <div className="generator-header">
                <h1 className="title">Генератор музыки</h1>
                <p className="subtitle">Создавайте свои треки в один клик</p>
            </div>
            <div className="generator-body">
                {/* здесь можно добавить элементы для выбора параметров генерации музыки */}
            </div>
            <div className="generator-footer">
                <button className="generate-button">Создать трек</button>
            </div>
        </div>
    );
}
export default HomePage;
