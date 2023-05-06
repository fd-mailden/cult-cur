export function addToObject(field, fieldValue, objData) {
  let newObjData = { ...objData };
  newObjData[field] = fieldValue;
  return newObjData;
}
