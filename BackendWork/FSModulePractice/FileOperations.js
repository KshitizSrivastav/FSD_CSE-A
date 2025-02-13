const promise=require('fs').promises;
async function dataCopy(){
    const data=await promise.readFile('studentData.json');
    const fsp=await promise.writeFile('updatedStudentData.json',data);
    const data1=await promise.readFile('updatedStudentData.json');
    console.log(data1.toString());
}
//dataCopy();
const obj={
    dataCopy:dataCopy
}
module.exports=obj;
