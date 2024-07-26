function Signup() {
     return (
      <>
    <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    type="text/tailwindcss"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t@layer base {\n\t\t\t\t:root {\n\t\t\t\t\t--background: 0 0% 100%;\n--foreground: 240 10% 3.9%;\n--card: 0 0% 100%;\n--card-foreground: 240 10% 3.9%;\n--popover: 0 0% 100%;\n--popover-foreground: 240 10% 3.9%;\n--primary: 240 5.9% 10%;\n--primary-foreground: 0 0% 98%;\n--secondary: 240 4.8% 95.9%;\n--secondary-foreground: 240 5.9% 10%;\n--muted: 240 4.8% 95.9%;\n--muted-foreground: 240 3.8% 46.1%;\n--accent: 240 4.8% 95.9%;\n--accent-foreground: 240 5.9% 10%;\n--destructive: 0 84.2% 60.2%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 5.9% 90%;\n--input: 240 5.9% 90%;\n--ring: 240 5.9% 10%;\n--radius: 0.5rem;\n\t\t\t\t}\n\t\t\t\t.dark {\n\t\t\t\t\t--background: 240 10% 3.9%;\n--foreground: 0 0% 98%;\n--card: 240 10% 3.9%;\n--card-foreground: 0 0% 98%;\n--popover: 240 10% 3.9%;\n--popover-foreground: 0 0% 98%;\n--primary: 0 0% 98%;\n--primary-foreground: 240 5.9% 10%;\n--secondary: 240 3.7% 15.9%;\n--secondary-foreground: 0 0% 98%;\n--muted: 240 3.7% 15.9%;\n--muted-foreground: 240 5% 64.9%;\n--accent: 240 3.7% 15.9%;\n--accent-foreground: 0 0% 98%;\n--destructive: 0 62.8% 30.6%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 3.7% 15.9%;\n--input: 240 3.7% 15.9%;\n--ring: 240 4.9% 83.9%;\n\t\t\t\t}\n\t\t\t}\n\t\t"
    }}
  />
  <div className="flex items-center justify-center h-screen bg-gradient-to-r border-4  from-gray-100 to-zinc-100"
  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512844478094-85d47752ac3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
  >
    <div className="bg-white shadow-lg rounded-lg border-4 overflow-hidden max-w-4xl w-full">
      <div className="flex">
        <div className="w-1/2 p-8">
          <img
            src="https://plus.unsplash.com/premium_photo-1695297516147-4c4adafeaf88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Illustration"
            className="w-full h-auto rounded-full shadow-yellow-400"
          />
        </div>
        <div className="w-1/2 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-green-600">
              Crave<span className="text-red-500">Corner</span>
            </h1>
            <div>
              
              <div  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Sign Up
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Welcome to <span className="text-red-500">Crave</span>
            <span className="text-green-600">Corner</span>!
          </h2>
          <p className="text-zinc-600 mb-6">
            To keep connected with us please sign up with your personal
            information by email addres,Name.....
          </p>
          <form >
            <div className="mb-4">
              <input type="text" 
                id="name"
                name="name"
                required=""
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Type of Restaurant"
                placeholder="What is your Name?"
               
              >
                
              </input>
            </div>
            <div className="mb-4">
              <input
                id="email"
                name="email"
                required=""
                type="email"
                placeholder="E-mail id"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            
              />
            </div>
            <div className="mb-4">
              <input
                id="password"
                name="password"
                required=""
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            
              />
            </div>
            <div className="mb-4">
              <input
                id="confirmpassword"
                name="confirmpassword"
                required=""
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
               
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>
          <p className="text-zinc-600 mt-4">
            Already Registered?{" "}
            <a href="http://localhost:5173/signin" className="text-blue-500 hover:from-neutral-500">
              Sign in
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-red-500">
              <i className="fab fa-google" />
            </a>
            <a href="#" className="text-blue-700">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

      </>
    )
  }
  
  export default Signup;
  