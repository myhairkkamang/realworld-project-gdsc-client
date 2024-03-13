import { AuthContext } from "@/context/auth.context";
import { User } from "@/models/user.model";
import { updateUser } from "@/services/auth/auth.service";
import { clearToken } from "@/utils/token.utils";
import { NextRouter, useRouter } from "next/router";
import { SetStateAction, useContext, useEffect } from "react";

export default function SettingsPage() {
  const router: NextRouter = useRouter();
  const { user, setUser } = useContext(AuthContext);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const credentials = {
      image: (event.target as HTMLFormElement).image.value,
      username: (event.target as HTMLFormElement).usename.value,
      bio: (event.target as HTMLFormElement).bio.value,
      email: (event.target as HTMLFormElement).email.value,
      password: (event.target as HTMLFormElement).password.value,
    };

    const response = await updateUser(credentials);

    if (response.ok) {
      const data = await response.json();
      setUser(data.user);
      router.reload();
    }
  };

  const logout = () => {
    setUser(null);
    clearToken();
    router.push("/");
  };

  if (!user) {
    router.push("/login");
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={submit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={user?.image}
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    defaultValue={user?.username}
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    defaultValue={user?.bio || ""}
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Update Settings
                </button>
              </fieldset>
            </form>

            <hr />

            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
