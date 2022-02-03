import './NewPageView.css'

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
            </form>
            <form>
                {props.page && props.page.links ? props.page.links.map(link => 
                    <div>
                        <label>id:</label>
                        <input />
                        <label>text:</label>
                        <input />
                        <label>href:</label>
                        <input />
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