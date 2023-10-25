import React from 'react';

import { Container, ButtonContainer, Title, Subtitle } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonClose } from '../../components/ButtonClose';

export function Main() {
    return (
        <Container>
            <Title>Tarefa 009 </Title>
            <Title>Desenvolvimento Mobile</Title>
            <Subtitle>Insira seus dados</Subtitle>

            <Input
                placeholder="ID"
                keyboardType="numeric"
            />

            <Input
                placeholder="Descrição"
                keyboardType='default'
            />

            <Input

                placeholder="Data"
                keyboardType="number-pad"
            />

            <Input
                placeholder="E-mail"
                keyboardType="email-address"
            />

            <ButtonContainer>
                <Button title="Entrar" onPress={() => { }} />
                <ButtonClose title="Fechar" onPress={() => { }} />
            </ButtonContainer>

        </Container>
    );
}