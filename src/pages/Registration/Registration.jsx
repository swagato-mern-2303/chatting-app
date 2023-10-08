import registrationImg from "../../assets/registration-page-img.png";

const registrationInputData = [
  { type: "email", label: "Email Address", id: "email" },
  { type: "text", label: "Full Name", id: "name" },
  { type: "password", label: "Password", id: "password" },
];

function Registration() {
  return (
    <div className="font-nunito">
      <div className="flex items-center">
        <div className="flex w-1/2 flex-col items-end">
          <div className="mr-[70px]">
            <h1 className="text-primary-color-400 mb-[13px] text-[34px] font-bold">
              Get started with easily register
            </h1>
            <p className="mb-[62px] text-[20.6px] opacity-60">
              Free register and you can enjoy it
            </p>
            <form className="flex w-[370px] flex-col gap-y-[57px]">
              {registrationInputData.map((item, index) => (
                <RegistrationInput
                  key={index}
                  type={item.type}
                  label={item.label}
                  id={item.id}
                />
              ))}
              <button className="bg-primary-accent rounded-[86px] py-5 text-[20.64px] font-semibold text-white duration-200 hover:bg-blue-800">
                Sign up
              </button>
            </form>
            <div className="font-open-sans mt-[20px] w-[370px] text-center">
              <p className="text-primary-color-400 text-[13.338px]">
                Already have an account ?{" "}
                <a className="text-secondary-accent font-bold" href="">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-registration-page h-screen w-1/2 bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

function RegistrationInput({ type, label, id }) {
  return (
    <>
      <div className="relative">
        <label
          className="text-primary-color-400/70 absolute left-[29px] top-0 w-[155px] -translate-y-1/2 bg-white py-3 text-center text-[13.76px] font-semibold"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="border-primary-color-400/30 text-primary-color-400 w-full rounded-[8.6px] border-2 p-[27px] text-[20.641px] font-semibold focus:outline-none"
          id={id}
          type={type}
        />
      </div>
    </>
  );
}

export default Registration;
