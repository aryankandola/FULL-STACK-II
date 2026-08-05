import { useState, useEffect } from "react";

function useDrafts(){

const [drafts,setDrafts]=useState([]);


useEffect(()=>{

const saved=localStorage.getItem("drafts");

if(saved){
setDrafts(JSON.parse(saved));
}

},[]);



useEffect(()=>{

localStorage.setItem(
"drafts",
JSON.stringify(drafts)
);

},[drafts]);



function addDraft(draft){

setDrafts([
...drafts,
draft
]);

}



function deleteDraft(id){

setDrafts(
drafts.filter(
draft=>draft.id!==id
)
);

}



function updateDraft(updatedDraft){

setDrafts(

drafts.map(
draft=>

draft.id===updatedDraft.id
?
updatedDraft
:
draft

)

);

}



return{

drafts,
addDraft,
deleteDraft,
updateDraft

};

}


export default useDrafts;