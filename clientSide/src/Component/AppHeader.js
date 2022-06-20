import React from 'react';

class AppHeader extends React.Component{
    
    render(){
        
        return(
            <>
                <div style={{padding:'20px 20px 0px 20px',backgroundColor:'rgb(244, 234, 234)', marginLeft :'25px',marginRight:'25px'}}>
                    <span style={{marginLeft:'75px' ,position:'relative',fontSize:'40px',top:'-10px',left:'30px',fontStyle:'oblique'}}>ShopBridge</span>
                </div>
            </>
            
        )
    }
}  
export default AppHeader; 