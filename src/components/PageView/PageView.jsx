import './PageView.css'
import LinksForm from '../LinksForm/LinksForm'

const PageView = props => {
    return (
        <div className="pageView">
            <form>
                <label>path: </label>
                <input className='textInput' value={props.page.path} />
                <label>title: </label>
                <input className='textInput' value={props.page.title} />
                <label>text: </label>
                <textarea value={props.page.text} />
            
                {props.page.links && props.page.links.map(link => 
                       <LinksForm link={link} /> 
                )}
                <LinksForm /> 
                <input type='submit' />
            </form>
        </div>
    )
}

export default PageView