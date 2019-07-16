import * as _ from 'lodash';
export default class JSQM {
    private _json: any;
    constructor(json: any) {
        this._json = json;
        // Todo check if json or not
        this.checkIfJSON();
    }

    checkIfJSON = () => {
        try {
            var o = JSON.parse(this._json);
            if (o && typeof o === "object") {
                this._json = o;
            }
        }
        catch (e) {
            this.throwError('Error: Invalid JSON format');
        }
    }

    throwError = (msg: string) => {
        return msg;
    };

    getJSON = () => {
        console.log(`Hi: ${this._json}`)
    }
    
    hasNumber = () => {
        return !_.isEmpty(_.pickBy(this._json, _.isNumber));
    }
} 