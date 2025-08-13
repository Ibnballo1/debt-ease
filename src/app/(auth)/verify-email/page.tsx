import { VerifyEmailForm } from "./verify-email-form";

const VerifyEmailPage = () => {
  return (
    <div className="flex-1/2 flex flex-col items-center justify-center gap-4">
      <h1 className="font-medium">
        Please enter the one-time password sent to your email.
      </h1>
      <VerifyEmailForm />
    </div>
  );
};

export default VerifyEmailPage;
