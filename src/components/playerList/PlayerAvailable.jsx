import { useEffect, useState } from "react";
import Available from '../available/Available';
import './PlayerAvailable.css'
import Selected from "../Selected/Selected";
// react-toastify-Alert
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlayerAvailable = ({isActive, hendleIsActiveStatus,setGetCoin,getCoin}) => {
    // console.log(isActive);

    //step-3 :: load json Data perfectly  
    const [playerData, setPlayerData] = useState([])

    useEffect(()=>{
        fetch('../public/playerData.json')
        .then(res => res.json())
        .then(data => setPlayerData(data))
    },[])


    //step-4 :: coin dynamic click and added coin 

    const [addPlayer, setAddPlayer] = useState([])

    const hendlePlayer = (player) =>{

        const isExist = addPlayer.find(availableps => availableps.playerId == player.playerId);
        // console.log(isExist);
                

        if (isExist) {
            toast("Already exists"); 
        }
        else if (getCoin >= player.price) {
            const newAddPlayer = [...addPlayer, player];
            setAddPlayer(newAddPlayer);
            setGetCoin(prevCoins => prevCoins - player.price);
        } else {
            toast("Not enough coins!");
        }
    }

    //step-5 :: dynamic click and delete selected id
    
    const hendleDelete = (id) =>{
        const newPlayer = addPlayer.filter(availableps => availableps.playerId != id);
        const removedPlayer = addPlayer.find(availableps => availableps.playerId === id);
        if (removedPlayer) {
            setGetCoin(prevCoins => prevCoins + removedPlayer.price);
        }
        setAddPlayer(newPlayer)
    }


    //step-5 :: dynamic click and delete selected id
    const maxPlayers = 6;

    if (addPlayer.length > maxPlayers) {
        alert(`You can only add up to ${maxPlayers} players.`);
    }


    return (
        <div id="available2">
            <div className="container mx-auto flex justify-between items-center my-8">

                <h1 className="text-2xl font-semibold">Available Players</h1>

                <div className="flex justify-center items-center">
                    <div onClick={()=> hendleIsActiveStatus ("available") } className={`${isActive.available? "a border-y border-l rounded-l-lg px-6 py-2 cursor-pointer active" : "border-y border-l rounded-l-lg px-6 py-2 cursor-pointer" }`}> Available</div>

                    <div onClick={()=> hendleIsActiveStatus ("selected") } className={`${isActive.available? "b border-y border-r rounded-r-lg px-6 py-2 cursor-pointer" : "active border-y border-r rounded-r-lg px-6 py-2 cursor-pointer" }`}> Selected ({addPlayer.length})</div>  {/* selected-btn border-y border-r rounded-r-lg px-6 py-2  */}
                </div>
            </div>

            
            {isActive.available? (
                <div className="container mx-auto grid grid-cols-3 gap-10">
                    {
                        playerData.map(availableps => <Available key={availableps.playerId} hendlePlayer={hendlePlayer} availableps={availableps}></Available>)
                        
                    }
                   
                </div>
            ):
            <div className="">
                {
                    <Selected addPlayer={addPlayer} hendleDelete={hendleDelete} hendlePlayer={hendlePlayer} maxPlayers={maxPlayers}></Selected>
                }
            </div>
            }

           
        </div>
    );
};

export default PlayerAvailable;