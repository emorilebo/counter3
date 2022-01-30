import profiles from "./fakeData";

console.log(profiles);

export default function Card({ image, name, designation, description }) {
  return (
    <div style={{}}>
      <h1>Staff ID</h1>
      <div style={{ display: "flex" }}>
        <img src={image} height={100} />
        <div style={{ marginLeft: "10px" }}>
          <h1>{name}</h1>
          <h4>{designation}</h4>
        </div>
      </div>
      <p style={{ fontSize: "20px" }}>{description}</p>
    </div>
  );
}
