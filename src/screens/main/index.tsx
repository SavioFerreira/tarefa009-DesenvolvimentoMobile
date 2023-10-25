import React from 'react';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

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

            <Button title="Entrar" onPress={() => { }} />

            <Account>
                <ButtonText title="Recuperar senha" onPress={() => { }} />
                <ButtonText title="Criar minha conta" onPress={() => { }} />
            </Account>
        </Container>
    );
}