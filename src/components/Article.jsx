function Article({link, children, className, target}) {
    return (
        <a href={link} className={className} target={target}>{children}</a>
    )
}

export default Article