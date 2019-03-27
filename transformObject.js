function transformObject(obj) {
    let objectArray = [];

    for (let key in obj) {
        objectArray[obj[key]] = key;
    }

    return Object.assign({}, objectArray);
}
transformObject(obj)