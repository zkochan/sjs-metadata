import {isObject, isUndefined, isNull, isPropertyKey} from './lang';


let metadata = new WeakMap();

export default class {
    static find(target, key, property) {
        let metadataMap = getMetadataMap(target, key);
        if(isUndefined(metadataMap)){
            return undefined;
        }
        return metadataMap.get(property);
    }
    static has(target, key, property=null) {
        let metadataMap = getMetadataMap(target, key);
        if(isUndefined(metadataMap)){
            return false;
        }
        if(isNull(property)){
            return true;
        }
        return metadataMap.has(property);
    }
    static get(target, key, property=null){
        let metadataMap = getMetadataMap(target, key, true);
        if(isNull(property)){
            return metadataMap;
        }
        return metadataMap.get(property);
    }
    static set(target, key, property, value) {
        let metadataMap = getMetadataMap(target, key, true);
        metadataMap.set(property, value);
    }
}


function hasMetadataMap(target, key) {
    let metadataMap = getMetadataMap(target, key);
    return !isUndefined(metadataMap);
}

function getMetadataMap(target, key, create = false) {
    if (!isObject(target)){
        throw new TypeError('Expected object');
    }
    if (!isPropertyKey(key)){
        throw new TypeError('Expected key');
    }
    let targetMetadata = metadata.get(target);
    if (isUndefined(targetMetadata)) {
        if (!create) {
            return undefined;
        }
        targetMetadata = new Map();
        metadata.set(target, targetMetadata);
    }
    let metadataMap = targetMetadata.get(key);
    if (isUndefined(metadataMap)) {
        if (!create) {
            return undefined;
        }
        metadataMap = new Map();
        targetMetadata.set(key, metadataMap);
    }
    return metadataMap;
}

function setMetadataMap(target, key, property, value){
    let metadataMap = getMetadataMap(target, key, true);
    metadataMap.set(property, value);
}
