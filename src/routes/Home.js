import React from "react";
import Subheader from "../components/Subheader/Subheader";
import Profile from "../components/Profile/Profile";
import { getUser } from "../functions/functions";

export default function Home() {
    
    const [profile, setProfile] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const user = await getUser();
            setProfile(user);
        }
        fetchData();
    }, [])

    console.log(profile);

    return (
      <main>
        <Subheader title="Home" />
        <Profile 
        avatar={profile.avatar_url} 
        name={profile.name} 
        bio={profile.bio} 
        company={profile.company} />
      </main>
    );
  }