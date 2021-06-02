import { useBackgroundTheme } from './useBackgroundTheme'

const BackgroundThemeApp = () => {
    const { color, setColor, darkTheme } = useBackgroundTheme();    

    return (
        <main className='backgroundTheme'>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} className="input" placeholder='Enter hex color and press enter key'/>
            <section className={`${darkTheme ? 'text lightText': 'text'}`} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam at! Aspernatur suscipit saepe sapiente at vel eum reprehenderit. Doloremque illum suscipit esse ipsum optio quam quae explicabo cupiditate. Perspiciatis laudantium cum amet. Dolorum aspernatur nemo nulla nobis quos pariatur.
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam at! Aspernatur suscipit saepe sapiente at vel eum reprehenderit. Doloremque illum suscipit esse ipsum optio quam quae explicabo cupiditate. Perspiciatis laudantium cum amet. Dolorum aspernatur nemo nulla nobis quos pariatur.
            </section>
        </main>
    )
}

export default BackgroundThemeApp
