import { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfile";

class Social extends Component {
    render() {
  const {link,image}=this.props.social_profile  
        return (
            <div style={{display:'inline-block',width:200,margin:10}}>
            <img src={image} alt="img" style={{width:50,height:50}}></img>
              <a href={link}>{link}</a>
            </div>
        )
    }
}


class SocialProfile extends Component{




    render() {
        // return 
        // (
            <div>

                {
                    SOCIAL_PROFILES.map((SOCIAL_PROFILE)=><social key={SOCIAL_PROFILE.id} social_profile={SOCIAL_PROFILE} />)
                }
            </div>
        // )


        return (
            <div>
                <h2>Social Profile</h2>
                <div>

                <div>

{
    SOCIAL_PROFILES.map((SOCIAL_PROFILE)=><Social key={SOCIAL_PROFILE.id} social_profile={SOCIAL_PROFILE} />)
}
</div>
                </div>
            </div>


        )
    }
}


export default SocialProfile;