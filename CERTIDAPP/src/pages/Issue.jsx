import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ABI from "../assets/Cert.json"
import address from "../assets/deployed_addresses.json";
import {ethers} from "ethers"

const Issue = () => {
    const [formdata,setFormdata]=useState({
        id:'',
        name:'',
        course: 'Certified Blockchain Associate',
        grade:'A+',
        date:''
      })
    function handlechange(e){
        //  console.log(e.target.value);
        const { name, value } = e.target;
        setFormdata((prevFormdata) => ({
          ...prevFormdata,
          [name]: value,
        }));
        console.log(formdata);
        
         
        }
    async function handlesubmit(e) {
        e.preventDefault();
        const provider= new ethers.BrowserProvider (window.ethereum);// we need a provider here we interact from front so we select browserprovider function
        //variable to store the signer (ath account vazhi aayitt annu connect)
        const signer =await provider.getSigner();
        const cAbi= ABI.abi;
        const cAddress=address['CertModule#Cert'];
        console.log(cAddress);
        // this interact with the smartcontract
        const certiInstance=new ethers.Contract(cAddress,cAbi,signer);
        console.log(certiInstance);
        //now interact with function inside the contract
         const receipt =await certiInstance.issue (
                             formdata.id,
                             formdata.name,
                             formdata.course,
                             formdata.grade,
                             formdata.date
        );
        console.log(receipt);
      }
  return (
    <div>
        <div className="flex ">
            <p className="font-bold flex justify-start text-2xl">Certificate Dapp</p>
            <div className="flex justify-end  p-2  ml-auto mt-0">
                <Link className="rounded w-24 h-10 p-2 pl-6 mr-4 text-justify mt-0 "  to="/" >Home</Link>
                <Link to="/issue" className="rounded w-40 h-10 p-2 pl-6 text-justify bg-sky-500  text-slate-100 ">Issue certificate</Link>
            </div>
        </div>
       <form  onSubmit={handlesubmit}>
       <div className="border border-slate-500 bg-slate-100 w-4/5 ml-20 mt-8 h-4/5">
            <p className="ml-12 mt-10 text-2xl">Issue New Certificate</p>
            <div className="ml-12 mt-2"><label htmlFor="">Certifate ID*</label>
                    <br/>
                    <input className="bg-slate-300 w-5/12 h-7" type="text" placeholder="Certificate ID"name="id" id="id" onChange={handlechange}/>
            </div>
            <br/>
            <div className="ml-12 mt-2"><label htmlFor="">Candidate Name*</label>
                    <br/>
                    <input className="bg-slate-300 w-5/12 h-7" type="text" placeholder="Candidate Name"name="name" id="name" onChange={handlechange}/>
            </div>
            <br/>
            <div className="ml-12 mt-2">
                <label htmlFor="">Select Course*</label>
                    <br/>
                        <select className="bg-slate-300 w-5/12 h-7" name="course" id="course"  onChange={handlechange} >
                        <option value="Certified Blockchain Associate" >Certified Blockchain Associate</option>
                        <option value="cyber security analyst">cyber security analyst</option>
                        {/* <option value=""></option>
                        <option value=""></option> */}
                        </select>
            </div>
                  
           
            <br/>
            <div className="ml-12 mt-2">
                <label  htmlFor="">Select Grade*</label>
                    <br/>
                        <select className="bg-slate-300 w-5/12 h-7" name="grade" id="grade" onChange={handlechange} >
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                        </select>
            </div>
                        <br/>
            <div className="ml-12 mt-2">
                <label htmlFor="" >Issue Date*</label>
                        <br/>
                <input type="date" className="bg-slate-300 w-5/12 h-7" name="date" id="date" onChange={handlechange}/>
            </div>
            <div className="ml-12 mt-2 rounded w-40 h-10 p-2 pl-6 text-justify bg-sky-500  text-slate-100 mb-8 "><input className="button1" type="submit" value="Issue Certifate"/></div>

        </div>
       </form>

    </div>
  )
}

export default Issue