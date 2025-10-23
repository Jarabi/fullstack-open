const Filter = ({value, setValue}) => {
    return (
        <>
            <label htmlFor="searchUser">filter shown with:</label>{' '}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default Filter