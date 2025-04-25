'use client';
import { Card, Container, GenderImage, GenderText, Header, Wrapper, Note } from './style';
import { useRouter } from 'next/navigation';

export default function Home() {
  console.log('DEVMODE', process.env.DEVMODE);
  const router = useRouter();
  return (
    <Container>
      <Header>Namaz Sitesine Hoş Geldiniz</Header>
      <Header>Cinsiyet</Header>

      <Wrapper>
        <Card onClick={() => router.push('male')}>
          <GenderImage
            src={
              process.env.DEVMODE == 'dev'
                ? '/images/male/kiyam.png'
                : '/namaz/images/male/kiyam.png'
            }
          />{' '}
          <GenderText>Erkek</GenderText>
        </Card>
        <Card onClick={() => router.push('female')}>
          <GenderImage
            src={
              process.env.DEVMODE == 'dev'
                ? '/images/female/kiyam.png'
                : '/namaz/images/female/kiyam.png'
            }
          />
          <GenderText>Kadın</GenderText>
        </Card>
      </Wrapper>

      <Note>*Sadece farz namazlar anlatılmaktadır.</Note>
    </Container>
  );
}
