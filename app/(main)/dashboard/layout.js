import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-5 py-6">
      <div className="mb-5">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Hey there, welcome back.
        </h1>
        <p className="text-xl sm:text-lg text-white mt-1">
          Every dollar counts. Let’s make it work.
        </p>
      </div>

      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#ffffff" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}
