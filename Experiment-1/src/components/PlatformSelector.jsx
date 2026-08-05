import platforms from "../data/platforms";


function PlatformSelector({
selectedPlatforms,
setSelectedPlatforms
}){


function handleChange(platform){


if(selectedPlatforms.includes(platform)){


setSelectedPlatforms(

selectedPlatforms.filter(
item=>item!==platform
)

);


}

else{


setSelectedPlatforms([

...selectedPlatforms,

platform

]);


}


}



return(

<div>


<h3>Select Platforms</h3>


<div className="platforms">


{

Object.keys(platforms).map(platform=>(


<label key={platform}>


<input

type="checkbox"

checked={
selectedPlatforms.includes(platform)
}

onChange={()=>handleChange(platform)}

/>


{platform}


</label>


))

}


</div>


</div>

);


}


export default PlatformSelector;