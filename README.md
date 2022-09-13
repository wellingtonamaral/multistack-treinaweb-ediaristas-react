Configurações básicas do projeto

* Para criação do projeto em nextjs com typescript do zero:
npx create-nextapp nome_do_app -- typescript

##Usando o template atual

1 instalar as dependencias:
npm i

criar pasta src e colocar dentro dela a pasta "pages" e criar uma ui e colocar os styles

##configurações:
ir em tsconfig:
em compile options acrescentar
"baseUrl": "src"  obs: faz da pasta src a raiz para busca de rotas

2. apos incrementals, acrescentar:
"paths": {
      "@partials/*": ["ui/partials/*"],
      "@styles/*": ["ui/styles/*"]
    }
  },  obs: isso ajuda abreviando os caminhos passados pra achar os arquivos



  ir em eslint.json e acrescentar:
  "rules": {
    "@next/next/no-img-element": "off"
  },   obs: isso permite que o next aceite tags img normal do html.


  ######## instalação do mui/material ########
  ir em mui.com e verificar tutoriais

  comando:  npm install @mui/material @emotion/react @emotion/styled


  ##### configrando o material/ui para não ter erros de hidratação do react #####
  comandos:  

 #  excluir pasta api dentro de pages;