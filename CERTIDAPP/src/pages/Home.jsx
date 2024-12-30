import React, { useState } from 'react';
import imagePath from '../assets/imgs/cetiimg.png';
import { Link, useNavigate } from 'react-router-dom';
import { ethers } from "ethers";

const Home = () => {
    const [certid, setCertid] = useState('');
    const navigate = useNavigate();

    // Update `certid` directly as a string
    function handlechange(e) {
        setCertid(e.target.value);
        console.log("Certificate ID:", e.target.value);
    }

    // Navigate to the certificate view page
    const searchcertid = () => {
        if (!certid.trim()) {
            alert("Please enter a certificate ID");
            return;
        }
        navigate(`/certificate/${certid}`);
    };

    // Connect to MetaMask
    async function connecttometamask() {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            console.log("Connected address:", signer.address);
            alert(`Connected to MetaMask: ${signer.address}`);
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            alert("Failed to connect to MetaMask. Please ensure it is installed and unlocked.");
        }
    }

    return (
        <div className='bg-gray-200 h-[600px]'>
            <div className="flex justify-end p-2">
                <button
                    className="bg-sky-500 rounded w-[200px] h-10 p-2 pl-6 mr-4 text-justify text-slate-100"
                    onClick={connecttometamask}
                >
                    Connect to MetaMask
                </button>
                <Link to='/issue' className="rounded w-40 h-10 p-2 pl-6 text-justify text-white bg-sky-500">
                    Issue Certificate
                </Link>
            </div>
            <div className="text-center text-4xl font-extrabold">
                <p>Certificate DApp</p>
            </div>
            <div>
                <div className="flex justify-center items-center mt-12">
                    <img className="w-40 h-40" src={imagePath} alt="Certificate Icon" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-12">
                <input
                    className="border border-sky-500 px-4 py-2"
                    type="text"
                    value={certid}
                    onChange={handlechange}
                    placeholder="Enter Certificate ID"
                />
                <button
                    className="border border-sky-500 bg-sky-500 w-24 text-slate-100 ml-4"
                    onClick={searchcertid}
                    type="button"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Home;
