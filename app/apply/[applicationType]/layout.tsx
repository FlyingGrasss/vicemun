// app/apply/[applicationType]/layout.tsx

import type { Metadata } from 'next';
import { CONFERENCE } from '@/lib/conference';

type Props = {
  params: Promise<{ applicationType: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { applicationType } = await params;
  const type = applicationType.charAt(0).toUpperCase() + applicationType.slice(1);
  
  return {
    title: `Apply - ${type}`,
    description: `Apply as a ${type} to be a part of VICEMUN'26.`,
    openGraph: {
      title: `Apply ${type}`,
      url: `${CONFERENCE.siteUrl}/apply/${applicationType}`,
    },
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
