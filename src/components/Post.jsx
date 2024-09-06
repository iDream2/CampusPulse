import "./Post.css"

export default function Post(props){
    return(
        <div className= "posts">

            <br />
            <br />
            
            
            <div style={{ display: 'flex', alignItems: 'center' }}  >
                <label htmlFor="chapterName">CHAPTER NAME : </label>
                <div id="chapterName">
                    {props.chapterName}
                </div>
                <br />
            </div>
            

            <div style={{ display: 'flex', alignItems: 'center' }} >
                <label htmlFor="typeofEvent">TYPE OF EVENT :  </label>
                
                <div id="typeofEvent" >
                    {props.typeofEvent}
                </div>
            </div>    
            <br />
            
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <label htmlFor="titleOfEvent"> EVENT NAME : </label>
                <div className="titleOfEvent" >
                    {props.titleOfEvent}
                </div>
            </div>
            <br />
            
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <label htmlFor = "descriptionOfEvent">EVENT DESCRIPTION : </label>
                <div className= "descriptionOfEvent" >
                    {props.descriptionOfEvent}
                </div>
            </div>
            <br />
            
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <label htmlFor="dateofEvent">EVENT DATE : </label>
                <div className= "dateofEvent">
                    {props.dateofEvent}
                </div>
            </div>
            <br />

            <div style={{ display: 'flex', alignItems: 'center' }} >
                <label htmlFor="registrationLink">REGISTRATION LINK </label> 
                    <div className="registrationLink" >
                        <a href={props.registrationLink} target="_blank" rel="noopener noreferrer"  style={{ color: 'blue', textDecoration: 'underline' }} > {props.registrationLink} </a>  
                    </div>
            </div>
        </div>
    )
}



