import * as _ from 'lodash';
export default class JSQM {
    private _json: object;
    constructor(json: object) {
        this._json = json;
    }
    getJSON = () => {
        console.log(`Hi: ${this._json}`)
    }
    hasNumber = () => {
        console.log(this._json);
        return !_.isEmpty(_.pickBy(this._json, _.isNumber));
    }
} 