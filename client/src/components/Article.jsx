import '../styles/Article.css'
import { useState } from 'react'

export const Article = () => {
    const [showDescription, setShowDescription] = useState(false)

    const handleClick = _ => {
        setShowDescription(!showDescription)
    }

    return (
        <>
            <div className="article">
                <div className="article-tab" onClick={handleClick}>
                    {'>'}
                </div>
                <div className="article-left">
                    <h4>"Jugger Is The ONLY Sport For The End Of The World"</h4>
                    <p className="article-author">Author</p>
                </div>
                <div className="article-right">
                    {/* <img className="article-img" src="https://sm.ign.com/ign_za/video/j/jugger-is-/jugger-is-the-only-sport-for-the-end-of-the-world_dhb9.jpg"/> */}
                    <img className="article-img" src="http://assets.inc.com/_/images/uploaded_files/image/970x450/GettyImages-1607307473_538817.jpg"/>
                    <div className="article-links">
                        <a>link</a>
                        <a>save</a>
                    </div>
                </div>
            </div>
            {showDescription ? 
            <p className="article-description">
                article description goes here
            </p>
            :
            null
            }
        </>
    )
}