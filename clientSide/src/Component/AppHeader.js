import React from 'react';

class AppHeader extends React.Component{
    
    render(){
        
        return(
            <>
                <div style={{padding:'30px 20px 0px 20px',backgroundColor:'rgb(244, 234, 234)'}}>
                    <span style={{position:'relative',fontSize:'40px',top:'-10px',left:'30px'}}>Movie Review Application</span>
                </div>
            </>
            
        )
    }
}  
export default AppHeader; 