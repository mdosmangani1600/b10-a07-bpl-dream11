


import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner/Banner'
import Header from './assets/components/Header/Header'
import Players from './assets/components/Players/Players'
import SelectedPlayer from './assets/components/SelectedPlayer/SelectedPlayer'
import Subscribe from './assets/components/Subscribe/Subscribe'
import Footer from './assets/components/Footer/Footer'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [selectedPlayer,setSelectedPlayer] = useState([]);

  

  const [activeTab,setActiveTab] = useState(true);

  const [freeCredit, setFreeCredit] = useState(0)
  console.log(freeCredit)
  
  const handleFreeCredit = () =>{
    setFreeCredit(freeCredit + 2555000)
    toast.success('Claimed free Credit')
    
  }


  const handleRemove = id =>{

    const updatedSelectedPlayer = selectedPlayer.filter(player =>player.playerId !== id)
    setSelectedPlayer(updatedSelectedPlayer);
    toast.warning('Player removed')
  }

  

  const addToSelected = player =>{
    const isExist = selectedPlayer.find(
      previousPlayer =>previousPlayer.playerId === player.playerId
    )

  


  
    if(!isExist && selectedPlayer.length < 6  && freeCredit > player.biddingPrice){
      const newSelectedPlayer =[...selectedPlayer, player] ;
    setSelectedPlayer(newSelectedPlayer);

    setFreeCredit(freeCredit - player.biddingPrice)
    toast.success('Congratulations  . Player selected')

    }
    else{
      toast.error('Something wrong cant select player')
    }
    

  }



  return (
    <>
      
      <Header freeCredit={freeCredit} ></Header>
      <Banner handleFreeCredit={handleFreeCredit} ></Banner>
      <div className="flex justify-end text-center mt-20 w-11/12 mx-auto">
            <div className="flex">
                <button onClick={ () => setActiveTab(true)}  className='font-bold p-2 border rounded-s-xl'> Available</button>
                  <button onClick={() =>setActiveTab(false) } className="p-2 border rounded-e-xl">
                    Selected ({selectedPlayer.length})</button>
            </div>
            </div>
      {
        activeTab ? <Players setActiveTab={setActiveTab} addToSelected={addToSelected}  ></Players> :<SelectedPlayer selectedPlayer={selectedPlayer} handleRemove={handleRemove} setActiveTab={setActiveTab} ></SelectedPlayer>
      }
      <Subscribe></Subscribe>
      <Footer></Footer>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      

    </>
  )
}

export default App;