import { Baloo_Paaji_2 } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const balooPaaji2 = Baloo_Paaji_2({
  variable: '--font-baloo-paaji2',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Namaz Yardımcım',
  description: 'Namaz kılınışı öğretme uygulaması',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="http://localhost:8097"></Script>
      </head>
      <body className={` ${balooPaaji2.variable}`}>{children}</body>
    </html>
  );
}
