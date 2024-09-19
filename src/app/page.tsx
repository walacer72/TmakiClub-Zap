import { Body } from "@/components/produtos/body";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkeletonTab } from "@/components/produtos/skeletonTab";
import { Suspense, useContext, useState } from "react";

/* async function handleCheckedCep(e: FocusEvent<HTMLInputElement>) {
  const cep = e.target.value.replace(/\D/g, '');
  console.log(cep);
  try {
      const response = await Api.get(`${cep}/json/`)
      const data = response.data;
      setValue('address.street', data.street);
      setValue('address.district', data.district);


  } catch {
      alert('CEP Inválido"')

  }

}*/


const Page = () => {
  
  return (
    
    <div className="w-full mx-auto overflow-x-hidden">
      
      <div className="relative">
        <Header />
      </div>
      

      <div className="w-screen max-w-6xl mx-auto mt-32" >
        <Suspense fallback={<SkeletonTab />}>
          <Body />
        </Suspense>
      </div>
      <Footer />
      
    </div>
    

  )
}

export default Page;