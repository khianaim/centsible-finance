 "use client";

import { motion } from "framer-motion";
import { AccountCard } from "./account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./transaction-overview";

export function DashboardContent({ accounts, transactions, budgetData }) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <CreateAccountDrawer>
          <Card
            className="
              bg-[#151515fe]
              border-dashed border-2 border-[#fafff7]
              rounded-2xl
              shadow-md
              transition-shadow duration-300
              cursor-pointer
              text-gray-700
            "
          >
            <CardContent className="flex flex-col items-center justify-center text-[#fafff7] h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-base font-light">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 &&
          accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <BudgetProgress
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <DashboardOverview accounts={accounts} transactions={transactions || []} />
      </motion.div>
    </div>
  );
}
