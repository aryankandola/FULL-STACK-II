function DraftCard({
  draft,
  deleteDraft,
  setEditingDraft
}) {

  return (

    <div className="draft-card">

      <h3>Post Draft</h3>

      <p>{draft.content}</p>

      <p>

        Platforms:

        {draft.platforms.join(", ")}

      </p>

      <p>{draft.date}</p>

      <p>

        Status:

        <span
          className={
            draft.status === "Valid"
              ? "valid"
              : "error"
          }
        >

          {" "}

          {draft.status}

        </span>

      </p>

      <button
        onClick={() => setEditingDraft(draft)}
      >

        Edit

      </button>

      <button
        onClick={() => deleteDraft(draft.id)}
      >

        Delete

      </button>

    </div>

  );

}

export default DraftCard;