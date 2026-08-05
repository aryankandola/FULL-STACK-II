import Header from "./components/Header";
import PostComposer from "./components/PostComposer";
import DraftList from "./components/DraftList";
import "./styles/App.css";
import useDrafts from "./hooks/useDrafts";
import { useState } from "react";

function App() {

  const {
    drafts,
    addDraft,
    deleteDraft,
    updateDraft
  } = useDrafts();

  const [editingDraft, setEditingDraft] = useState(null);

  return (
    <div className="app">

      <Header />

      <PostComposer
        addDraft={addDraft}
        updateDraft={updateDraft}
        editingDraft={editingDraft}
        setEditingDraft={setEditingDraft}
      />

      <DraftList
        drafts={drafts}
        deleteDraft={deleteDraft}
        setEditingDraft={setEditingDraft}
      />

    </div>
  );
}

export default App;