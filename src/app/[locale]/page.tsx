import { Link } from '../../navigation';

import {useTranslations} from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return <h1>
    <Link href={"/about"} legacyBehavior passHref>
      <a>About</a>
    </Link>
  </h1>;
}
