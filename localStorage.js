// var values = getValues();
function getValues(path) {
    var retrievedObject = localStorage.getItem(path);
    if (retrievedObject == null || retrievedObject == undefined) {
        return [];
    }
    return JSON.parse(retrievedObject);
}
function updateValues(path) {
    localStorage.setItem(path, JSON.stringify(values));
}
function addValue(path,value) {
    if (values.indexOf(value) != -1) {
        return;
    }
    values.push(value);
    updateValues(path)
}
