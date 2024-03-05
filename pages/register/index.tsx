import AuthErrors from "@/components/auth/auth-error";
import { AuthContext } from "@/context/auth.context";
import RegisterCredential from "@/models/register.model";
import { register } from "@/services/auth/auth.service";
import { setToken } from "@/utils/token.utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Signup() {
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  async function submit(events: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    events.preventDefault();

    const credentials: RegisterCredential = {
      username: (events.target as HTMLFormElement).username.value,
      email: (events.target as HTMLFormElement).email.value,
      password: (events.target as HTMLFormElement).password.value,
    };

    const response = await register(credentials);
    const data = await response.json();

    if (!response.ok) {
      setErrors(data.errors);
    } else {
      setUser(data.user);
      setToken(data.user.token);
      router.push("/");
      console.log("signup sucessful!");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link href="/login">Have an account?</Link>
              </p>

              <AuthErrors errors={errors} />

              <form onSubmit={submit}>
                <fieldset className="form-group">
                  <input
                    name="username"
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="email"
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    name="password"
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={isLoading}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
