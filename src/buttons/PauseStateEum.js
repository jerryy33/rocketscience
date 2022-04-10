/**
 * [createEnum description]
 * @param  {[type]} values               [description]
 * @return {[type]}        [description]
 */
function createEnum(values) {
    const enumObject = {};
    for (const val of values) {
        enumObject[val] = val;
    }
    return Object.freeze(enumObject);
}
export default createEnum;
