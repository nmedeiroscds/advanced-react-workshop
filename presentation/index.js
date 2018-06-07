import React, { Component } from 'react';

import {
  Anim, Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction, S
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import createTheme from "spectacle/lib/themes/default";

import Tachable from '../assets/tachable';

require('normalize.css');

const images = {
  tren: require('../assets/tren.jpg'),
  kat: require('../assets/kat.png'),
  ryanflorence: require('../assets/ryanflorence_400x400.jpg'),
  tabs: require('../assets/tabs.png'),
  tabs_bottom: require('../assets/tabs_bottom.png'),
  hambur: require('../assets/hambur.jpg'),
  logo: require('../assets/formidable-logo.svg'),
  linkedin: require('../assets/linkedin.jpg'),
  linkedin_01: require('../assets/linkedin_01.jpg'),
  propaganda: require('../assets/propaganda.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: '#6BA099'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500}>
        
        <Slide transition={['zoom']} bgColor="primary" bgImage={images.tren.replace('/', '')} bgDarken={0.55}>
          <Heading size={4} textColor="white" caps>
            Advanced React of today and tomorrow
          </Heading>
          <Text textSize="1.2em" margin="20px 0px 0px" textColor="primary" bold>
            Instructor: Ryan Florence
            (@ryanflorence)
            <br/>
            11 y 12 de mayo, 2018
            <br/>
            San Francisco, CA
          </Text>
        </Slide>

        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              if (!forward) return;
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Fill>
            <Image src={images.propaganda.replace('/', '')} height="650px" />
          </Fill>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Fill>
            <Image src={images.linkedin_01.replace('/', '')} height="650px" />
          </Fill>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Fill>
            <Image src={images.linkedin.replace('/', '')} height="650px" />
          </Fill>
        </Slide>


        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          <Heading size={4} textColor="white" caps margin="0px auto 40px">
            Instructor
          </Heading>
          <Image src={images.ryanflorence.replace('/', '')} margin="0px auto 40px" />
          <Text textSize="1.2em" textColor="primary" textFont="primary">
            Ryan Florence
          </Text>
          <Text textSize="0.9em" textColor="primary" textFont="primary">
            <br/>
            Co-author of React Router
            <br/>
            He’s worked on small teams at agencies, large teams at successful startups, and as the owner of a small business. 
          </Text>
        </Slide>

        


        <Slide transition={['slide']}>
          <div>
            <Heading size={1} caps  textColor="secondary">
              TOPICS
            </Heading>
            <List>
              <Appear><ListItem>Component Composition</ListItem></Appear>
              <Appear><ListItem>Extending React</ListItem></Appear>
              <Appear><ListItem>Compound Components</ListItem></Appear>
              <Appear><ListItem>NEW! React Context You Can Use</ListItem></Appear>
              <Appear><ListItem>Higher Order Components</ListItem></Appear>
              <Appear><ListItem>Render Props</ListItem></Appear>
              <Appear><ListItem>Accessible Components</ListItem></Appear>
              <Appear><ListItem>NEW! React Call/Return</ListItem></Appear>
              <Appear><ListItem>NEW! React Async Rendering and Data Loading</ListItem></Appear>
            </List>
          </div>
        </Slide>

        <SlideSet>
          <Slide
            transition={['slide']} 
            notes="Imperativo: Es como manejar un auto con cambios manuales
                donde para llegar a 100km tenes que ir haciendo los cambios
                Declarativo: En un auto automatico con cruise control, le decis quiero
                ir a 100km y el lo hace.
                
                Al programar declarativamente decimos el estado al que queremos llegar.
                Eliminamos el tiempo
                UI = f(e)
                

                
                "
          >
            <Heading size={1} caps  textColor="tertiary">
              Declarativo
            </Heading>
            <Appear fid="2">
              <Heading size={5} textColor="secondary">
                We eliminate time
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} textColor="tertiary">
              <S type="italic">UI = f(state)</S>
              </Heading>
            </Appear>
            <Appear fid="3" >
              <Heading size={4} fit textColor="tertiary" margin="40px 0">
              <S type="italic">componentDidMount()</S> y <S type="italic">componentDidUpdate()</S>
              </Heading>
            </Appear>
          </Slide>

          
          <Slide transition={['spin']} >
            <div>
              <Heading size={2} caps fit textColor="tertiary" >
                Ya que estamos...
              </Heading>
              
              <Appear fid="1" >
                <Text>
                  <S type="italic strikethrough">componentWillMount()</S> ni <S type="italic strikethrough">componentWillUpdate()</S>.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide
            transitionIn={['slide']}
            bgColor="primary"
            margin="0px 0 40px 0"
            notes="<ul><li>talk about that</li><li>and that</li></ul>"
          >
            <Heading size={3} caps  textColor="tertiary">
              Imperative
            </Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/01/01-lecture/AppStart.example')}
              height="550px"
              overflow="auto"
            />
          </Slide>

          <Slide
            transitionIn={['slide']}
            bgColor="primary"
            margin="0px 0 40px 0"
            notes="<ul><li>componentDidMount and componentDidUpdate are wonderful React life cycle hooks that can be used together in order to isolate and perform imperative operations. </li>
                  <li>They are React's way of giving us a chance to participate in updating the app in response to a change in state.</li></ul>"
          >
            <Heading size={3} caps  textColor="tertiary">
              Declarative
            </Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/01/01-lecture/App.example')}
              height="550px"
              overflow="auto"
            />
          </Slide>

          <Slide
            transitionIn={['slide']}
            bgColor="primary"
            margin="0px 0 40px 0"
            notes=""
          >
            <Heading size={3} caps  textColor="tertiary">
            TL;DR
            </Heading>
            <Text textAlign="left">
            
              <p><S type="bold">Behavioral React Components</S>: 
                Son componentes que no renderizan nada sino que únicamente proveen algún tipo de comportamiento o state.
                </p>
                <p>
              <S type="bold">componentDidMount</S> y <S type="bold">componentDidUpdate</S> son ideales para usarlos en conjunto para aislar y ejecutar acciones imperativas. 
              Así es como React nos permite customizar la manera en que se actualiza la app en respuesta a cambios de estados.
              </p>
            </Text> 
          </Slide>

        </SlideSet>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps  textColor="tertiary">
            Composable?
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/02/02-lecture/AppStart.example')}
                height="550px"
                overflow="auto"
              />
            </Fill>
            <Fill>
              <Image width="90%" margin="10px auto 10px auto" src={images.tabs} />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} caps fit  textColor="tertiary">
            Composable Components
          </Heading>
          <Layout>
            <Fill>
              <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/02/02-lecture/Composable.example')}
                height="550px"
                overflow="auto"
              />
            </Fill>
            <Fill>
              <Image width="90%" margin="10px auto 10px auto" src={images.tabs} />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} fit caps  textColor="tertiary">
            Composable Components API
          </Heading>
          <Layout>
            <Fill>
              <Image width="90%" margin="10px auto 10px auto" src={images.tabs_bottom} />
            </Fill>
            <Appear fid="2">
              <Fill>
                <CodePane
                  margin={10}
                  lang="jsx"
                  source={require('raw-loader!../assets/02/02-lecture/AppMedio.example')}
                  height="550px"
                  overflow="auto"
                />
              </Fill>
           </Appear>
          </Layout>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={1} fit caps  textColor="tertiary">
            Component Components
          </Heading>
          <Layout>
            <Fill>
              <Image width="90%" margin="10px auto 10px auto" src={images.tabs_bottom} />
            </Fill>
            <Fill>
              <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/02/02-lecture/ComponentComponent.example')}
                height="550px"
                overflow="auto"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes="Implicit state: non app-level state that the product developer doesn't care about or see in order to use the component API successfully; in React, this is generally accomplished by using React.Children.map and React.cloneElement in order to implicitly pass state-derived or event-callback props to children
                  Component components: design architecture that helps avoid having one component in charge of too much rendering or state; the pattern encourages components to have limit responsibility, which helps identify where certain state and rendering should be owned in a component composition, rather than exposing all options at a single, top-level component with an ever-growing list of props
                  Compound components generally have some level of implicit prop passing in order to accomplish the task of limited responsibility. Rather than treating children components as something to be immediately rendered, compound components clone and extend children components in order pass along useful data."
        >
          <div>
            <Heading size={4} caps  textColor="tertiary" >
              TL;DR
            </Heading>
            
            <List>
              <Appear><ListItem><S type="bold">App-level state</S>: state que le interesa al developer y con el que quiere tener la posibilidad de interactuar</ListItem></Appear>
              <Appear><ListItem><S type="bold">Implicit state</S>: state que no está a nivel de App, por lo que no le interesa al usuario de la API del componente. En React esto lo logramos usando <S type="italic">React.Children.map()</S> y <S type="italic">React.cloneElement()</S></ListItem></Appear>
              <Appear><ListItem><S type="bold">Compound components</S>: en general necesitamos pasar props implicitamente, clonando elementos, para lograr limitar la responsabilidad</ListItem></Appear>
              <Appear><ListItem><S type="bold">Component components</S>: diseño de arquitectura que ayuda a evitar que un componente tenga demasiada responsabilidad de rendering o state (ej: jQuery datepicker)</ListItem></Appear>
            </List>
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes="
            React context is implemented in two parts: a provider and a consumer.
            The provider component uses the static childContextTypes property in order to specify the name, type, and requirement of the context it plans to provide, and then makes use of the getChildContext life cycle hook to actually provide a context object.
            The consumer component uses the static contextTypes property to specific the name, type, and requirement of the context it plans to consume. If the context properties on the provider match the context properties on the consumer, the consumer can make use of the properties available within the component on this.context.
          "
        >
          <div>
            <Heading size={1} fit caps  textColor="tertiary" >
              Implicit State with Context
            </Heading>
            
            <Fill>
              <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/03/03-lecture/AppStart.example')}
                height="450px"
                overflow="auto"
              />
            </Fill>
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3} caps textColor="tertiary" >
              Context
            </Heading>
            <List>
              <ListItem>React v16.3.0</ListItem>
              <ListItem>React context se implementa en dos partes: un <S type="italic">provider</S> y un <S type="italic">consumer</S>.</ListItem>
              <ListItem><S type="bold">Provider</S>: usa la propiedad estática <S type="italic">childContextTypes</S> para especificar el contexto que va a proveer y luego utlizando el hook <S type="italic">getChildContext</S> puede preveer el context</ListItem>
              <ListItem><S type="bold">Consumer</S>: usa la propiedad estática <S type="italic">contextTypes</S> para especificar el contexto que va a consumir. Luego puede utilizar las propiedades de <S type="italic">this.context</S> que matcheen con las declaradas por el <S type="italic">provider</S> </ListItem>
            </List>  
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3} caps textColor="tertiary" >
              Context
            </Heading>
            
            <Fill>
              <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/03/03-lecture/App.example')}
                height="600px"
                overflow="auto"
              />
            </Fill>
          </div>
        </Slide>


        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={1} fit caps  textColor="tertiary" >
            Higher Order Components
            </Heading>
            
            <Fill>
              <Text textAlign="left">
                <p>
                  Los HOCs son funciones que toman un componente como argumento y devuelve un nuevo comoponente con algo de comportamiento extra.
                </p>
                <p>
                  Un HOC <b>NO</b> es un componente que returna un componente, porque eso es precisamente lo que hace por defecto todo componente React.
                </p>
              </Text>
            </Fill>
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={1} fit caps  textColor="tertiary" >
            Higher Order Components
            </Heading>
            
            <Fill>
              <Text textAlign="left">
                <p>
                  Son ideales para compartir comportamiento y configuración. 
                  <br/>
                  <br/>👀 Tener cuidado con: 
  
                  <List>
                    <ListItem>evitar colisión de nombres al usuar multiples HOCs</ListItem>
                    <ListItem>tener claro las propiedades aportadas por cada HOC</ListItem>
                    <ListItem>no sobreescribir comportamiento del componente original</ListItem>
                  </List>
                </p>
              </Text>
            </Fill>
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3}  caps textColor="tertiary" >
              HOCs
            </Heading>
            
            <Fill>
              <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/04/04-lecture/AppStart.example')}
                height="600px"
                overflow="auto"
              />
            </Fill>
          </div>
        </Slide>


        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3}  caps textColor="tertiary" >
              HOCs
            </Heading>
            
            <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/04/04-lecture/App.example')}
                height="600px"
                overflow="auto"
              />
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3}  caps textColor="tertiary" >
              Explicit State with HOCs
            </Heading>
            
            <Text textAlign="left">
              Los HOCs permiten compartir estado de forma explicita. 
            </Text> 
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={1} fit  caps textColor="tertiary" >
              Render prop callbacks
            </Heading>

            <List>
              <ListItem>Todo HOC puede ser implementado como un render callback.</ListItem>
              <ListItem>Los render callbacks componen dinamicamente. Ocurren al momento de renderizar un elemento en el metodo render de un componente.</ListItem>
              <ListItem>Los HOCs componen estaticamente. Ocurre al momento de definir a nuestro componente, no cuando lo renderizamos.</ListItem>
            </List> 
          </div>
        </Slide>

         <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={1} fit  caps textColor="tertiary" >
              Render prop callbacks
            </Heading>

            <Text textAlign="left">
              Son otra manera de extraer comportamiento de un componente a otro componente de forma que pueda ser comportido y reusable. 
              <p>
                Pero el <b>verdadero beneficio</b> está en que permite componer el <i>state</i> y compartirlo en la App.
              </p>
            </Text>
          </div>
        </Slide>

        
        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3}  caps textColor="tertiary" >
              Render Props
            </Heading>
            
            <CodePane
                margin={10}
                lang="jsx"
                source={require('raw-loader!../assets/05/05-lecture/App.example')}
                height="600px"
                overflow="auto"
              />
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3} textColor="tertiary" >
              HOCs
            </Heading>
            
            <List>
              <ListItem>Todo HOC puede ser implementado como un render callback.</ListItem>
              <ListItem>Los render callbacks componen dinamicamente. Ocurren al momento de renderizar un elemento en el metodo render de un componente.</ListItem>
              <ListItem>Los HOCs componen estaticamente. Ocurre al momento de definir a nuestro componente, no cuando lo renderizamos.</ListItem>
            </List> 
          </div>
        </Slide>

        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3} fit caps textColor="tertiary" >
              Async Rendering y Suspense
            </Heading>

            <List>
              <ListItem><b>Suspense:</b> permiter diferir el renderizado de una parte del árbol de la app hasta que se cumpla una cierta condición.</ListItem>
              <ListItem>en el metodo render, lee un valor del cache</ListItem>
              <ListItem>si el valor está cacheado, el rendering continúa normalmente</ListItem>
              <ListItem>si el valor no está cacheado, el cache <b>tira una promesa</b>.</ListItem>
            </List> 
          </div>
        </Slide>


        <Slide
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={images.kat.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>


        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
            <Heading size={3} fit caps textColor="tertiary" >
              Async Rendering y Suspense
            </Heading>

            <Text textAlign="left" margin="30px 0 30px 0">
              <p>Cuando la promesa se resuelve, React vuelve a intentar renderizar desde donde había dejado. 
                Esta feature se puede implementar gracias a los <b>Error Boundaries.</b></p>
              <Appear fid={1}>
                <p>Necesitamos usar <i>React.Timeout</i>:</p>
              </Appear>
            </Text> 
            <Appear fid={2}>
              <CodePane
                  margin={10}
                  lang="jsx"
                  source={require('raw-loader!../assets/06/06-lecture/App.example')}
                  height="600px"
                  overflow="auto"
                />
            </Appear>
          </div>
        </Slide>


        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="0px 0 40px 0"
          notes=""
        >
          <div>
          <iframe width="860" height="515" src="https://www.youtube.com/embed/nLF0n9SACd4?rel=0&amp;start=285" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="tertiary" >
            Muchas gracias 🙌🏻
          </Heading>
          <center>
            <Image margin="20px 0px 0px" width="70%" src={images.hambur.replace('/', '')} />
          </center>
        </Slide>
      </Deck>
    );
  }
}