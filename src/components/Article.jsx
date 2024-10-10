import { Link } from "react-router-dom"

function Article({link, children, className, target}) {
    return (
        <Link to={link} className={className} target={target}>{children}</Link>
    )
}

export default Article