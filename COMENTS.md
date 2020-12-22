Para o ```backend``` utilizei uma arquitetura em camadas, separando visando ficar dentro do conceito de ```DDD```.

Para o ```frontend``` utilizei uma estrutura mais básica que visa manter separados os componentes das regras de negócios, onde os componentes entende exclusivamente de comportamentos de tela e os serviços implementam regras que possam ser aplicadas ao front.

Conforme solicitado no teste, utilizei ```Express``` na api e ```Postgres``` como banco de dados. 

Também utilizei as seguintes bibliotecas no backend:
 - Mocha
 - Chai
 - rimraf
 - body-parser
 - cors
 - pg
 - typeorm

No frontend utilizei o ```Vuetify``` conforme solicitado, além do ```axios``` para as requests.
 
Com mais tempo para execução do projeto, eu aplicaria por completo os testes no backend, pois como podem ver no código, os testes uintários não foram implementados, somente testes de integração.

Também estudaria melhor o ```Vue``` e mais especificamente o ```Vuetify``` pois, como eu nunca havia trabalhado com Vue, sei que várias coisas no front não foram implementadas da melhor maneira. A primeira que faria seria refatorar o componente ```StudentComponent``` para ele ser acessado atraves de uma rota e não apenas "escondido" na tela ao carregar.

O projeto está rodando na seguinte URL:

[https://grupo-a-front.herokuapp.com/](https://grupo-a-front.herokuapp.com/)
