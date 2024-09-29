import { Body } from "@/components/produtos/body";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkeletonTab } from "@/components/produtos/skeletonTab";
import { Suspense, useContext, useState } from "react";




const Page = () => {
   
  return (
    
    <div className="w-full mx-auto overflow-x-hidden font-roboto100">
      
      <div className="relative font-roboto100">
        <Header />
      </div>
      

      <div className="w-screen max-w-6xl mx-auto mt-44 font-roboto100" >
        <Suspense fallback={<SkeletonTab />}> 
          <Body />
        </Suspense>
      </div>
      <Footer />
      
    </div>
    

  )
}

export default Page;