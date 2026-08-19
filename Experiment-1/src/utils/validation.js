function validatePost(
content,
selectedPlatforms,
data
){


let messages=[];


selectedPlatforms.forEach(platform=>{


let limit=data[platform].limit;



if(content.length>limit){


messages.push(

`${platform}: ❌ Limit exceeded`

);


}

else{


messages.push(

`${platform}: ✅ Valid`

);


}


});


return messages;


}


export default validatePost;