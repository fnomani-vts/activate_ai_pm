import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Welcome</h1>
          <p className="text-lg text-gray-600">Select a page to navigate to:</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/vts/lease/deals"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-vts-purple-500 hover:shadow-lg"
          >
            <div className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-vts-purple-600">
              Portfolio Analyst Demo
            </div>
            <div className="text-sm text-gray-500">
              /vts/lease/deals
            </div>
          </Link>

          <Link
            href="/vts/lease/dealsv2"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-vts-purple-500 hover:shadow-lg"
          >
            <div className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-vts-purple-600">
              Portfolio Analyst (Old)
            </div>
            <div className="text-sm text-gray-500">
              /vts/lease/dealsv2
            </div>
          </Link>

          <Link
            href="/vts/lease/deals/profile"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-vts-purple-500 hover:shadow-lg"
          >
            <div className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-vts-purple-600">
              Activate Portfolio Analyst Demo
            </div>
            <div className="text-sm text-gray-500">
              /vts/lease/deals/profile
            </div>
          </Link>

          <Link
            href="/vts/lease/dealsbgo"
            className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-vts-purple-500 hover:shadow-lg"
          >
            <div className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-vts-purple-600">
              BGO - Portfolio Analyst Demo
            </div>
            <div className="text-sm text-gray-500">
              /vts/lease/dealsBGO
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}