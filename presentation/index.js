import React, { Component } from 'react';

import {
  Anim, Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction, S
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import createTheme from "spectacle/lib/themes/default";

import Tachable from '../assets/tachable';

require('normalize.css');

const images = {
  tren: require('../assets/tren.jpg'),
  ryanflorence: require('../assets/ryanflorence_400x400.jpg'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
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
                  <S type="italic strikethrough">componentDidMount()</S> ni <S type="italic strikethrough">componentDidUpdate()</S>.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide
            transitionIn={['slide']}
            bgColor="primary"
            margin="-50px 0 40px 0"
            notes="<ul><li>talk about that</li><li>and that</li></ul>"
          >
            <Heading size={3} caps  textColor="tertiary">
              Imperative
            </Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/01/01-lecture/AppStart.example')}
              height="600px"
              overflow="auto"
            />
          </Slide>

          <Slide
            transitionIn={['slide']}
            bgColor="primary"
            margin="-50px 0 40px 0"
            notes="<ul><li>talk about that</li><li>and that</li></ul>"
          >
            <Heading size={3} caps  textColor="tertiary">
              Declarative
            </Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/01/01-lecture/App.example')}
              height="600px"
              overflow="auto"
            />
          </Slide>
        </SlideSet>
        {/* <Slide goTo={3}>
          <ComponentPlayground
            theme="dark"
          />
        </Slide> */}
        <Slide
          transitionIn={['slide']}
          bgColor="primary"
          margin="-50px 0 40px 0"
          notes="<ul><li>talk about that</li><li>and that</li></ul>"
        >
          <Heading size={3} caps  textColor="tertiary">
            Composable
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/02/02-lecture/AppStart.example')}
            height="600px"
            overflow="auto"
          />
        </Slide>
        <Slide transition={['slide']} bgImage={images.tren.replace('/', '')} bgDarken={0.55}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['slide']}>
          <div>
            <Heading size={6} caps fit textColor="secondary">
              Flexible<br />animations
            </Heading>
          </div>
        </Slide>
        <Slide transition={['slide']} bgDarken={0.75} getAnimStep={this.updateSteps}>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['spin', 'zoom']} bgColor="tertiary" controlColor="primary" progressColor="primary">
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace('/', '')})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
  * Add some \`inline code\` to your sldes!
            `}
          </Markdown>
        </Slide>
        {
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `
        }
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <SlideSet>
          <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Tachable />
          </Slide>
        </SlideSet>
        <Slide transition={['slide']} bgColor="primary"
          notes="Hard to find cities without any pizza"
        >
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidable.com"><Image width="100%" src={images.logo} /></Link>
        </Slide>
      </Deck>
    );
  }
}