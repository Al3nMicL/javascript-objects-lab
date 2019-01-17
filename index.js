// defines a `recipes` object
let recipes = new Object;

// returns an object with the orignal key value pairs and the new key value pair
let updateObjectWithKeyAndValue = (obj, key, val) => {
	return Object.assign({}, obj, { [key]: val});
};

// updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
let destructivelyUpdateObjectWithKeyAndValue = (obj, key, val) => {
	obj[key] = val;
	return obj;
};

// deletes `key` from a clone of object and returns the new object (it is non-destructive)
let deleteFromObjectByKey = (obj, key) => {
	let tempObj = Object.assign({}, obj);
	delete tempObj[key];
	return tempObj;
};

// returns object without the delete key/value pair
let destructivelyDeleteFromObjectByKey = (obj, key) => {
	delete obj[key];
	return obj;
};