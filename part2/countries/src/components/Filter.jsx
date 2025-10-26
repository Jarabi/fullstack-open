const Filter = ({ filter, setFilter }) => {
    return <div>
        <label htmlFor='search'>find countries</label>{' '}
        <input
            type='text'
            id='search'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        />
    </div>;
};

export default Filter;
