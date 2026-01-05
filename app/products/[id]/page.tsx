'use client';

import { getProductsByID } from '@/app/services/services';
import { IProducts } from '@/app/types/types';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const DetailPage = () => {
  const router = useRouter()
  const { id } = useParams();
const goHome = () => {
  router.push('/')
}


  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<IProducts>({
    queryKey: ['product', id],
    queryFn: () => getProductsByID(Number(id)),
  });

  if (isLoading) return <h1>Yuklanmoqda...</h1>;
  if (isError) return <h1>Xatolik yuz berdi</h1>;

  
  return (
    <>
      <main className="w-full h-screen bg-gray-300 p-[40px]">
        <button onClick={goHome} className='w-[180px] h-[60px] bg-white rounded-[30px] text-gray-500 text-[22px] font-[600] ml-[200px]'>Back</button>
        <div className="max-w-[900px] mx-auto flex flex-col items-center bg-gray-400 rounded-[30px] p-[30px] shadow-lg">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-[500px] h-[500px] object-cover rounded-[20px]"
          />

          <h1 className="text-[36px] font-bold mt-[20px]">{product?.title}</h1>

          <p className="text-[20px] mt-[10px]">{product?.description}</p>

          <p className="text-[24px] mt-[15px]">
            <b>Brand:</b> {product?.brand}
          </p>
        </div>
      </main>
    </>
  );
};

export default DetailPage;
