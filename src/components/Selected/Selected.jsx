import { RiDeleteBin6Fill } from "react-icons/ri";


const Selected = ({ addPlayer, hendleDelete, maxPlayers }) => {


    
    return (
        <div className="container mx-auto mb-5">

        <div className="mb-5">
          <span>Selected player ({addPlayer.length}/{maxPlayers})</span>
        </div>
            {
                addPlayer.map((player, index) => (
                    <div key={index} className="flex justify-between items-center gap-4  border px-3 py-2 mb-4">
                        <div className="flex text-center gap-4">
                            <img className="w-24 h-16 " src={player.playerPhoto} alt="" />

                            <div className="pt-">
                                <div>
                                    <p> {player.playerName}</p>
                                </div>

                                <div >
                                    {
                                        player.leftHandBat? (
                                        <div className="">
                                            <p className="mb-6">Left Hand Bater</p>
                                        </div>)
                                        :
                                        (<div className="">
                                            <p className="mb-6">Right Hand Bater</p>
                                        </div>)
                                    }
                                </div>

                            </div>
                        </div>

                        <div onClick={()=> hendleDelete(player.playerId)} className="cursor-pointer text-2xl text-red-600">
                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                        </div>

                    </div>
                ))
            }
            <button>
            <a href=".available2"><span className="px-4 py-2 border rounded-lg cursor-pointer
            hover:bg-yellow-300 text-black delay-500 ease-in-out">add player</span></a>
            </button>
        </div>
    );
};

export default Selected;



