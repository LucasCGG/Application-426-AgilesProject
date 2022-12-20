import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }


    render(){
        return (
            <>  
                <div className='content'>
                    <hr />  
                    <Link to="/ProjectList">Projects</Link>
                    <hr />
                </div>
            </>
        )
    }
}

export default Home;