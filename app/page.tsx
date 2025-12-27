'use client';

import { useQuery } from '@tanstack/react-query';
import { IProducts } from './types/page';
import { getProducts } from './services/page';

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<IProducts[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <h1>Yuklanmoqda...</h1>;
  if (isError) return <h1>Xatolik yuz berdi</h1>;

  return (
    <>
      <main className="w-full bg-gray-400 pt-[30px]">
        <section className="w-[1600px] grid grid-cols-4 rounded-[20px] container mx-auto min-h-screen bg-gray-300 gap-[20px] p-[30px]">
          {products?.map((item) => (
            <div
              className="shadow-lg h-[600px] group flex flex-col items-center rounded-[30px]"
              key={item.id}>
              <div className="w-full h-[300px] flex items-center justify-center bg-gray-400 rounded-[30px] shadow-lg">
                <img
                  className="transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out"
                  src={item.thumbnail}
                  alt="Rasm"
                />
              </div>
              <h1 className="text-[32px] font-[700] text-white text-shadow-lg text-center">
                {item.title}
              </h1>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
