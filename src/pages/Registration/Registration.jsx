const registrationInputData = [
  { type: "email", label: "Email Address", id: "email" },
  { type: "text", label: "Full Name", id: "name" },
  { type: "password", label: "Password", id: "password" },
];

function Registration() {
  return (
    <div className="font-nunito">
      <div className="flex">
        <div className="w-full xl:w-1/2">
          <div className="flex min-h-screen flex-col items-center justify-center bg-registration-page bg-cover bg-center bg-no-repeat p-5 xl:items-end xl:bg-none">
            <div className="rounded-lg bg-white p-5 xl:mr-[70px] xl:p-0">
              <h1 className="mb-[13px] text-[34px] font-bold leading-tight text-primary-color-400">
                Get started with easily register
              </h1>
              <p className="mb-8 text-[20.6px] opacity-60 md:mb-[62px]">
                Free register and you can enjoy it
              </p>
              <form className="mx-auto flex max-w-[370px] flex-col gap-y-8 md:gap-y-[57px] xl:mx-0">
                {registrationInputData.map((item, index) => (
                  <RegistrationInput
                    key={index}
                    type={item.type}
                    label={item.label}
                    id={item.id}
                  />
                ))}
                <button className="rounded-[86px] bg-primary-accent py-5 text-[20.64px] font-semibold text-white duration-200 hover:bg-blue-800">
                  Sign up
                </button>
              </form>
              <div className="mx-auto mt-[20px] max-w-[370px] text-center font-open-sans xl:mx-0">
                <p className="text-[13.338px] text-primary-color-400">
                  Already have an account ?{" "}
                  <a className="font-bold text-secondary-accent" href="">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 bg-registration-page bg-cover bg-center bg-no-repeat xl:block"></div>
      </div>
    </div>
  );
}

function RegistrationInput({ type, label, id }) {
  return (
    <>
      <div className="relative">
        <label
          className="absolute left-[29px] top-0 w-[155px] -translate-y-1/2 bg-white text-center text-[13.76px] font-semibold text-primary-color-400/70"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="w-full rounded-[8.6px] border-2 border-primary-color-400/30 p-4 text-[20.641px] font-semibold text-primary-color-400 focus:outline-none md:p-[27px]"
          id={id}
          type={type}
        />
      </div>
    </>
  );
}

export default Registration;
