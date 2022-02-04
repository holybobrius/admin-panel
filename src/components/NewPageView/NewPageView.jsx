import './NewPageView.css'
import LinksForm from '../LinksForm/LinksForm'

const PageView = props => {
    return (
        <div className="pageView">
            <form>
                <label>path: </label>
                <input className='textInput' />
                <label>title: </label>
                <input className='textInput' />
                <label>text: </label>
                <textarea />
                <LinksForm />
                <input type='submit' />
            </form>
        </div>
    )
}

export default PageView