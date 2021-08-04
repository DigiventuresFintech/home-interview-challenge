import Link from "next/link";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/login" as="/login">
          <a>login</a>
        </Link>
      </li>
      <li>
        <Link href="/register" as="/register">
          <a>register</a>
        </Link>
      </li>
    </ul>
  );
}
