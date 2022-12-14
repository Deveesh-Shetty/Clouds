import Profile from "../Profile"

function Core() {
  return (
    <div>
      <div className="section divide-3">
        <Profile
          img="Profile/NageshHR.jpg"
          role="President"
          name="Dr. Nagesh H R"
          extras="HOD of Computer Science"
        />
        <Profile
          img="Profile/ShaileshShetty.JPG"
          role="Staff Co-ordinator"
          name="Shailesh Shetty S"
          socials="https://www.linkedin.com/in/shailesh-s-shetty-2b076b42/"
        />
        <Profile
          img="Profile/NishanthK.jpg"
          role="Vice President"
          name="Nishanth K"
          socials="https://www.linkedin.com/in/nishanth-k-309552191/"
        />
      </div>
      <br />
      <div className="section divide-4">
        <Profile img="Profile/Anurag.jpeg" role="Treasurer" name="Anurag N" />
        <Profile
          img="Profile/Bhupender.jpg"
          role="Joint Treasurer"
          name="Bhupender"
          socials="https://www.linkedin.com/in/bhupenderbeniwal/"
        />
        <Profile
          img="Profile/Hariprasad.jpg"
          name="Hariprasad Marla"
          role="Joint Treasurer"
        />
        <Profile
          img="Profile/Manoj.jpg"
          role="Secretary"
          name="Manoj Mahesh Naik"
        />
      </div>
    </div>
  )
}

export default Core
