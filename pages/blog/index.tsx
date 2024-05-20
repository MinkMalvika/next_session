import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import BlogsCards from '@/components/blogscard';


const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
      fetchDataFromApi();
    }, []);
  
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/blogposts");
        const data = await response.json();
        setApiData(data);
      } catch {
        console.log("api failed");
      }
    };
  return (
    <main
      className={`flex min-h-screen items-center flex-col  p-4 ${inter.className}`}
    >
    
      <div className="font-semibold text-center pb-8 flex">
        <span className="text-center border-black border-b-2 pb-2">Blogs </span>
      </div>
      {apiData ? (
        <div className="flex">
          <BlogsCards blogData={apiData} />
        </div>
      ) : (
        <div className="text-center pt-5">Loading...</div>
      )}


     
    </main>
  )
}
