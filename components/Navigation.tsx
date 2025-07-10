export default function Navigation( { children } ) {

  //* TODO: define the links
  const NAV_LINKS = [
    {href: "/about", text: "ABOUT" }, 
    {href: "/security", text: "SECURITY"}
    {href: "https://google.com", text: "EXTERNAL", external: true,}
  ]
  return (
    <div> 
      <div></div> //TODO: create navbar
      <div className="min-h-screen"> //? what is min-h-screen ?
        {children}
      </div> //TODO: place children
      <div></div> //TODO: create footer
    </div>
  );
}

/* 
! Structure
* Define the links as a dictionary with /path and label. 
  - { href: "/security", label: "Security" },
  - { href: "/press", label: "Press" },

* use .map to create the links in the navigation bar
  ?{NAV_LINKS.map((link) => (
  ?              <Link
  ?                key={link.label}
  ?                href={link.href}
  ?                {...(link.external && {
  ?                  rel: "noopener noreferrer",
  ?                  target: "_blank",
  ?                })}

* create wrapper for the page content
  ? <div className="min-h-screen">{children}</div>

* create a footer
  ? <div className="container w-full pt-8"></div>

! YOU CAN DO IT!
*/