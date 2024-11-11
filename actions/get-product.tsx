import { product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getproduct = async (id: string): Promise<product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getproduct;
