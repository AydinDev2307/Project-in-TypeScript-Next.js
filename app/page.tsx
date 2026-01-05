'use client';

import { useQuery } from '@tanstack/react-query';
import { IProducts } from './types/types';
import { getProducts } from './services/services';
import { useSearchStore } from './store/search';
import Link from 'next/link';
import EyeIcon from '@/app/assets/icons/eye-icon.png';
import Image from 'next/image';
const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<IProducts[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const { search } = useSearchStore();

  const filtredProduct = products?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <h1>Yuklanmoqda...</h1>;
  if (isError) return <h1>Xatolik yuz berdi</h1>;

  return (
    <>
      <main className="w-full bg-gray-400 pt-[30px]">
        <section className="w-[1600px] grid grid-cols-4 rounded-[20px] container mx-auto min-h-screen bg-gray-300 gap-[20px] p-[30px]">
          {filtredProduct?.map((item) => (
            <div
              className="shadow-lg h-[500px] group flex flex-col items-center rounded-[30px] relative"
              key={item.id}>
              <div className="w-full h-[300px] flex items-center justify-center bg-gray-400 rounded-[30px] shadow-lg relative">
              
                <img
                  className="transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                  src={item.thumbnail}
                  alt="Rasm"
                />
                  <Link href={`/products/${item.id}`}
                  className="absolute top-[20px] right-[20px] w-[40px] h-[40px] bg-gray-300 rounded-[50%] flex items-center justify-center cursor-pointer">
                  <Image src={EyeIcon} alt="Rasm" width={34} height={34} />
                </Link>
              </div>
              <h1 className="text-[32px] font-[700] text-white text-shadow-lg text-center truncate w-[200px]">
                {item.title}
              </h1>
              <h3 className="text-[24px] font-[700] text-white text-shadow-lg text-center">
                <span className="text-gray-500">Rating:</span> {item.rating}
              </h3>
              <button className="text-[24px] font-[700] text-white cursor-pointer text-shadow-lg text-center bg-gray-500 w-[80%] h-[40px] absolute bottom-[20px] rounded-[20px]">
                {item.price}$
              </button>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
