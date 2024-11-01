
function ShowCard({exam}) {
  return (
    <div className="p-4 flex gap-3 w-[10rem] h-[4rem] border rounded-lg shadow-lg ">
      <img className="w-[30%]" src={exam.image} alt="image" />
      <h1>{exam.name}</h1>
    </div>
  );
}
export default ShowCard;