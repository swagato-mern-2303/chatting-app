import { useState } from "react";

function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
              <form
                noValidate
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-[370px] flex-col gap-y-8 md:gap-y-[57px] xl:mx-0"
              >
                <RegistrationInput
                  type="email"
                  id="emial"
                  input={email}
                  onSetInput={setEmail}
                >
                  Email Adress
                </RegistrationInput>
                <RegistrationInput id="name" input={name} onSetInput={setName}>
                  Full Name
                </RegistrationInput>
                <RegistrationInput
                  type="password"
                  id="password"
                  input={password}
                  onSetInput={setPassword}
                >
                  Password
                </RegistrationInput>
                <button className="rounded-[86px] bg-primary-accent py-5 text-[20.64px] font-semibold text-white duration-200 hover:bg-blue-800">
                  Sign up
                </button>
              </form>
              <div className="mx-auto mt-[20px] max-w-[370px] text-center font-open-sans xl:mx-0">
                <p className="text-[13.338px] text-primary-color-400">
                  Already have an account ?{" "}
                  <a
                    className="hover:text-orange-8run00 font-bold text-secondary-accent"
                    href=""
                  >
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

function RegistrationInput({ type = "text", id, children, input, onSetInput }) {
  return (
    <>
      <div className="relative">
        <input
          id={id}
          value={input}
          onChange={(e) => onSetInput(e.target.value)}
          className="peer w-full rounded-[8.6px] border-2 border-primary-color-400/30 p-4 text-[20.641px] font-semibold text-primary-color-400 autofill:shadow-[inset_0_0_0_1000px_white] focus:outline-none md:p-[27px]"
          type={type}
        />
        <label
          htmlFor={id}
          style={{ pointerEvents: "none" }}
          className={`absolute left-[29px] w-[155px] -translate-y-1/2 cursor-text bg-white text-center text-[13.76px] font-semibold text-primary-color-400/70 duration-150 peer-focus:top-0 peer-focus:scale-100 ${
            input ? "top-0 scale-100" : "top-1/2 scale-125"
          }`}
        >
          {children}
        </label>
      </div>
    </>
  );
}

export default Registration;
