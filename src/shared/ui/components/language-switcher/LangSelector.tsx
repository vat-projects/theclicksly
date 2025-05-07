'use client';

import { usePathname, useRouter } from '@/i18n/navigation';

export default function LangSelector({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">EN</option>
      <option value="de">DE</option>
      <option value="it">IT</option>
    </select>
  );
}