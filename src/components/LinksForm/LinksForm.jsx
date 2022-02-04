const LinksForm = ({ link }) => {
    return(
        <form>
            <div>
                <label>id:</label>
                <input value={link ? link.id : ''} />
                <label>text:</label>
                <input value={link ? link.text : ''} />
                <label>href:</label>
                <input value={link ? link.href : ''} />
                <input type='checkbox' checked={link ? link.router : false}/>
                <input type='submit' />
            </div>
        </form>
    )
}

export default LinksForm