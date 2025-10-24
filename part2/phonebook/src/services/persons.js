import axios from 'axios';

const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(BASE_URL);
    return request.then((res) => res.data);
};

const create = (newPerson) => {
    const request = axios.post(BASE_URL, newPerson)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${BASE_URL}/${id}`);
    return request.then((res) => res.status);
};

export default { getAll, create, remove };
