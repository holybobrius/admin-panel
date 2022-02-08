import { useState } from "react/cjs/react.development"

const LinksForm = ({ link, handleLinkSubmit }) => {

    const [tempLink, setTempLink] = useState(
        link ? 
            {...link, router: !link.router ? false : true}
        : 
            {
                id: '',
                text: '',
                href: '',
                router: false
            }
    )

    const handleSubmit = event => {
        event.preventDefault();
        const updatedLink = {
            id: tempLink.id,
            text: tempLink.text,
            href: tempLink.href,
            router: tempLink.router
        }
        console.log('link submit', updatedLink)
        handleLinkSubmit(updatedLink);
    }

    const handleInput = (type) => (event) => {
        if(type === 'router') {
            setTempLink({
                ...tempLink,
                router: event.target.checked
            })
        } else {
            setTempLink({
                ...tempLink,
                [type]: event.target.value
            })
        }
    }
    
    return(
        <div>
            <label>id:</label>
            <input value={tempLink.id} onChange={handleInput('id')} />
            <label>text:</label>
            <input value={tempLink.text} onChange={handleInput('text')} />
            <label>href:</label>
            <input value={tempLink.href} onChange={handleInput('href')} />
            <input type='checkbox' checked={tempLink.router} onChange={handleInput('router')}/>
            <input onClick={handleSubmit} type='submit' />
        </div>
    )
}

export default LinksForm