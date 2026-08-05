import { useState, useEffect } from "react";

import PlatformSelector from "./PlatformSelector";
import CharacterCounter from "./CharacterCounter";
import ValidationMessage from "./ValidationMessage";
import MediaUploader from "./MediaUploader";

import platforms from "../data/platforms";
import validatePost from "../utils/validation";

function PostComposer({
  addDraft,
  updateDraft,
  editingDraft,
  setEditingDraft
}) {

  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {

    if (editingDraft) {

      setContent(editingDraft.content);
      setSelectedPlatforms(editingDraft.platforms);

    }

  }, [editingDraft]);



  function handleChange(e) {

    let value = e.target.value;

    setContent(value);

    setMessages(
      validatePost(
        value,
        selectedPlatforms,
        platforms
      )
    );

  }



  function saveOrUpdate() {

    let validation = validatePost(
      content,
      selectedPlatforms,
      platforms
    );

    let invalid = validation.some(
      msg => msg.includes("❌")
    );

    const draft = {

      id: editingDraft ? editingDraft.id : Date.now(),

      content,

      platforms: selectedPlatforms,

      status: invalid ? "Invalid" : "Valid",

      date: new Date().toLocaleString()

    };


    if (editingDraft) {

      updateDraft(draft);

      setSaveMessage("✅ Draft Updated");

      setEditingDraft(null);

    } else {

      addDraft(draft);

      setSaveMessage("✅ Draft Saved");

    }

    setContent("");
    setSelectedPlatforms([]);
  }

  return (

    <div className="composer">

      <PlatformSelector
        selectedPlatforms={selectedPlatforms}
        setSelectedPlatforms={setSelectedPlatforms}
      />

      <textarea
        placeholder="Write your post..."
        value={content}
        onChange={handleChange}
      />

      <CharacterCounter
        content={content}
        selectedPlatforms={selectedPlatforms}
        platforms={platforms}
      />

      <MediaUploader />

      <div className="validation">

        {
          messages.map((message, index) => (

            <ValidationMessage
              key={index}
              message={message}
            />

          ))
        }

      </div>

      <button onClick={saveOrUpdate}>

        {editingDraft ? "Update Draft" : "Save Draft"}

      </button>

      <p>{saveMessage}</p>

    </div>

  );

}

export default PostComposer;