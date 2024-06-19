import {React, useState, useEffect} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
 import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase.config';
import JobCard from './JobCard';

const Home = () => {

  const [jobs, setJobs] = useState([]);
  // const [jobs, setJobs] = useState(jobData);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []

    const jobsRef = query(collection(db, "jobs"));

    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(job.id, " => ", job.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }


  useEffect(() => {
    fetchJobs()
  },[])




  return (
    <>
    <Header/>
    <SearchBar fetchJobsCustom={fetchJobsCustom}/>
    {customSearch && 
        <div className="flex items-center justify-center mb-2" > 
          <button onClick={fetchJobs} className="flex mb-2">
         
        <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
      </button></div>
        
      }
      { jobs.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ))}
    

    </>
  )
}

export default Home