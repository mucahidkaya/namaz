import { Baloo_Paaji_2 } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import StyledComponentsRegistry from './registry';

const balooPaaji2 = Baloo_Paaji_2({
  variable: '--font-baloo-paaji2',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Namaz Yardımcım',
  description: 'Namaz kılınışı öğretme uygulaması',
};

// Return a list of `params` to populate the [slug] dynamic segment

const genderList = ['male', 'female'];
const timeList = ['sabah', 'ogle', 'ikindi', 'aksam', 'yatsi'];

export async function generateStaticParams() {
  const params = [];

  for (const cinsiyet of genderList) {
    for (const vakit of timeList) {
      params.push({ cinsiyet, vakit });
    }
  }

  return params;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="http://localhost:8097"></Script>
      </head>
      <StyledComponentsRegistry>
        <body className={` ${balooPaaji2.variable}`}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
