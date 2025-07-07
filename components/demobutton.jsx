 'use client';
import { useRouter } from 'next/navigation';

export default function DemoButton() {
  const router = useRouter();

  const handleDemoLogin = () => {
    const demoEmail = "demo+clerk_test@example.com";
    router.push(`/sign-in?email=${encodeURIComponent(demoEmail)}`);
  };

  return (
    <button
      onClick={handleDemoLogin}
      className="px-6 py-3 bg-[#8aeb30] rounded-full text-black font-semibold hover:bg-[#7cd023] transition"
    >
      Try Live Demo
    </button>
  );
}
