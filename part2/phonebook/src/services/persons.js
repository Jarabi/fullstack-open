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

const update = (id, updatedRecord) => {
    const request = axios.put(`${BASE_URL}/${id}`, updatedRecord);
    return request.then((res) => res.data);
};

export default { getAll, create, remove, update };
