import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useSession, signOut } from "next-auth/react";
import { SignButton } from "./SignButton";

const Navigation = () => {
    const { data: session } = useSession();

    return (
      <Navbar fluid={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Note App</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {
          !session
          ?
          <SignButton />
          : 
          <Dropdown arrowIcon={false} inline={true} label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />
          }>
            <Dropdown.Header>
              <span className="block text-sm">{session.user?.name}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => signOut()}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">
            About
          </Navbar.Link>
          {
          session
          &&
          <>
          <Navbar.Link href="/notes">
            Notes
          </Navbar.Link>
          <Navbar.Link href="/notes/create">
            Create Notes
          </Navbar.Link>
          </>
          }
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;