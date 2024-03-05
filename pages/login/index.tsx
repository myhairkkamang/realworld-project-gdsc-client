import AuthErrors from "@/components/auth/auth-error";
import LoginCredential from "@/models/login.model";
import { login } from "@/services/login/login.service";
import { useState } from "react";
import Link from "next/link";

export default function Signin() {
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
 
  async function submit(events: React.FormEvent<HTMLFormElement>) {
    events.preventDefault();

    const credentials: LoginCredential = {
      email: (events.target as HTMLFormElement).email.value(),
      password: (events.target as HTMLFormElement).password.value(),
    };

    const response = await login(credentials);
    const data = await response.json();

    if (!response.ok) {
      setErrors(data.errors);
    } else {
      //set user credential
    }
  }

  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link href="/register">Need an account?</Link>
              </p>

              <AuthErrors errors={errors} />

              <form>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
