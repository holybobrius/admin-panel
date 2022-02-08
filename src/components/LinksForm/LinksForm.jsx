import { useState } from "react/cjs/react.development"

const LinksForm = ({ link, handleLinkSubmit }) => {

    const [id, setId] = useState(link ? link.id : '');
    const [text, setText] = useState(link ? link.text : '')
    const [href, setHref] = useState(link ? link.href : '')
    const [router, setRouter] = useState(link ? link.router : false)

    const handleSubmit = event => {
        event.preventDefault();
        const updatedLink = {
            id,
            text,
            href,
            router
        }
        console.log('link submit', updatedLink)
        handleLinkSubmit(updatedLink);
    }
    
    return(
        <div>
            <label>id:</label>
            <input value={id} onChange={event => setId(event.target.value)} />
            <label>text:</label>
            <input value={text} onChange={event => setText(event.target.value)} />
            <label>href:</label>
            <input value={href} onChange={event => setHref(event.target.value)} />
            <input type='checkbox' checked={router} onChange={event => setRouter(event.target.checked)}/>
            <input onClick={handleSubmit} type='submit' />
        </div>
    )
}

export default LinksForm