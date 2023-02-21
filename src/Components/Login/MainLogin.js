import React, { useState } from "react";
import { useAuth } from "../../fireBase/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signUpWithEmail } = useAuth();
  const { googleSignIn, user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.code === "auth/wrong-password"
      ) {
        setError("The password is incorrect.");
      } else {
        setError(error.message);
      }
    }
  };
  
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          
          <div class="max-w-xl lg:max-w-3xl">
            <button
              style={{ backgroundColor: "lightblue", color: "white" }}
              class="inline-block shrink-0 rounded-md border border-grey-600 bg-grey-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-grey hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                Back to Homepage
              </Link>
            </button>
            <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to AiBot 🦑
            </h1>

            <button
              aria-label="Continue with google"
              onClick={handleSignIn}
              role="button"
              style={{ background: "white", padding: "15px" }}
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
            >
              <svg
                width={19}
                height={20}
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>
            <form onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:flex sm:items-center sm:gap-4"></div>
              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Mail"
                  style={{
                    borderRadius: "10px",
                    color: "black!important",
                    padding: "10px",
                    border: "2px solid #4898ff",
                  }}
                />
              </div>

              <div class="col-span-6 sm:col-span-6">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    borderRadius: "10px",
                    color: "black!important",
                    padding: "10px",
                    border: "2px solid #4898ff",
                  }}
                />
              </div>

              <div class="col-span-6">
                <label for="MarketingAccept" class="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span class="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Login
                </button>
                <p style={{ fontWeight: "bold" }}>
                  <Link to="/signup">Not Have An Account?</Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default MainLogin;
