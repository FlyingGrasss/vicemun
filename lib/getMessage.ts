interface MessageTemplates {
  en: {
    email_exists: string;
    verification_email_sent: string;
    verification_successful: string;
    invalid_code: string;
  };
  tr: {
    email_exists: string;
    verification_email_sent: string;
    verification_successful: string;
    invalid_code: string;
  };
}

export default function getMessage(
  lang: 'en' | 'tr',
  key: keyof MessageTemplates['en']
): string {
  const messages: Record<'en' | 'tr', MessageTemplates['en']> = {
    en: {
      email_exists: 'You have already applied and been verified.',
      verification_email_sent: 'Verification email sent. Please check your inbox and spam.',
      verification_successful: 'Verification successful. Thank you!',
      invalid_code: 'Invalid verification code. Please try again.'
    },
    tr: {
      email_exists: 'Basvurunuz zaten yapilmis ve dogrulanmistir.',
      verification_email_sent: 'Dogrulama e-postasi gonderildi. Lutfen gelen kutunuza ve spam bolumune bakin.',
      verification_successful: 'Dogrulama basarili. Tesekkurler!',
      invalid_code: 'Gecersiz dogrulama kodu. Lutfen tekrar deneyin.'
    }
  };

  return messages[lang][key];
}
