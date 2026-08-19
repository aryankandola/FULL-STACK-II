function CharacterCounter({
content,
selectedPlatforms,
platforms
}){


return(

<div className="counter">


<h3>Character Status</h3>


{

selectedPlatforms.map(platform=>{


let count=content.length;

let limit=platforms[platform].limit;



return(


<p

key={platform}

className={
count>limit
?
"error"
:
"valid"
}

>


{platform}

:

{count}/{limit}


{

count>limit
?
" ❌ Limit exceeded"
:
" ✅"

}


</p>


)


})


}


</div>

);


}


export default CharacterCounter;