import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function page() {
  const invoices:any = [
  
  ];
  return (
    <div className="min-h-screen">
      <Table>
        <TableCaption>
        <p className="text-white my-2">You don&lsquo;t any votes. Click here to create 👇</p>
          <Button className="font-bold" size={"sm"}>Create</Button>
        </TableCaption>
        <TableHeader className="rounded-lg border border-slate-800">
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[200px]">Created At</TableHead>
            <TableHead className="w-[200px]">End At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice:any) => (
            <TableRow key={invoice.invoice} className="border-none">
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
