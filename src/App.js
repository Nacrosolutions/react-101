import React,{Component} from 'react';
import profile from './assets/assets/profile.png'
import Projects from './Projects';
import SocialProfile from './SocialProfile';



class App extends Component{
state={displayBio:false};
    // constructor(){
    //     super();
    //     this.state={
    //         displayBio:false
    //     };
    //     this.readMore=this.readMore.bind(this);
    // }


    readMore=()=> {
        
        this.setState({
            displayBio:!this.state.displayBio
        })
    }



    render() {
        let bio=this.state.displayBio ? (<div >
        <p> I live in India and I code everyday</p>
        <p> My faviorite language is javascript and node js</p>
        <p> Beside coding I like music and ramen</p>
    
    </div>) : null;

  
        return( <div>
<img src={profile} alt="profile" className='profile'></img>
 <h1>Hello !!!</h1>
 <p>This is the introduction of me . ia m thr software engineer</p>
 <p> I am aleways loking to fowrard to working in the new project</p>


{/* <button onClick={this.setState({displayBio:true})}>Toggle</button>
{bio} */}
<div>

    <button onClick={this.readMore}>
Read More
    </button>
{bio}

</div>

<hr/>
<Projects/>
<hr/>
<SocialProfile/>

        </div>)
    }

}


export default App;

