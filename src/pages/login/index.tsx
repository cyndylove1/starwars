import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
import Input from "../../components/input";
import Button from "../../components/button";
import InputPassword from "../../components/inputPassword";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    // ✅ this will only run if form is valid
    if (form.checkValidity()) {
      navigate("overView");
    } else {
      form.reportValidity(); // show browser validation errors
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left section */}
      <div className="bg-[var(--navyBlue)] hidden lg:flex justify-center items-center w-[480px]">
        <Logo/>
      </div>

      {/* login form */}
      <div className="flex flex-1 justify-center items-center mx-4">
        <div className="border-[1px] border-[#A4A7B7] rounded-[8px] md:w-[467px] w-full md:px-20 px-4">
          <div className="pt-10">
            <h2 className="text-[24px] font-[600] leading-[32px] text-[#434854]">
              Login
            </h2>
            <h6 className="text-[16px] font-[400] leading-[24px] text-[#737373]">
              Kindly enter your details to log in
            </h6>
          </div>

          <form onSubmit={handleLogin}>
            <div className="w-full mt-6">
              <Input label="Email Address" required type="email" name="email" />
            </div>
            <div className="mt-6">
              <InputPassword label="Password"/>
            </div>
            <Button text="Log In" type="submit" />

            <h6 className="text-[14px] font-[400] leading-[16px] text-[var(--main)] text-center mt-4">
              Forgot your password?
            </h6>
            <p className="text-[12px] font-[400] text-[#c9cfd9] leading-[20px] text-center pt-10 pb-6">
              <span className="text-[#7d8494] underline ">Privacy Policy</span>{" "}
              and{" "}
              <span className="text-[#7d8494] underline">
                Terms of services
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
