import React, { useState } from 'react';
import {
  Container,
  Button,
  Typography,
  Paper,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import './main.css';

const questions = [
      {
        question: 'O que significa Mobile-First?',
        options: ['Desenvolver para dispositivos móveis primeiro', 'Desenvolver para desktop primeiro', 'Usar frameworks responsivos', 'Nenhuma das opções acima'],
        answer: 'Desenvolver para dispositivos móveis primeiro',
        justification: 'A abordagem Mobile-First significa que o design e desenvolvimento começam com dispositivos móveis e depois se expande para telas maiores.',
      },
      {
        question: 'Qual a importância da responsividade?',
        options: ['Melhorar a experiência do usuário', 'Aumentar o tempo de carregamento', 'Reduzir o número de visitantes', 'Diminuir o SEO'],
        answer: 'Melhorar a experiência do usuário',
        justification: 'A responsividade é crucial para garantir que o site funcione bem em diferentes tamanhos de tela, melhorando assim a experiência do usuário.',
      },
      {
        question: 'O que é usabilidade?',
        options: ['Facilidade de uso de um produto', 'Aparência do produto', 'Funcionalidade do produto', 'Velocidade do produto'],
        answer: 'Facilidade de uso de um produto',
        justification: 'Usabilidade refere-se à eficiência e eficácia com que os usuários podem usar um produto.',
      },
      {
        question: 'Qual é uma prática recomendada para designs responsivos?',
        options: ['Usar unidades fixas', 'Utilizar media queries', 'Desconsiderar a acessibilidade', 'Usar apenas imagens grandes'],
        answer: 'Utilizar media queries',
        justification: 'Media queries permitem que o design se adapte a diferentes tamanhos de tela e dispositivos.',
      },
      {
        question: 'O que significa a sigla SEO?',
        options: ['Search Engine Optimization', 'Social Engagement Optimization', 'Site Efficiency Organization', 'Systematic Engineering Order'],
        answer: 'Search Engine Optimization',
        justification: 'SEO é o processo de otimizar um site para que ele apareça melhor nos resultados de pesquisa.',
      },
      {
        question: 'Quais são os princípios de design centrado no usuário?',
        options: ['Acessibilidade, usabilidade e design responsivo', 'Economia, estética e funcionalidade', 'Exclusividade, usabilidade e rapidez', 'Nenhuma das opções acima'],
        answer: 'Acessibilidade, usabilidade e design responsivo',
        justification: 'Esses princípios ajudam a garantir que todos os usuários possam acessar e usar um produto com facilidade.',
      },
      {
        question: 'Por que a otimização para dispositivos móveis é importante?',
        options: ['Aumenta a velocidade de carregamento', 'Melhora o SEO', 'Aumenta a satisfação do usuário', 'Todas as opções acima'],
        answer: 'Todas as opções acima',
        justification: 'A otimização para dispositivos móveis é importante porque melhora a velocidade, o SEO e a satisfação do usuário.',
      },
      {
        question: 'Qual ferramenta é comumente usada para testar responsividade?',
        options: ['Google Chrome DevTools', 'Photoshop', 'Figma', 'Sketch'],
        answer: 'Google Chrome DevTools',
        justification: 'DevTools permite que os desenvolvedores testem como seus sites se comportam em diferentes tamanhos de tela.',
      },
      {
        question: 'O que são breakpoints?',
        options: ['Pontos em que o layout muda', 'Valores de usabilidade', 'Tamanhos de fonte', 'Designs de impressão'],
        answer: 'Pontos em que o layout muda',
        justification: 'Breakpoints são pontos definidos em CSS onde o layout de um site muda com base no tamanho da tela.',
      },
      {
        question: 'Qual a diferença entre responsividade e adaptabilidade?',
        options: ['Responsividade se ajusta automaticamente, adaptabilidade se ajusta com base no dispositivo', 'Adaptabilidade é melhor', 'Não há diferença', 'Ambos são iguais'],
        answer: 'Responsividade se ajusta automaticamente, adaptabilidade se ajusta com base no dispositivo',
        justification: 'Responsividade usa uma única versão do site que se ajusta, enquanto adaptabilidade pode ter diferentes layouts para diferentes dispositivos.',
      },
    ];

    export default function QuizApp() {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [showResult, setShowResult] = useState(false);
        const [darkMode, setDarkMode] = useState(false);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
      
        const handleAnswer = (option) => {
          setSelectedAnswer(option);
          if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
          }
        };
      
        const handleNext = () => {
          setSelectedAnswer(null);
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setShowResult(true);
          }
        };
      
        const handleRestart = () => {
          setCurrentQuestion(0);
          setScore(0);
          setShowResult(false);
          setSelectedAnswer(null);
        };
      
        const toggleDarkMode = () => {
          setDarkMode(!darkMode);
        };
      
        return (
          <Container maxWidth="md">
            <Button variant="contained" onClick={toggleDarkMode} style={{ marginBottom: '20px' }}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
            
            <Paper
              className={darkMode ? 'dark' : 'light'}
              elevation={3}
              style={{
                padding: '20px',
                marginTop: '20px',
                backgroundColor: darkMode ? '#121212' : '#f0f0f0',
                color: darkMode ? 'white' : 'black'
              }}
            >
              {showResult ? (
                <Card
                  style={{
                    backgroundColor: darkMode ? '#313131' : 'white', 
                    color: darkMode ? 'white' : 'black'
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" style={{ color: darkMode ? 'white' : 'black' }}> 
                      Pontuação:  {score}/{questions.length}
                    </Typography>
                    <Typography variant="h5" style={{ color: darkMode ? 'white' : 'black' }}> 
                      Obrigada por participar!
                    </Typography>
                    <Button variant="contained" onClick={handleRestart} style={{ marginTop: '20px' }}>
                      Reiniciar Quiz
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  style={{
                    backgroundColor: darkMode ? '#313131' : 'white', 
                    color: darkMode ? 'white' : 'black' 
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      style={{ color: darkMode ? 'white' : 'black' }} 
                    >
                      {questions[currentQuestion].question}
                    </Typography>
                    {questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        onClick={() => handleAnswer(option)}
                        style={{
                          margin: '5px 0',
                          borderColor: darkMode ? 'white' : 'black', 
                          color: darkMode ? 'white' : 'black' 
                        }}
                      >
                        {option}
                      </Button>
                    ))}
                    {selectedAnswer && (
                      <>
                        <Divider style={{ margin: '10px 0' }} />
                        <Typography style={{ color: darkMode ? 'white' : 'black' }}> 
                          Resposta correta: <strong>{questions[currentQuestion].answer}</strong>
                          <br />
                          Justificativa: {questions[currentQuestion].justification}
                        </Typography>
                        <Button variant="contained" onClick={handleNext} style={{ marginTop: '10px' }}>
                         Próxima pergunta
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}
            </Paper>
          </Container>
        );
      }