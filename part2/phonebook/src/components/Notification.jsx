const Notification = ({type, text}) => {
    return <p className={`notification ${type}`}>{text}</p>
}

export default Notification