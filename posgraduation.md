---
layout: default-alternative
title: Pos-graduation
---


## Traking e Projeção da inflação

<p>Em construção</p>

## Análise de Séries Temporais para o Setor Elétrico 
  
  <p>  Análise de séries temporais compreende métodos de análise de dados com o objetivo
de extrair estatísticas significativas e características relevantes dos dados. Na tomada de
decisão dos agentes econômicos, particularmente dos agentes do setor elétrico brasileiro
(SEB), dados de cargas e afluências, além de suas previsões, constituem informações
fundamentais para a gestão do negócio, bem como a do sistema elétrico, cujas ações
englobam: <strong>(i)</strong> planejamento da operação e expansão do sistema elétrico; <strong>(ii)</strong> determinação dos
preços da energia nos horizontes de curto, médio e longo prazo; <strong>(iii)</strong> participação em leilões
de energia através da compra/venda de contratos de geração de energia elétrica; <strong>(iv)</strong> análise do
comportamento do consumidor nos segmentos residencial, comercial e industrial; dentre
outras.
  </p>
  
  <p>
  Devido à natureza dos dados de cargas e afluências, não há um único método de
modelagem capaz de revelar todas as suas características. Nesse sentido, esse curso abordará
os principais métodos de modelagem de dados, enfatizando aspectos teóricos fundamentais e
aplicando os modelos aprendidos em estudos de caso que relacionam o “problema” do setor
com o modelo abordado</p>

<p>O curso pretende abordar os aspectos teóricos fundamentais de cada modelo, além de
exercícios, implementação de modelos utilizando pacotes computacionais, e exemplos de
modelos de previsão de carga, de afluências e de preços de energia elétrica no horizonte de
curto e médio prazo.</p>

<p>O curso proposto é indicado para profissionais do Setor Elétrico e para alunos de
graduação e pós-graduação em engenharia, estatística, matemática e áreas correlatas,
interessados em compreender os modelos que dão suporte à tomada de decisão dos agentes do
setor elétrico brasileiro.</p>

<p>Um importante diferencial do curso é o uso do pacote estatístico R, um dos softwares
mais utilizados por profissionais em análise de dados e que contempla diversas bibliotecas
com funções estatísticas e de séries temporais. Aos alunos, será oferecido o treinamento em 
algumas dessas bibliotecas, que permitirá ao aluno pôr em prática todo o conhecimento
teórico adquirido nas aulas. Para facilitar o aprendizado o aluno contará com apostilas e
vídeo-aulas, além de um referencial teórico para consultas. Ao fim do curso será oferecido um
certificado aos alunos que cumprirem as exigências mínimas de frequência.</p>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Programa</button>
  <div id="demo" class="collapse">
<h3>Programa <i class="fa fa-pencil-square-o" aria-hidden="true"></i></h3>

<h4>1. Revisão dos Conceitos Básicos de Estatística</h4>
<ul>
<li>1.1. Principais distribuições discretas e continuas</li>
<li>1.2. A distribuição NORMAL</li>
<li>1.3. Estimador de Máxima Verossimilhança</li>
<li>1.4. Intervalo de Confiança e Teste de Hipóteses</li>
<li>1.5. Análise e Interpretação de Métricas de Modelagem</li>
</ul>

<h4>2. Modelo Naïve e Médias Móveis</h4>


<h4>3. Modelos de Amortecimento Exponencial</h4>
<ul>
<li>3.1. Modelo de Holt</li>
<li>3.2. Modelo Holt Winters</li>
<li>3.3. Previsão e geração de cenários com modelos de Amortecimento Exponencial</li>
</ul>

<h4>4. Modelos ARIMA</h4>
<ul>
<li>4.1. Considerações Gerais</li>
<li>4.2. Processos Estocásticos</li>
<li>4.3. Autocovariância e Autocorrelação</li>
<li>4.4. Ruído Branco</li>
<li>4.5. Processos Auto-Regressivos - AR(p)</li>
<li>4.6. Processos Médias Móveis – MA(q)</li>
<li>4.7. Processos Auto-Regressivos de Médias Móveis – ARMA(p,q)</li>
<li>4.8. Função de Autocorrelação - FAC</li>
<li>4.9. Função de Autocorrelação Parcial – FACP</li>
<li>4.10. Identificação</li>
<li>4.11. Estimação</li>
<li>4.12. Diagnóstico dos Resíduos</li>
<li>4.13. Previsão e geração de cenários com modelos Box & Jenkins</li>
</ul>

<h4>5. Sazonalidade</h4>

<ul>
<li>5.1. Modelos SARIMA (p,d,q)x(P,D,Q)</li>
<li>5.2. Modelo Periódico Autorregressivo (PAR(p))</li>
</ul>

<h4>6. Processos Não Estacionários</h4>
<ul>
<li>6.1. Processos de Tendência e Diferença Estacionária</li>
<li>6.2. Passeios Aleatórios e Regressão Espúria</li>
<li>6.3. Testes de Raiz Unitária</li>
</ul>

<h4>7. Tratamento de observações atípicas (outliers)</h4>
<h4>8. Modelos SARIMA com Função de Transferência</h4>
<h4>9. Vetor Autorregressivo (VAR)</h4>
<ul>
<li>9.1. Especificação do Modelo Estacionário</li>
<li>9.2. Estimação do Modelo VAR em Forma Reduzida</li>
<li>9.3. Função de Resposta ao Impulso</li>
<li>9.4. VAR estrutural</li>
</ul>

<h4>10. Vetor de Correção de Erros (VEC)</h4>
<ul>
<li>10.1. Especificação do Modelo em Diferenças</li>
<li>10.2. Teste de Cointegração de Engle-Granger</li>
<li>10.3. Testes de Cointegração de Johansen</li>
<li>10.4. Estimação do Vetor de Cointegração</li>
<li>10.5. Estimação do Modelo VAR-vec</li>
</ul>

<h4>11. Exemplos de Modelos de Previsão</h4>
<ul>
<li>11.1. Previsão de Carga (modelos VAR-VEC)</li>
<li>11.2. Previsão da Energia Natural Afluente (Modelo PAR(p) e SARIMA com função de
transferência)</li>
<li>11.3. Previsão de Preços em Mercados de Energia Elétrica (modelos VAR-VEC)</li>
<li>11.4. Data Mining</li>
</ul>

<a href="https://pedroferreira.shinyapps.io/SeriesTemporais/_w_809d9698/ementa1.pdf" target="blank">
  <div class="bs-callout bs-callout-success">
 Clique aqui  para ver a ementa do curso em PDF. <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
  </div>
 </a>

</div>

<br>