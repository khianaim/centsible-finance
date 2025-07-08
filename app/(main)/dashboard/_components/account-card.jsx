"use client";

import { ArrowUpRight, ArrowDownRight, CreditCard } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { updateDefaultAccount } from "@/actions/account";
import { toast } from "sonner";

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault(); 

    if (isDefault) {
      toast.warning("You need atleast 1 default account");
      return; 
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  return (
 <Card
  className="
    group 
    relative
    border border-[#0b4246]/60
    bg-[#ddffc9]
    backdrop-blur-md 
    rounded-2xl 
    shadow-lg 
    hover:shadow-xl 
    transition-shadow duration-300
    hover:border-[#82f85b]
    hover:shadow-[0_0_20px_#82f85b]
    text-[#ddffc9]
  "
>
      <Link href={`/account/${id}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg text-black font-semibold capitalize">
            {name}
          </CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleDefaultChange}
            disabled={updateDefaultLoading}
          />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            ${parseFloat(balance).toFixed(2)}
          </div>
          <p className="text-base font-light text-black/70">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-black/90 font-semibold">
  <div className="flex items-center bg-green-300 text-green-700 px-3 py-1 rounded-full">
    <ArrowUpRight className="mr-1 h-5 w-5 text-green-700" />
    Income
  </div>
  <div className="flex items-center bg-red-300 text-red-700 px-3 py-1 rounded-full">
    <ArrowDownRight className="mr-1 h-5 w-5 text-red-700" />
    Expense
  </div>
</CardFooter>

      </Link>
    </Card>
  );
}
