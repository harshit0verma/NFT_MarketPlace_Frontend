import { useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from "react/cjs/react.production.min";
import abi from "../constants/abi.json";

export default function LotteryEntrance(){
    // const { isWeb3Enabled } = useMoralis();
    // const { runContractFunction : getentraceFee} = useWeb3Contract({
    //     abi:  abi,
    //     contractAddress: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9" ,
    //     functionName : "getentraceFee",
    //     params: {},
    //     // msgValue:
    // })

    // useEffect(()=>{
    //     if(isWeb3Enabled){
    //         async function updateUI(){
    //         const smthn =  getentraceFee();
    //         console.log(smthn);}
    //         updateUI();
    //     }
    // },[isWeb3Enabled])
    return (
        <div>Hi from Lottery Enterance </div>
    )
}