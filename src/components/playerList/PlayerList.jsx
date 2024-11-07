import { FaUser , FaFlag  } from "react-icons/fa";

const PlayerList = ({playerdataload , hendlePlayer}) => {
    const {playerPhoto, playerName, country,rating,leftHandBat, allRounder, price} = playerdataload;
    return (
        
        <div className="border-2 p-4 rounded-xl">
            {/* player images */}
            <div className="mb-6">
                <img className="w-full h-[240px] rounded-xl" src={playerPhoto} alt="" />
            </div>

            <div className="">
                <h1 className="flex items-center gap-3 mb-3"><FaUser className="mb-1"></FaUser>{playerName}</h1>
                
                <div className="flex justify-between items-center border-b mb-4 pb-4">
                    <p className="flex items-center gap-3"><FaFlag></FaFlag> {country}</p>
                    <p>{allRounder ? (<p className="show btn">All-Rounder</p>) : (<p className="show hidden">Not an All-Rounder</p>)}</p>
                </div>
            </div>
            <p className="mb-4">Rating : {rating}</p>

            {leftHandBat? (
                <div className="flex justify-between">
                    <p className="mb-6">Left Hand Bater</p>
                    <p className="mb-6">Left Hand Bater</p>
                </div>): (
                    <div className="flex justify-between">
                        <p className="mb-6">Right Hand Bater</p>
                        <p className="mb-6">Right Hand Bater</p>
                    </div>
                )}

            <div className="flex justify-between items-center mb-2">
                Price : ${price}
                <p onClick={hendlePlayer} className="border px-4 py-2 rounded-lg">Choose Player</p>
            </div>
            
        </div>
    );
};

export default PlayerList;
