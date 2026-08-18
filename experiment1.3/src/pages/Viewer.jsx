import { useState } from "react";
import { getContent } from "./contentService";


function Viewer() {

  const [content, setContent] = useState(getContent());


  return (

    <div>

      <h1>
        Viewer Panel
      </h1>


      <p>
        Viewer can only see content.
      </p>


      <hr />


      <h2>
        {content.title}
      </h2>


      <p>
        {content.description}
      </p>


    </div>

  );

}


export default Viewer;