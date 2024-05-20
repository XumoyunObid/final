"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { removeWishlist } from '@/redux/slices/wishlist-slice';
import { addProduct } from '@/redux/slices/product-slice';
import Link from 'next/link';

const WishlistTable = () => {
  const {wishlist}=useSelector((state:RootState)=> state.wishlist)
  const imgs = wishlist.map((item)=>item.images[0].image)
  const img = imgs[0]
  const dispatch = useDispatch()
  const handleDelete = (id:number)=> {
    dispatch(removeWishlist(id))
  }
  const handleAdd =(prop:any)=>{
    dispatch(addProduct(prop))
  }
console.log(wishlist)
  return (
    <div>
        {wishlist.length ?
       <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead></TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Unit Price</TableHead>
          <TableHead>Stock Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
          <TableBody>
          {wishlist?.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell><button className="underline py-1 px-3 hover:bg-gray-300 hover:rounded-full" onClick={()=> handleDelete(invoice.id)}>x</button></TableCell>
            <TableCell><img src={img} width={100} height={100} alt={invoice.title}/></TableCell>
            <TableCell className="underline hover:text-primary"><Link href={`/products/${invoice.id}`}>{invoice.title}</Link></TableCell>
            <TableCell>${invoice.price}</TableCell>
            <TableCell>{invoice.is_available ? "Available in market" : "Not available in market for now"}</TableCell>
            <TableCell><button className="underline" onClick={()=>handleAdd(invoice)}>Add to cart</button></TableCell>
          </TableRow>
        ))}
        </TableBody> </Table> : <p className="text-center py-2">No product added to the wishlist</p>}
    
    </div>
  )
}

export default WishlistTable
