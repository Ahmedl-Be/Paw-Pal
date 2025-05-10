import Link from "next/link";

const SignUp = () => {
  return (
    <section className="bg-pawpal-cream py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-md">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center text-pawpal-navy mb-6">
            Create Your Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3aafa9]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3aafa9]"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+2 0000000000"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3aafa9]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3aafa9]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3aafa9] text-white py-2 rounded-lg hover:bg-[#3aafa9]-dark transition-colors"
            >
              Sign Up
            </button>

            <div className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#3aafa9] hover:underline">
                Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
