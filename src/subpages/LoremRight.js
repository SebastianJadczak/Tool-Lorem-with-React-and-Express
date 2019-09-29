import React from 'react';
import news from "../img/news.png"

const articles = [
    { id: 1, title: "First Article", img: news, text: "Przykładowy text artykułu. Tu można dodawać nowinki, ciekawostki duperele albo coś mądrego. Lecz pewnie to nie ja dodam :D " },
    { id: 2, title: "Second Article", img: news, text: "Przykładowy text artykułu. Tu można dodawać nowinki, ciekawostki duperele albo coś mądrego. Lecz pewnie to nie ja dodam :D " },
    { id: 3, title: "Three Article", img: news, text: "Przykładowy text artykułu. Tu można dodawać nowinki, ciekawostki duperele albo coś mądrego. Lecz pewnie to nie ja dodam :D " }

]

const LoremRight = () => {

    const art = articles.map(item => (
        <article className="artLoremRight" key={item.id}>
            <h3 className="titleArticle">{item.title}</h3>
            <div className="article">
                <div className="imgNews">
                    <img src={item.img} alt="news" />
                </div>
                <p className="textArticle">{item.text}</p>
            </div>
            <div className="buttonMore">
                <button className="moreArticle">Więcej</button>
            </div>
        </article>
    ))
    return (
        <>
            {art}
        </>
    )
}
export default LoremRight;