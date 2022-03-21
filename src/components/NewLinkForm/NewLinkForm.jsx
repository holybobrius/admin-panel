import { useEffect, useState } from "react"
import './NewLinkForm.css'

const NewLinksForm = props => {

    const [tempLink, setTempLink] = useState({
        id: '',
        text: '',
        href: '',
        router: false
    })

    useEffect(() => {
        setTempLink(
            props.link ? 
            {...props.link, router: !props.link.router}
        : 
            {
                id: '',
                text: '',
                href: '',
                router: false
            }
        )
    }, [props.link])

    const handleSubmit = event => {
        event.preventDefault();
        const updatedLink = {
            id: tempLink.id,
            text: tempLink.text,
            href: tempLink.href,
            router: tempLink.router
        }
        if(tempLink.id && tempLink.text && tempLink.href !== '') {
            props.handleLinkPost(updatedLink);
            setTempLink({
                id: '',
                text: '',
                href: '',
                router: false
            })
        } 
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
        <div className="linkForm">
            <label>id: </label>
            <input value={tempLink.id} onChange={handleInput('id')} onBlur={handleSubmit} placeholder="id"/>
            <label>text:</label>
            <input value={tempLink.text} onChange={handleInput('text')} onBlur={handleSubmit} placeholder="text"/>
            <label>href:</label>
            <input value={tempLink.href} onChange={handleInput('href')} onBlur={handleSubmit} placeholder="href"/>
            <input type='checkbox' checked={tempLink.router} onChange={handleInput('router')} onBlur={handleSubmit} />
        </div>
    )
}

export default NewLinksForm