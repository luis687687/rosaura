# Rosaura Framework

Rosaura é um framework leve e flexível para a construção de aplicações web dinâmicas. Ele permite a criação de componentes reutilizáveis e a manipulação eficiente de rotas e estados. 

## Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação🚀)
- [Uso](#uso)
  - [Criando Componentes](#criando-componentes)
  - [Gerenciando Rotas](#gerenciando-rotas)
  - [Manipulação de Variáveis de Estado](#manipulação-de-variáveis-de-estado)
  - [Formulários e Inputs](#formulários-e-inputs)
- [Exemplos](#exemplos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral 

O Rosaura Framework foi desenvolvido para facilitar a criação de aplicações web, proporcionando uma estrutura para a construção de componentes, gerenciamento de rotas e vinculação de dados. É ideal para desenvolvedores que buscam uma alternativa leve e fácil de usar para frameworks mais pesados.

## Estrutura do Projeto

```
/project-root
├── assets
├── rosaura
│ ├── rozaura
│ ├── ...
├── routes
├── src
│ ├── Components
│ ├── Pages
│ ├── ...
├── index.html
├── index.js
└── app.js
```

### Principais Pastas e Arquivos

- **assets**: Contém arquivos estáticos como imagens e ícones.
- **rosaura**: Contém o núcleo do framework, incluindo funções e componentes principais.
- **routes**: Define as rotas da aplicação.
- **src**: Contém componentes e páginas personalizadas.
- **index.html**: O arquivo HTML principal da aplicação.
- **index.js**: O ponto de entrada da aplicação.
- **app.js**: Define a estrutura e o gerenciamento de rotas da aplicação.

## Instalação🚀

Para usar o Rosaura Framework, clone este repositório e abra o arquivo `index.html` em seu navegador, em `live server`

```bash
git clone https://github.com/luis687687/rosaura.git
cd rosaura
open index.html
```

# Uso 🔥
## Criando Componentes 💡
Os componentes são construídos usando a função `BuildComponent`. Por exemplo, para criar um botão simples:


```js
import Rosaura, { BuildComponent } from "../../../rosaura/rozaura/index.js";
const MeuBotao = () => {
    return BuildComponent({
        type: "button",
        attributes: { id: "meuBotao" },
        events: {
            click: () => alert("Botão clicado!")
        },
        childElements: ["Clique Aqui"]
    });
};
```

# Gerenciando Rotas 🚗
O Rosaura Framework fornece um sistema de roteamento simples. As rotas são definidas em `app.js` usando `RosauraRouter` e `RosauraRoute`.

```js
import Rosaura from "./rosaura/rozaura/index.js";
import Page1 from "./src/Pages/Page1/index.js";
import Page2 from "./src/Pages/Page2/index.js";

export default () => {
    return Rosaura.RosauraRouter(
        Rosaura.RosauraRoute({
            routes: [
                { element: Page1, path: "/page1", attributes: {} },
                { element: Page2, path: "/page2", attributes: {} }
            ]
        })
    );
};
```

# Manipulação de Variáveis de Estado 🎮
Utilize `defVariable` para criar variáveis de estado e `varMonitor` para monitorar alterações. Por exemplo:

```js
import { defVariable, varMonitor, varPrint } from "../../../rosaura/rozaura/index.js";

export default ({})=>{
  const [contador, setContador] = defVariable(0);

  varMonitor(() => {
      novoValor = contador.value
      console.log("O contador foi atualizado para:", novoValor);
  }, [contador]);

  return(
    BuildComponent({
      childElements: [
        BuildComponent({
          text: varPrint("Contador de cliques {} ", [contador]),
          style: {width: "fit-content"}}),

         BuildComponent({
            style: {
                background: 'brown',
                color: 'white',
                width: 'fit-content',
                padding: '10px 30px',
                borderRadius: '8px',
                cursor: 'pointer'
            },
            text: "Clica",
            events: { click: _ => setContador(contador.value + 1)}
        })
      ]
    })
  )
}

```

# Formulários e Inputs 📝
O Rosaura oferece componentes de formulário e input prontos para uso. Por exemplo, para criar um formulário:

```js
import FormComponent from "../../Components/FormComponent/index.js";
import InputComponent from "../../Components/InputComponent/index.js";

const MeuFormulario = () => {
    const [text, setText] = defVariable()

    return FormComponent({
        childElements: [
            BuildComponent({type:"h1", text: varPrint("Valor da input {}", [text])})
            InputComponent({ name: "nome", value: "", onChange: (value) => setText(value) }),

            BuildComponent({
                type: "input",
                events: {
                    click: () => alert("Formulário enviado!")
                },
                attibutes: {
                  type: "submit"
                },
                text: "Enviar"
            })
        ]
    });
};
```

# Exemplos
## Exemplo de Uso de `varPrint`

```js
import { varPrint, defVariable } from "../../../rosaura/rozaura/index.js";

const MeuComponente = () => {
  const [variable, setVariable] = defVariable(0)
  setInterval( _ => setVariable(variable.value + 1 ), 2000)

  return BuildComponent({
      text: varPrint("Texto dinâmico aqui {} à cada 2s ", [variable])
  });
};
```

# Exemplo de Uso de `routeIn`
```js
import routeIn from "../../../rosaura/rozaura/RosauraRouter/routeIn/index.js";

export default ({routerref}) => {
  
  routeIn((params) => {
    console.log("Rota aberta com parâmetros da url:", params);
  }, { routerref });

return(
    BuildComponent({
      text: "Página 1"
    })
  )
}
```
`params` contém um objecto com os parâmetros da url actual
`routerref` é obrigatório ser declarado como atributo de um objecto dentro do parámetro da função principal