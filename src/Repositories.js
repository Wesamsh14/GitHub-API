import React from 'react'

const Repositories=(props)=> {
    const { userRepositories } = props;
    const posts = userRepositories && userRepositories.map((val, index)=>{
        return (
            <div className='repositories'>
                <div key={index}>
                    <p>
                        <a href={val.html_url} ><b> {val.name} </b></a> :
                         {val.description}
                    </p>
                    
                </div>
            </div>
          );
    })
    return posts
  
}

export default Repositories
