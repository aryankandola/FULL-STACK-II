import { useState } from "react";
import { getContent, saveContent } from "./contentService";


function Editor() {

  const [content, setContent] = useState(getContent());

  const [editMode, setEditMode] = useState(false);


  const handleUpdate = () => {

    saveContent(content);

    setEditMode(false);

  };


  return (

    <div>

      <h1>
        Editor Panel
      </h1>


      <p>
        Editor can modify content.
      </p>


      <hr />


      {
        editMode ? (

          <div>

            <input
              type="text"
              value={content.title}
              onChange={(e)=>
                setContent({
                  ...content,
                  title:e.target.value
                })
              }
            />


            <br /><br />


            <textarea
              value={content.description}
              onChange={(e)=>
                setContent({
                  ...content,
                  description:e.target.value
                })
              }
            />


            <br /><br />


            <button onClick={handleUpdate}>
              Update
            </button>


          </div>


        ) : (

          <div>

            <h2>
              {content.title}
            </h2>


            <p>
              {content.description}
            </p>


            <button onClick={()=>setEditMode(true)}>
              Edit
            </button>


          </div>

        )

      }


    </div>

  );

}


export default Editor;