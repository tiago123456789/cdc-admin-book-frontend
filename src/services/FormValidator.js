import validator from "validator";

export default class FormValidator {

    constructor(validations) {
        this._validations = validations;
    }

    check(data) {
        let error = {};
        this._validations.forEach(validation => {

            const messages = validation.validate
                                        .filter(item => validator[item.method](data[validation.field]))
                                        .map(item => item.message);
            const existMessage = messages.length > 0;
            if (existMessage) error[validation.field] = messages;
        });

        return error;
    }
}