import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-5 py-6">
      <div className="mb-5">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black/90">
          Hey there, welcome back.
        </h1>
        <p className="text-sm sm:text-base text-black/60 mt-1">
          Every dollar counts. Let’s make it work.
        </p>
      </div>

      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#a7f17d" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}
