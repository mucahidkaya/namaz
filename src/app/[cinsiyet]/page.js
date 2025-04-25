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
        <Card onClick={() => router.push(`/sabah`)}>Sabah</Card>
        <Card onClick={() => router.push(`/ogle`)}>Öğle</Card>
        <Card onClick={() => router.push(`/ikindi`)}>İkindi</Card>
        <Card onClick={() => router.push(`/aksam`)}>Akşam</Card>
        <Card onClick={() => router.push(`/yatsi`)}>Yatsı</Card>
      </Wrapper>

      <HomeIcon onClick={() => router.replace('/')} />
    </Container>
  );
}
