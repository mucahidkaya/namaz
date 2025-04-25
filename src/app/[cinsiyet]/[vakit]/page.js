"use client"
import { GetTime } from "@/app/Utils/helpers";
import { Card, Container, Header, Wrapper } from "./style";
import { useRouter,useParams } from 'next/navigation'
import NamazStepper from "@/app/Components/NamazStepper";

export default function Time() {
  const router = useRouter()
  const params = useParams();
  
  const time=GetTime(params.vakit)
  if (!time){
    return<Container>
    <Header>Vakit Bulunamadı</Header>
  </Container>
  }

  return (
    <Container>
      <Header>{time} Namazı Kılınışı</Header>

      <Wrapper>
        <NamazStepper gender={params.cinsiyet} time={params.vakit} />
        
      </Wrapper>
    </Container>
  );
}