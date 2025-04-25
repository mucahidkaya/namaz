'use client';
import { Card, Container, Header, HomeIcon, Wrapper } from './style';
import { useRouter, useParams } from 'next/navigation';

export default function Gender() {
  const router = useRouter();
  const params = useParams();
  return (
    <Container>
      <Header>Vakit Seç</Header>

      <Wrapper>
        <Card onClick={() => router.push(`/${params.cinsiyet}/sabah`)}>Sabah</Card>
        <Card onClick={() => router.push(`/${params.cinsiyet}/ogle`)}>Öğle</Card>
        <Card onClick={() => router.push(`/${params.cinsiyet}/ikindi`)}>İkindi</Card>
        <Card onClick={() => router.push(`/${params.cinsiyet}/aksam`)}>Akşam</Card>
        <Card onClick={() => router.push(`/${params.cinsiyet}/yatsi`)}>Yatsı</Card>
      </Wrapper>

      <HomeIcon onClick={() => router.replace('/')} />
    </Container>
  );
}
