import { useState } from "react";
import { Itemlist } from "../../components/Itemlist/";
import "./style.css";

export const Home = () => {
  const [user, setUser] = useState("");
  const [repoData, setRepo] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleUser = async () => {
    const rawData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await rawData.json();

    if (newUser.name) {
      const { avatar_url, location, login, name ,public_repos } = newUser;
      setUserData({ avatar_url, name, login, location, public_repos });

      const rawRepo = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const tempRepo = await rawRepo.json();
      setRepo(tempRepo);

    }
  };

  return (
    <>
      <div className="container-home">
        <div>
          <div className="input-container">
            <input
              type="text"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@user"
            ></input>
            <button onClick={handleUser}></button>
          </div>

          {userData?.name ? (
            <div className="profile-container">
              <div>
                <img src={userData.avatar_url} alt="profile_picture" />
              </div>
              <div className="profile-details">
                <h3>{userData.name}</h3>
                <p className="nickname">@{userData.login}</p>
                <p className="bio">{userData.location}</p>
                <p className="contrep">Repositorios: {userData.public_repos}</p>
              </div>
            </div>
          ) : null}

          {!repoData ? null : (

            repoData.map((repository)=>(
                
                <Itemlist
                  key={repository.id}
                  nameRep={repository.name}
                  description={repository.description ? repository.description : "Sem descrição" }
                />
            ))


          )}
        </div>
      </div>
    </>
  );
};
