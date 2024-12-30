import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {ethers} from "ethers"
import ABI from "../assets/Cert.json"
import address from "../assets/deployed_addresses.json";
import certimg from"../assets/imgs/cetiimg.png";

const Certificate = () => {
    const {id}=useParams();
    const [output,setOutput]=useState('');
    useEffect(()=>{
        const getcertificate=async()=>{
            try{
                const provider= new ethers.BrowserProvider (window.ethereum);
                const signer =await provider.getSigner();
                const cAbi= ABI.abi;
                const cAddress=address['CertModule#Cert'];
                const certiInstance=new ethers.Contract(cAddress,cAbi,signer);
                const result= await certiInstance.Certificates(id);
                setOutput({
                    certid: id,
                    cname:result.name,
                    course:result.course,
                    grade:result.grade,
                    date:result.date
                })
            }
            catch(error){
                console.error('Error fetching certificate :',error);
            }
        }
        getcertificate();
    },[id]);
    
    // async function getcertificate() {
        // const id = document.getElementById("ID").value;
        // const provider= new ethers.BrowserProvider (window.ethereum);
        // const signer =await provider.getSigner();
        // const cAbi= ABI.abi;
        // const cAddress=address['CertModule#Cert'];
        // const certiInstance=new ethers.Contract(cAddress,cAbi,signer);
        // const txtvalue= await certiInstance.Certificates(id);
        // console.log(txtvalue);
        // setOutput(`${txtvalue[0]} is certified in the Course ${txtvalue[1]} passed by the grade ${txtvalue[2]} on the date ${txtvalue[3]} .`)
    //   }
  return (
    <div>
         <div className="border bg-slate-100 border-slate-400 w-9/12 ml-44  p-8 mt-14"> 
        
        <div className="border  border-slate-400 bg-slate-100 w-9/12 ml-32  mt-10">
        
            <div className="text-center">
                <h2>Kerala Blockchain Academy</h2>
            </div>
            <div className=" flex justify-center items-center mt-12 ">
                <img  className="w-40 h-40" src={certimg} alt="" /> 
            </div>
            <div className="text-center mt-4">
                <p>This is certify that <b>{output.cname}</b></p>
            </div>
            <div className="text-center mt-4">
                <p> has successfully completed <b>{output.course}</b></p>
            </div>
            <div  className="text-center mt-4">
            <p>with <b>{output.grade}</b> on {output.date}</p>
            </div>
        </div>
            </div>
        
    </div>
  )
}

export default Certificate