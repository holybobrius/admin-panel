import { useState } from 'react'

const LinksForm = props => {

    const [tempLink, setTempLink] = useState(
        props.link ? 
            {...props.link, router: !props.link.router ? false : true}
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
        props.handleLinkUpdate({ oldLink: props.link, link: updatedLink });
    }

    const handleInput = (type) => (event) => {
            setTempLink({
            ...tempLink,
            [type]: type === 'router' ? 
                event.target.checked : 
                event.target.value
        })
    }
    return(
        <div>
            <label>id: </label>
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