export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              conduit
            </a>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                {/* <!-- Add "active" class when you're on that page" --> */}
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
