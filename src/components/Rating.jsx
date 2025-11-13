function Rating({value})
{
    let stars=[]

    for(let i=0;i<value;i++)
    {
      stars.push("⭐")  
    }

    return(
        <div>
          <p>{stars}</p>
        </div>
    )
}

export default Rating

//window+.