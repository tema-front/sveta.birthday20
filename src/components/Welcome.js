import { useState } from "react"
import { CircularProgress } from "@material-ui/core";
import SvetaImg from '../img/sveta.jpg'

export const Welcome = ({ handleID }) => {
    const [ready, setReady] = useState(false);
    const [surname, setSurname] = useState('');
    const [showPhoto, setShowPhoto] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (surname.toLowerCase().includes('айда')) setReady(true);
        else return
        setTimeout(() => {
            setShowPhoto(true);
        }, 5000)
    }
    
    return (
        <>
        <section className="welcome">
            <h2 className="welcome-title">Welcome!</h2>
            <p className="welcome-txt">Введите своё имя и фамилию, чтобы мы идентифицировали&nbsp;Вас</p>
                <form onSubmit={e => handleSubmit(e)} className="welcome-form">
                    <input type='text' placeholder="Имя" className="welcome-form-item" />
                    <input type='text' value={surname} onChange={e => setSurname(e.target.value)} placeholder="Фамилия" className="welcome-form-item" />
                    
                    {!ready 
                        ? <input type='submit' value='Ready' className="welcome-submit" />
                        : (!showPhoto && <div className="circular-progress-wrp"><CircularProgress color="secondary" size={65} className="circular-progress" /></div>)
                    }
                </form>
                {showPhoto && (
                    <div className="welcome-sveta">
                        <img src={SvetaImg} alt='id' className="welcome-sveta-img" height={255} />
                        <button onClick={handleID} className="welcome-sveta-btn">Да, это я!<br/>И мне сегодня ДВАДЦАТЬ!</button>
                    </div>
                )}
        </section>
        </>
    )
}