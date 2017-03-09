---
layout: post
title: Facebook lança “Prophet” – ferramenta livre de previsão para R e para Python
resumo: Lançado pelo programa open source do Facebook, o "Prophet" promete auxiliar na solução de problemas como o planejamento de capacidade de infraestrutura de computadores.
date: 2017-03-08
author: Pedro Ferreira
image: /images/prophet-logo.png" 
tags: 
 - Big Data e data science
 - Facebook Prophet
 - R e Python
 - Previsão
---


![facebook - Prophet](/images/prophet.png){:class="img-responsive" .center-image}



<br>

<p align="justify">
O Facebook lançou o pacote para R e Python humildemente chamado de “Prophet” [profeta, em tradução livre]. A ideia é auxiliar na solução de problemas 
como o planejamento de capacidade de infraestrutura de computadores. Para isso, como input, o pacote recebe grandes séries temporais 
[diárias ou mensais, de preferência com um ano ou mais] e faz a previsão utilizando modelos tradicionais como Holt Winters e Box & Jenkins. 
Ainda segundo o time do Facebook, o pacote lida bem com questões como sazonalidade, feriados que podem afetar tendências (como Black Friday e Natal), 
eventos que podem ter impactos significativos (como lançar um novo site ao tentar prever o tráfego do site), outliers e missing data.
</p>

<div class="bs-callout bs-callout-success"><a href="https://facebookincubator.github.io/prophet/docs/quick_start.html" target="blank"><p align="center"><strong>Acesse a página do Prophet!</strong></p></a></div>

![facebook - Prophet](/images/prophet-grafico1.png){:class="img-responsive" .center-image}

<div class="bs-callout bs-callout-success"><a href="https://github.com/facebookincubator/prophet" target="blank"><p align="center"><strong>Acesse o repositório do Prophet do GitHub!</strong></p></a></div>

<p align="justify">
Na página do Prophet, eles ensinam como utiliza-lo [é bem fácil, diga-se de passagem] e destacam algumas de suas funcionalidades. Eu testei o 
pacote e achei bem interessante. Para os leitores mais preguiçosos, eu estou disponibilizando o código no meu Github [abaixo].
</p>

<div class="bs-callout bs-callout-success"><a href="https://github.com/pedrocostaferreira/BigDataDataScience/blob/master/TimeSeries/Prophet/prophet.R" target="blank"><p align="center"><strong>Exercício Prophet</strong>
</p></a></div>






<p align = "justify">
É interessante observar que, além das ideias destacadas pelo Facebook, esse pacote pode ser útil para setores que lidam constantemente com 
problemas de sazonalidade e feriados, como o setor elétrico. Vale a pena observar a performance do mesmo para prever variáveis como o consumo 
horário/diário de energia elétrica e a série temporal de carga sendo ajustada sazonalmente pelo Prophet. Outro setor que pode se beneficiar é o 
setor de Marketing. Com as previsões do pacote, fica mais fácil observar os efeitos de uma campanha de marketing e/ou o lançamento de um novo 
produto nas vendas de uma empresa, por exemplo.
</p>


<div class="bs-callout bs-callout-success"><a href=" https://research.fb.com/prophet-forecasting-at-scale/" target="blank"><p align="center"><strong>Prophet: forecasting at scale [Vale a pena a leitura!]</strong>
</p></a></div>

<br>