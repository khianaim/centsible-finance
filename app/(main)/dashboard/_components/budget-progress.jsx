"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X, Wallet, TrendingDown } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBudget } from "@/actions/budget";

export function BudgetProgress({ initialBudget, currentExpenses }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    initialBudget?.amount?.toString() || ""
  );

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const percentUsed = initialBudget
    ? (currentExpenses / initialBudget.amount) * 100
    : 0;

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    await updateBudgetFn(amount);
  };

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEditing(false);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditing(false);
      toast.success("Budget updated successfully");
    }
  }, [updatedBudget]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update budget");
    }
  }, [error]);

  return (
    <Card className="bg-[#ddffc9] text-black rounded-2xl shadow-lg border-none">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-[#8aeb30]/65">
                <Wallet className="w-6 h-4 text-black" />
              </div>
              Monthly Budget
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              {isEditing ? (
                <>
                  <Input
                    type="number"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-32 text-sm text-black"
                    placeholder="Enter amount"
                    autoFocus
                    disabled={isLoading}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleUpdateBudget}
                    disabled={isLoading}
                    className="hover:bg-green-100"
                  >
                    <Check className="h-4 w-4 text-green-700" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCancel}
                    disabled={isLoading}
                    className="hover:bg-red-100"
                  >
                    <X className="h-4 w-4 text-red-700" />
                  </Button>
                </>
              ) : (
                <>
                  <CardDescription className="text-base text-black font-light">
                    {initialBudget
                      ? `$${currentExpenses.toFixed(2)} of $${initialBudget.amount.toFixed(
                          2
                        )} spent`
                      : "No budget set"}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsEditing(true)}
                    className="h-6 w-6 hover:bg-muted"
                  >
                    <Pencil className="h-4 w-4 text-black" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {initialBudget && (
          <div className="space-y-2">
            <Progress
              value={percentUsed}
              extraStyles={`transition-all duration-500 ease-in-out ${
                percentUsed >= 90
                  ? "bg-red-600"
                  : percentUsed >= 75
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            />
            <div className="flex justify-between items-center text-xs mt-1">
              <div className="flex items-center gap-1 bg-[#8aeb30]/85 px-2 py-1 rounded-full text-sm text-black mt-3 font-semibold">
                <TrendingDown className="h-5 w-5" />
                {percentUsed.toFixed(1)}% used
              </div>
              <span className="font-semibold text-black text-sm">
                Remaining: ${(initialBudget.amount - currentExpenses).toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
