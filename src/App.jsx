import {useState } from "react";
import Navbar from "./components/Nav/Navbar";
import MainBanner from "./components/main-banner/MainBanner";
// import PlayerList from "./components/playerList/PlayerList";
import PlayerAvailable from "./components/playerList/PlayerAvailable"
// import Available from "./components/available/Available";

// react-toastify-Alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {

  //step-1 :: coin dynamic click and added coin  
    const [getCoin, setGetCoin] = useState(0)

    const handleClaimCoin  = () =>{
        const newCoin = getCoin + 1000000;
        setGetCoin(newCoin)
        toast('succseful add new coin' );
    }
 

    //step-2 :: dynamic click and change active available to selected btn and availableselected to available  btn
    const [isActive, setIsActive] = useState({
      available:  true,
      status : 'active'
    })

    const hendleIsActiveStatus = (status) =>{
      if(status == 'available'){
        setIsActive({
          available:  true,
          status : 'available'
        })
      }else{
        setIsActive({
          available:  false,
          status : 'selected'
        })
      }
    }



  return (
    <div> 
      <div className="">
        <ToastContainer />
      </div>
       
      {/* navbar */}
        <Navbar 
          getCoin={getCoin}
        ></Navbar>

      {/* Main Banner section */}
        <MainBanner 
          handleClaimCoin={handleClaimCoin}
        ></MainBanner>

      {/* Player Available */}
        <PlayerAvailable isActive={isActive} hendleIsActiveStatus={hendleIsActiveStatus} setGetCoin={setGetCoin} getCoin={getCoin}></PlayerAvailable>
    </div>
  );
};

export default App;