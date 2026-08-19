function ValidationMessage({message}){


return(

<p

className={
message.includes("❌")
?
"error"
:
"valid"
}

>

{message}

</p>


);


}


export default ValidationMessage;