import Link from "next/link";
import { useRouter } from "next/router";

const NextLink = () => {
  const router = useRouter();
  const activeLink = router.pathname;

  return <Link href="/">dasdsa</Link>;
};

export default NextLink;
