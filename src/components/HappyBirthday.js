import age19vs20 from '../img/1920.jpg'

export const HappyBirthday = () => {
    return (
        <section className="birthday">
            <div className="birthday-viewport"><p>С Днём Рождения!</p></div>
            <div className="birthday-info">
                <h2 className="birthday-info-title">По указу Острых козырьков, я, Козырёк Бутылкин, торжественно поздравляю вас с Днём Рождения!</h2>
                <img className="birthday-info-img" src={age19vs20} alt='age' />
                <div className="birthday-info-comparison">
                    <p className="birthday-info-comparison-txt">Двадцать лет - не хухры-мухры!</p>
                    <p className="birthday-info-comparison-txt">Двадцать лет, это:
                        <ul className="birthday-info-comparison-list">
                            <li>240 месяцев</li>
                            <li>1042 недели</li>
                            <li>7300 дней</li>
                            <li>175200 часов</li>
                        </ul>
                    </p>
                </div>
                <div className='birthday-info-item'>
                    <p className='birthday-info-item-txt'>По сравнению со вчерашним днём, ты сегодня стала куда взрослее, на целый год! Даже я тебя догнать не могу со своими десяти-метровыми шагами!<br/><br/>Но надо признать, не смотря на двадцатилетие, ты осталась такой&nbsp;же малявкой 174см&nbsp;😎</p>
                </div>
                <div className='birthday-info-item'>
                    <p className='birthday-info-item-txt text-center'>❤️️ С Днём Рождения!!! ❤️️</p>
                </div>
            </div>
        </section>
    )
}