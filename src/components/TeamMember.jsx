// eslint-disable-next-line react/prop-types
export const TeamMember = ({ photo, name, position }) => {
  return (
    <div className="team-block">
      <img src={photo} alt={name} className="image" />
      <div className="hidden-text">
        <p className="name">{name}</p>
        <p className="post">{position}</p>
      </div>
    </div>
  );
};
