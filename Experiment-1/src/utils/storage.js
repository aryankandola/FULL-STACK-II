// Save drafts to Local Storage

export function saveDrafts(drafts){

    localStorage.setItem(
        "drafts",
        JSON.stringify(drafts)
    );

}


// Get drafts from Local Storage

export function getDrafts(){

    const drafts = localStorage.getItem("drafts");


    return drafts
        ? JSON.parse(drafts)
        : [];

}


// Delete all drafts from Local Storage

export function clearDrafts(){

    localStorage.removeItem("drafts");

}