export default function Meme() {
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    
                />
                <button 
                    className="form--button"
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img src="http://i.imgflip.com/1bij.jpg"className="meme--image" />
                <h2 className="meme--text top">Top Text</h2>
                <h2 className="meme--text bottom">Bottom Text</h2>
            </div>
        </main>
    )
}