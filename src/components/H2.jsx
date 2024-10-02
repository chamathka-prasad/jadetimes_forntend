function H2({ heading, children, className }) {
    return (
        <h2 className={`mx-4 border-b-4 border-b-red-600 pb-1 font-semibold text-lg capitalize ${className}`}>{heading}<span className="font-normal">{children}</span></h2>
    )
}

export default H2