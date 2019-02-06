import Api from '../Api/api';

class cnpjService {

    static validateCNPJ(number) {
        return Api.get(`quote/${number}`);
    }
}

export default cnpjService;


