import "./App.css";

function App() {
  const myAge = 20;
  return (
    <div className="bg-white">
      <h1>Hello {myAge}</h1>

      const getRandomProfilePicture = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    console.log(data.results);
    return data.results[0].picture.large;
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {profiles.map((profile) => (
        <Card
          image={`https://robohash.org/${Math.random()}.png`}
          name={profile.name}
          designation={profile.designation}
          description={profile.description}
        />
      ))}
    </div>
  );
}

export default App;
