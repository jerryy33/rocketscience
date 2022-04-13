/**
 * Creates a enum object of a array of given values
 * @param  {string[]} values the enum values to generete
 * @return {Object}  the freezed object containing all fields given by values
 */
function createEnum(values) {
    const enumObject = {};
    for (const val of values) {
        enumObject[val] = val;
    }
    return Object.freeze(enumObject);
}
export default createEnum;
