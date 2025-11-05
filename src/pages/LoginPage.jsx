import LoginForm from "../components/LoginForm";
import logo from "../assets/logo.png";
import rightBg from "../assets/right.jpg";

export default function LoginPage() {
  return (
    <main className="flex flex-col md:flex-row h-[100dvh] overflow-hidden m-0 p-0">
      {/* 🔹 Left Section */}
      <section
        className="relative flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-8 overflow-hidden h-full"
          
        style={{
          backgroundImage: `url('/src/assets/login-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🔵 Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b4b91]/95 via-[#0b4b91]/85 to-[#0b4b91]/70"></div>

        {/* 🔒 Login Content */}
        <div className="relative z-10 flex flex-col items-center space-y-6 p-8 md:p-10">
          {/* Logo + Title */}
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="SECL Logo"
              className="w-40 mb-2 drop-shadow-lg"
            />
            
          </div>

          {/* Login Box */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-[420px] bg-white rounded-xl  transition-all duration-500">
          <LoginForm />
          </div>
        </div>
      </section>

      {/* 🖼️ Right Section — hidden on mobile */}
      <section className="hidden md:block w-full md:w-1/2">
        <img
          src={rightBg}
          alt="Students"
          className="w-full h-full object-cover"
        />
      </section>
    </main>
  );
}
