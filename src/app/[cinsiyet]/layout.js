// Return a list of `params` to populate the [slug] dynamic segment

const timeList = ['sabah', 'ogle', 'ikindi', 'aksam', 'yatsi'];

export async function generateStaticParams() {
  return timeList.map((timee) => ({ vakit: timee }));
}

export default async function RootLayout({ children }) {
  return <>{children}</>;
}
