---
layout: post
title: A Evolução do IDH brasileiro
author: Fernando Teixeira
date: 2016-09-22
resumo: "Uma breve análise da evolução do índice de desenvolvimento humano do Brasil."
image : /images/idh.jpg
tags:
    - IDH
    - Brasil
    - Economia
---
{% highlight r %}
```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
if (!require("pacman")) install.packages("pacman")
pacman::p_load(ggplot2, dplyr, stargazer, htmlTable, 
               xtable, zoo, tidyr, DT)
```
{% endhighlight %}

O valor do IDH de todos os países disponíveis na base de dados das [nações unidas](http://hdr.undp.org/en/data) foi capturado com o objetivo de melhor compreender a evolução do desenvolvimento humano nacional ao longo do tempo. Os países sul-americanos serão utilizados como parâmetro por estes apresentarem condições semelhantes às nossas, porém as observações não se limitarão à comparação a estes.

### Evolução do IDH - América do Sul

{% highlight %}

```{r, message=FALSE, warning=FALSE, echo=FALSE}
setwd("C:/Users/fernando.teixeira/Dropbox/idh/")
hdi=read.csv("hdi.csv", sep=";")
thdi = t(hdi[,3:13])
row.names(thdi) = c("1980","1985","1990","1995","2000","2005","2010","2011","2012","2013","2014")
colnames(thdi) = hdi[,2]




thdi2 = t(na.omit(t(thdi)))
colunas = colnames(thdi2)
thdi2 = data.frame(thdi2)
colunas=substr(colunas,2,nchar(colunas))
colnames(thdi2) = colunas

```
{% endhighlight %}

{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE}   
hdiv=read.csv("hdi_values.csv", sep=",")
thdiv = t(hdiv[,3:13])
row.names(thdiv) = c("1980","1985","1990","1995","2000","2005","2010","2011","2012","2013","2014")
colnames(thdiv) = hdiv[,2]


thdiv2 = t(na.omit(t(thdiv)))
colunas = colnames(thdiv2)
thdiv2 = data.frame(thdiv2)
colunas=substr(colunas,2,nchar(colunas))
colnames(thdiv2) = colunas
newthdiv2 = data.frame(thdiv2)
colnames(newthdiv2)[101] = "Venezuela"



sulamerica = c("Brazil","Colombia","Argentina","Peru","Venezuela","Chile","Ecuador","Paraguay","Uruguay")


as = matrix(ncol = 9, nrow = 11)

for (i in 1:length(sulamerica)){
    for (j in 1: length(newthdiv2[1,]))
    if ( colnames(newthdiv2)[j] == sulamerica[i])
    as[,i] = newthdiv2[,j]
    
} 

as = data.frame(as)
colnames(as) = sulamerica

```
{% endhighlight %}
{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE}   
    autoplot(zoo(as), facet=NULL) + geom_point() +
        labs(color="Países")+
        ylab("IDH")+
        theme(axis.text.x = element_text(face="plain", color="black", size=9, angle=0))+
        #        coord_cartesian(xlim=c(1980,2014))
        #ylim(40, 100) +
        #scale_y_reverse(limits = c(0.85,0.54)) +
        ggtitle("Gráfico 1: IDH América do Sul") +
        scale_x_continuous(name ="Ano", 
                           breaks = c(1,2,3,4,5,6,7,8,9,10,11),
                           labels=c("1980","1985","1990","1995","2000","2005",
                                    "2010","2011","2012","2013","2014"))
        
```
{% endhighlight %}

* Neste primeiro gráfico é possível observar a evolução comparativa do IDH brasileiro contra seus pares sul-americanos. O país salta de um IDH de 0.547 em 1980 para um índice de 0.755 no final de 2014. Por esta fotografia, o país sai da nona e última posição para o quinto lugar. Percentualmente a evolução do Brasil foi de 38%, que também é o maior valor do período. O único outro país cuja evolução no período foi maior que 30% foi o Chile, cujo IDH avançou pouco mais do que este valor (Tabela 1).

&nbsp;
&nbsp;
&nbsp;
&nbsp;
{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE, results='asis', fig.align='center'}

    diff = as[11,] - as[1,]
    perc = round(100*(as[11,] - as[1,])/as[1,],2)
    paises = rbind(diff, perc)
    rownames(paises) = c("<b>Valor absoluto</b>", "<b>Percentual</b>")
    
    star= capture.output(htmlTable(paises, type = "html", caption = "<center><font size='4'><b>Tabela 1</b>: Evolução IDH</font></center>"))
    cat("<center>",star[1:2],  
        '<col width="120"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70">',
        star[3:(length(star))],
        "</center>")
    
    
```
{% endhighlight %}
&nbsp;
&nbsp;
&nbsp;
&nbsp;

* Estes números deveriam indicar um futuro excelente para o desenvolvimento humano do país, entretanto ao efetuarmos uma suavização dos valores pelo método de LOESS é clara a inflexão nas curvas a partir do ano 2000, quando o crescimento do IDH começa a desacelerar.



### Método de suavização: LOESS

{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE, fig.lp="foo"}   

    idh = gather(cbind.data.frame(id=seq_len(nrow(as)), as), variable, value, -id)

    
    ggplot(idh, aes(x = id, y = value, group = variable, colour = variable)) + 
        geom_smooth(se=FALSE) +
        
        labs(color="Países")+
        ylab("IDH")+
        theme(axis.text.x = element_text(face="plain", color="black", size=9, angle=0))+
        #        coord_cartesian(xlim=c(1980,2014))
        #ylim(40, 100) +
        #scale_y_reverse(limits = c(0.85,0.54)) +
        ggtitle("Gráfico 2: IDH Suavizado") +
        geom_vline(xintercept = 5, lty=2, col = 'red') +
        scale_x_continuous(name ="Ano", 
                           breaks = c(1,2,3,4,5,6,7,8,9,10,11),
                           labels=c("1980","1985","1990","1995","2000","2005",
                                    "2010","2011","2012","2013","2014"))

```
{% endhighlight %}

* Entretanto, apesar da enorme evolução do IDH do Brasil no período é comum ver notícias falando em "queda no ranking". Em geral, estas notícias fazem referência à classificação dos países no mundo quando é utilizado por referência o índice de desenvolvimento humano. Estas notícias podem ser encontradas em rápida consulta ao Google. Levanta-se então a questão: estaria o país avançando em relação à américa do sul, porém perdendo terreno para o resto do mundo? Analisamos esta possibilidade a seguir.



 {% highlight %}   
```{r, message=FALSE, warning=FALSE, echo=FALSE}    
    
    newthdi = matrix(ncol = length(thdi2[1,]), nrow = length(thdi2[,1]))
    
    for (i in 1:length(thdi2[1,])){
        
        if(thdi2[1,i] <= thdi2$Brazil[1]){
            newthdi[,i] = thdi2[,i]
        }
        
    }
    
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colnames(thdi2)
    newthdi = t(na.omit(t(newthdi)))
    newthdi2 = matrix(ncol = length(newthdi[1,]), nrow = length(newthdi[,1]))
    colunas2 = colnames(newthdi)
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colunas2
    
    for (i in 1:length(newthdi[1,])){
        
        if(newthdi[length(newthdi[,1]),i] >= newthdi$Brazil[length(newthdi[,1])]){
            newthdi2[,i] = newthdi[,i]
        }
        
    }
    
    colnames(newthdi2) = colunas2
    newthdi2 = t(na.omit(t(newthdi2)))
    passados = newthdi2
    
    passados = data.frame(passados)

```
{% endhighlight %}

### Ranking

* Apesar da clara queda no ranking, o Brasil ultrapassou e foi ultrapassado na corrida pelo desenvolvimento por alguns 'concorrentes'. Neste período o país perdeu posição para apenas um país: Turquia. Isto mesmo que você leu, o Brasil foi ultrapassado apenas pela Turquia no ranking do IDH de 1980 até até 2014 de acordo com os dados divulgados pelas Nações Unidas. Mas quantos países o Brasil deixou para trás no período? Um total de quatorze. São eles: Albânia, Colômbia, Equador, Fiji, Gabão, Iraque, Jamaica, Jordânia, Líbia, Paraguai, Peru, Filipinas, Samoa e Tonga. Nada muito expressivo, porém uma performance razoável.

* A queda brasileira acontece, portanto, pela entrada de novos países no índice. Um total de 84 países foram inseridos no ranking durante a janela temporal que vai de 1980 até 2014. Só nos últimos 15 anos (a partir de 2000) entraram 22 países.

* Como avaliamos que há uma redução na velocidade de crescimento a partir de 2000 (Gráfico 2), reavaliamos a performance do Brasil para o período. Os resultados não são tão animadores. O Brasil passou seis países (Tabela 2) e foi passado por sete (Tabela 3).

{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE}

    newthdi = matrix(ncol = length(thdi2[1,]), nrow = length(thdi2[,1]))
    
    for (i in 1:length(thdi2[1,])){
        
        if(thdi2[1,i] >= thdi2$Brazil[1]){
            newthdi[,i] = thdi2[,i]
        }
        
    }
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colnames(thdi2)
    newthdi = t(na.omit(t(newthdi)))
    newthdi2 = matrix(ncol = length(newthdi[1,]), nrow = length(newthdi[,1]))
    colunas2 = colnames(newthdi)
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colunas2
    
    for (i in 1:length(newthdi[1,])){
        
        if(newthdi[length(newthdi[,1]),i] <= newthdi$Brazil[length(newthdi[,1])]){
            newthdi2[,i] = newthdi[,i]
        }
        
    }
    
    colnames(newthdi2) = colunas2
    newthdi2 = t(na.omit(t(newthdi2)))
    passaram = newthdi2
    
    passaram = data.frame(passaram)

```
{% endhighlight %}

{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE, eval=TRUE}

thdi = t(hdi[,3:13])
row.names(thdi) = c("1980","1985","1990","1995","2000","2005","2010","2011","2012","2013","2014")
colnames(thdi) = hdi[,2]
thdi = thdi[5:11,]

thdi2 = t(na.omit(t(thdi)))
colunas = colnames(thdi2)
thdi2 = data.frame(thdi2)
colunas=substr(colunas,2,nchar(colunas))
colnames(thdi2) = colunas

### Países que o Brasil passou
    newthdi = matrix(ncol = length(thdi2[1,]), nrow = length(thdi2[,1]))
    
    for (i in 1:length(thdi2[1,])){
        
        if(thdi2[1,i] <= thdi2$Brazil[1]){
            newthdi[,i] = thdi2[,i]
        }
        
    }
    
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colnames(thdi2)
    newthdi = t(na.omit(t(newthdi)))
    newthdi2 = matrix(ncol = length(newthdi[1,]), nrow = length(newthdi[,1]))
    colunas2 = colnames(newthdi)
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colunas2
    
    for (i in 1:length(newthdi[1,])){
        
        if(newthdi[length(newthdi[,1]),i] >= newthdi$Brazil[length(newthdi[,1])]){
            newthdi2[,i] = newthdi[,i]
        }
        
    }
    
    colnames(newthdi2) = colunas2
    newthdi2 = t(na.omit(t(newthdi2)))
    passados = newthdi2
    
    passados = data.frame(passados)
    colnames(passados)[7] = c("Saint Lucia")
    row.names(passados) = c(2000,2005,2010,2011,2012,2013,2014)
    
```
{% endhighlight %}

{% highlight %}

```{r, message=FALSE, warning=FALSE, echo=FALSE, results='asis'}
    newthdi = matrix(ncol = length(thdi2[1,]), nrow = length(thdi2[,1]))
    
    for (i in 1:length(thdi2[1,])){
        
        if(thdi2[1,i] >= thdi2$Brazil[1]){
            newthdi[,i] = thdi2[,i]
        }
        
    }
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colnames(thdi2)
    newthdi = t(na.omit(t(newthdi)))
    newthdi2 = matrix(ncol = length(newthdi[1,]), nrow = length(newthdi[,1]))
    colunas2 = colnames(newthdi)
    
    newthdi = data.frame(newthdi)
    colnames(newthdi) = colunas2
    
    for (i in 1:length(newthdi[1,])){
        
        if(newthdi[length(newthdi[,1]),i] <= newthdi$Brazil[length(newthdi[,1])]){
            newthdi2[,i] = newthdi[,i]
        }
        
    }
    
    colnames(newthdi2) = colunas2
    newthdi2 = t(na.omit(t(newthdi2)))
    passaram = newthdi2
    
    passaram = data.frame(passaram)
    colnames(passaram) = c("Belarus","Brazil","Iran","Kazakhstan","Mauritius","Sri Lanka","Turkey","Venezuela")
    row.names(passaram) = c(2000,2005,2010,2011,2012,2013,2014)
    
 
        star2= capture.output(htmlTable(passados, type = "html", caption = "<center><font size='4'><b>Tabela 2</b>: Países passados pelo Brasil</font></center>"))
    cat("<center>", star2[1:2],
        '<col width="50"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70">', 
        star2[3:(length(star2))], "</center>")
    
```    
{% endhighlight %}    

* Os resultados são particularmente preocupantes se observarmos que alguns dos países que passaram o Brasil são a Turquia e a Venezuela. O primeiro por ser um país com uma economia e população relativamente grandes e, por conseguinte, ter desafios a serem superados de magnitude semelhante à nossa. O segundo por ser um vizinho nosso, sujeito assim a condições geopolíticas semelhantes às brasileiras. 

* Pelo outro lado, os países que passamos são pouco relevantes na economia mundial, tais como Santa Lúcia, ou então envolvidos em (ou muito próximos à) guerra civil recente, caso da Líbia.

    
{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE, results='asis'}
        star3= capture.output(htmlTable(passaram, type = "html", caption = "<center><font size='4'><b>Tabela 3</b>: Países que passaram o Brasil</font></center>"))
    cat("<center>", star3[1:2],
        '<col width="50"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70"> <col width="70">', 
        star3[3:(length(star3))], "</center>")
    
    
```    
{% highlight %}


&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

* Fica claro pela Tabela 4 que o Brasil melhora relativamente ao resto do mundo. A tabela foi construída dividindo a posição do Brasil no ranking de um ano com o total de países rankeados. Ou seja, quanto menor o valor apresentado, mais próximo do topo do ranking o país se encontra. Porém, este método possui a falha de se, por exemplo, entrarem muitos países com desenvolvimento alto ou baixo.


&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

{% highlight %}

```{r, message=FALSE, warning=FALSE, echo=FALSE, results='asis'}

rr = matrix(nrow = 3, ncol = 1)

hdi$Country = as.character(hdi$Country)


rr[2] = filter(hdi, Country == ' Brazil')  %>%
    select(.,rank1) 
rr[[2]] = rr[[2]] / max(na.omit(hdi$rank1))

rr[1] = filter(hdi, Country == ' Brazil')  %>%
    select(.,HDI.Rank) 
rr[[1]] = rr[[1]] / max(hdi$rank11)

rr[3] = filter(hdi, Country == ' Brazil')  %>%
    select(.,rank5) 
rr[[3]] = rr[[3]] / max(na.omit(hdi$rank5))



rr2 = matrix(nrow = 3, ncol = 1)
rr2[1] = filter(hdiv, Country == ' Brazil')  %>%
    select(.,X2014) 
rr2[2] = filter(hdiv, Country == ' Brazil')  %>%
    select(.,X1980) 
rr2[3] = filter(hdiv, Country == ' Brazil')  %>%
    select(.,X2000) 

rr = data.frame(round(matrix(as.numeric(rr), ncol=3),digits = 4))
colnames(rr) = c("2014","1980", "2000")
rr = select(rr, `1980`, `2000`,`2014`)
row.names(rr) = c("Ranking Relativo")
star21= capture.output(htmlTable(rr, type = "html", caption = "<center><font size='3'><b>Tabela 4</b>:<br> Posição relativa</font></center>"))
    cat("<center>", star21[1:2],
        '<col width="130"> <col width="50"> <col width="50"> <col width="50">', 
        star21[3:(length(star21))], "</center>")
```
{% endhighlight %}

* Para contrapor esta limitação, testamos o IDH do Brasil contra o Top-10, tabela abaixo. Para tal, subtraímos o valor do IDH brasileiro do máximo, mínimo, mediana, quartis e média do Top-10 de forma a termos um quadro da evolução da diferença absoluta de IDH destes países quando comparados ao Brasil.     
    

{% highlight %}
```{r, message=FALSE, warning=FALSE, echo=FALSE, results='asis'}    
#TOP 10

hdiv$rank1 = hdi$rank1
teste = filter(hdiv, rank1 <= 10)
t1=summary(teste$X1980)
t1 = t1 - rr2[[2]]

teste2 = filter(hdiv, HDI.Rank <= 10)
t2=summary(teste2$X2014)
t2 = t2 - rr2[[1]]

hdiv$rank5 = hdi$rank5
teste3 = filter(hdiv, rank5 <= 10)
t21=summary(teste3$X2000)
t21 = t21 - rr2[[3]]

t3 = c(t1, t21 ,t2)
t3=matrix(t3, nrow = 6)
t3=data.frame(round(t3, digits = 2))
colnames(t3) = c("1980", "2000", "2014")
row.names(t3) = c("Min","1st Qu.","Median","Mean","3rd Qu.","Max")

star3= capture.output(htmlTable(t3, type = "html", caption = "<center><font size='3'><b>Tabela 5</b>:<br> Brasil x Top-10</font></center>"))
    cat("<center>", star3[1:2],
        '<col width="70"> <col width="50"> <col width="50"> <col width="50">', 
        star3[3:(length(star3))], "</center>")

``` 

{% endhighlight %}

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

* Por último, deixo uma tabela interativa com o ranking em 2014 de cada país e seus respectivos índices de desenvolvimento entre 1980 e 2014.


#### A tabela com o ranking

{% highlight %}

```{r, message=FALSE, warning=FALSE, echo=FALSE}
colnames(hdiv) = c("Rank","País","1980","1985","1990","1995","2000","2005",
                   "2010","2011","2012","2013","2014")

hdiv = hdiv[,c(2,1,3:13)]

datatable(hdiv, rownames = FALSE, options = list(pageLength = 25))
```
{% endhighlight %}