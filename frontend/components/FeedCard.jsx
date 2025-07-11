export const FeedCard = ({ user }) => {
  if (!user) {
    return <div>No feed item</div>;
  }
  const { firstName, about, lastName, photoUrl, age, gender } = user;
  console.log(user);

  return (
    <div className="card bg-base-300 w-87 shadow-sm">
      <figure className="w-full">
        <img className="object-fit w-full" src={photoUrl} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title  justify-center">{firstName + " " + lastName} </h2>
        {age && gender && <p className="text-center"> {gender + " " + age}</p>}
        <p className="text-center p-2">{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-accent ">Interested</button>
          <button className="btn btn-primary">Ignored</button>
        </div>
      </div>
    </div>
  );
};
