

let metadata = new WeakMap();


export default class Metadata{
    static get(target, key, property=null){

    }
    static set(target, key, property=null){

    }
}


function getOwnMetadata(){
    return
}

function hasMetadataMap(target, key){
    let metadataMap = getMetadataMap(target, key, false);
    return isUndedined(metadataMap);
}

function getMetadataMap(target, key, create=false) {
    let targetMetadata = metadata.get(target);
    if(isUndedined(targetMetadata)){
        if(!create){
            return undefined;
        }
        targetMetadata = new Map();
        metadata.set(target, targetMetadata);
    }
    let metadataMap = targetMetadata.get(key);
    if(isUndedined(metadataMap)){
        if(!create){
            return undefined;
        }
        metadataMap = new Map();
        targetMetadata.set(key, metadataMap);
    }
    return metadataMap;
}
