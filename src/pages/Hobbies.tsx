import { useNavigate } from "react-router-dom";

const Hobbies = () => {

  const navigate = useNavigate();
  return (
    <div>
      <button> CAMPING</button>
      <button onClick={() => navigate('/hobbies/vinyl')}>VINYL</button>
    </div>
  )

}
export default Hobbies;