import { useState } from "react";
import { getContent, saveContent } from "./contentService";


function Admin() {

  const [content, setContent] = useState(getContent());

  const [editMode, setEditMode] = useState(false);


  const handleUpdate = () => {

    saveContent(content);

    setEditMode(false);

  };


  return (

    <div>

      <h1>
        Admin Panel
      </h1>


      <p>
        Admin can create, edit, update and delete content.
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


export default Admin;