import DraftCard from "./DraftCard";

function DraftList({
  drafts,
  deleteDraft,
  setEditingDraft
}) {

  return (

    <div className="drafts">

      <h2>Saved Drafts</h2>

      {
        drafts.length === 0

          ?

          <p>No drafts available</p>

          :

          drafts.map(draft => (

            <DraftCard

              key={draft.id}

              draft={draft}

              deleteDraft={deleteDraft}

              setEditingDraft={setEditingDraft}

            />

          ))
      }

    </div>

  );

}

export default DraftList;