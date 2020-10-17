import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link as="/posts/micahel" href="/posts/[value]">
              Fisrt Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
