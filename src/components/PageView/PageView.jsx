import './PageView.css'

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
            </form>
            <form>
                {props.page.links ? props.page.links.map(link => 
                    <div>
                        <label>id:</label>
                        <input value={link.id} />
                        <label>text:</label>
                        <input value={link.text} />
                        <label>href:</label>
                        <input value={link.href} />
                        <input type='checkbox' />
                    </div>    
                ): ''}
                <div>
                        <label>id:</label>
                        <input />
                        <label>text:</label>
                        <input />
                        <label>href:</label>
                        <input />
                        <input type='checkbox' />
                    </div>   
            </form>
        </div>
    )
}

export default PageView